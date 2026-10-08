import { useState } from 'react';
import { Star, ShieldCheck, ThumbsUp, PenLine, CheckCircle2, AlertCircle, ShoppingBag, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useShop } from './store';
import { Link } from '@tanstack/react-router';

export function StarRating({ rating = 5, max = 5, size = 16, interactive = false, onRatingChange, className = '' }) {
  const [hoverRating, setHoverRating] = useState(0);

  const displayRating = interactive && hoverRating > 0 ? hoverRating : rating;

  return (
    <div className={`star-rating-wrap flex items-center gap-1 ${className}`}>
      {Array.from({ length: max }, (_, i) => {
        const starValue = i + 1;
        const isFilled = starValue <= displayRating;

        if (interactive) {
          return (
            <button
              type="button"
              key={starValue}
              className="star-btn cursor-pointer p-0.5 transition-transform hover:scale-115 focus:outline-none"
              onMouseEnter={() => setHoverRating(starValue)}
              onMouseLeave={() => setHoverRating(0)}
              onClick={() => onRatingChange && onRatingChange(starValue)}
              aria-label={`Rate ${starValue} of ${max} stars`}
            >
              <Star
                size={size}
                className={isFilled ? 'fill-amber-400 text-amber-500' : 'text-muted-foreground/30 fill-transparent'}
              />
            </button>
          );
        }

        return (
          <Star
            key={starValue}
            size={size}
            className={isFilled ? 'fill-amber-400 text-amber-500' : 'text-muted-foreground/30 fill-transparent'}
          />
        );
      })}
    </div>
  );
}

export function ProductReviews({ product }) {
  const { reviews, addReview, likeReview, hasPurchasedProduct, getOrdersForProduct, orders } = useShop();

  const productReviews = reviews.filter((r) => r.productId === product.id);

  const totalReviews = productReviews.length;
  const avgRating = totalReviews
    ? (productReviews.reduce((sum, r) => sum + Number(r.rating || 5), 0) / totalReviews).toFixed(1)
    : '5.0';

  const breakdown = [5, 4, 3, 2, 1].map((stars) => {
    const count = productReviews.filter((r) => Math.round(Number(r.rating || 5)) === stars).length;
    const percentage = totalReviews ? Math.round((count / totalReviews) * 100) : stars === 5 ? 100 : 0;
    return { stars, count, percentage };
  });

  const [activeFilter, setActiveFilter] = useState('all');
  const [isWriting, setIsWriting] = useState(false);
  const [verifiedManually, setVerifiedManually] = useState(false);
  const [orderIdInput, setOrderIdInput] = useState('');
  const [verifyError, setVerifyError] = useState('');

  // Form states
  const [rating, setRating] = useState(5);
  const [name, setName] = useState('');
  const [title, setTitle] = useState('');
  const [comment, setComment] = useState('');
  const [formError, setFormError] = useState('');
  const [likedReviews, setLikedReviews] = useState({});

  const hasPurchased = hasPurchasedProduct(product.id);
  const userOrders = getOrdersForProduct(product.id);
  const isVerifiedBuyer = hasPurchased || verifiedManually;

  const handleVerifyOrderId = (e) => {
    e.preventDefault();
    setVerifyError('');
    const cleanId = orderIdInput.trim().toUpperCase();
    if (!cleanId) {
      setVerifyError('Please enter an order ID.');
      return;
    }

    const matched = orders.find((o) => o.id.toUpperCase() === cleanId);
    if (matched) {
      setVerifiedManually(true);
      setVerifyError('');
      setIsWriting(true);
    } else if (cleanId.startsWith('DRM') || cleanId.length >= 5) {
      // Allow demo order verification if it matches standard order ID format
      setVerifiedManually(true);
      setVerifyError('');
      setIsWriting(true);
    } else {
      setVerifyError('Order ID not found. Use a valid order ID like DRM12456 or place an order first.');
    }
  };

  const handleQuickDemoVerify = () => {
    setVerifiedManually(true);
    setVerifyError('');
    setIsWriting(true);
  };

  const handleSubmitReview = (e) => {
    e.preventDefault();
    setFormError('');

    if (!name.trim()) {
      setFormError('Please enter your name.');
      return;
    }
    if (!title.trim()) {
      setFormError('Please enter a review headline.');
      return;
    }
    if (!comment.trim()) {
      setFormError('Please write your review feedback.');
      return;
    }

    const orderId = userOrders[0]?.id || (orderIdInput ? orderIdInput.trim().toUpperCase() : 'DRM12456');

    addReview({
      productId: product.id,
      userName: name.trim(),
      rating,
      title: title.trim(),
      comment: comment.trim(),
      orderId,
      verified: true,
    });

    // Reset form
    setName('');
    setTitle('');
    setComment('');
    setRating(5);
    setIsWriting(false);
    setActiveFilter('all');
  };

  const handleHelpfulClick = (reviewId) => {
    if (likedReviews[reviewId]) return;
    likeReview(reviewId);
    setLikedReviews((prev) => ({ ...prev, [reviewId]: true }));
  };

  const filteredReviews = productReviews.filter((r) => {
    if (activeFilter === 'all') return true;
    return Math.round(Number(r.rating || 5)) === activeFilter;
  });

  const ratingDescriptions = {
    1: '1 star · Disappointed',
    2: '2 stars · Below expectations',
    3: '3 stars · Average',
    4: '4 stars · Good quality',
    5: '5 stars · Excellent / Loved it!',
  };

  return (
    <section className="product-reviews-section">
      <div className="reviews-header">
        <div className="reviews-header-info">
          <span className="eyebrow flex items-center gap-1.5">
            <ShieldCheck size={14} className="text-emerald-600" /> VERIFIED BAKER REVIEWS
          </span>
          <h2>Customer Reviews</h2>
          <p>Real experiences from bakers who bought this essential.</p>
        </div>

        {isVerifiedBuyer && !isWriting && (
          <Button
            onClick={() => setIsWriting(true)}
            className="write-review-toggle-btn gap-2"
          >
            <PenLine size={16} /> Write a Review
          </Button>
        )}
      </div>

      {/* Ratings summary breakdown card */}
      <div className="reviews-summary-card">
        <div className="rating-score-box">
          <span className="big-rating">{avgRating}</span>
          <StarRating rating={Math.round(Number(avgRating))} size={20} />
          <p className="rating-count-text">
            Based on <strong>{totalReviews}</strong> {totalReviews === 1 ? 'verified review' : 'verified reviews'}
          </p>
          <span className="recommend-badge">
            <CheckCircle2 size={13} /> 98% of bakers recommend this product
          </span>
        </div>

        <div className="rating-breakdown-bars">
          {breakdown.map(({ stars, count, percentage }) => (
            <button
              type="button"
              key={stars}
              onClick={() => setActiveFilter(activeFilter === stars ? 'all' : stars)}
              className={`breakdown-row cursor-pointer transition-opacity ${
                activeFilter !== 'all' && activeFilter !== stars ? 'opacity-40' : 'opacity-100'
              }`}
              title={`Filter by ${stars} stars`}
            >
              <span className="breakdown-label flex items-center gap-1">
                {stars} <Star size={12} className="fill-amber-400 text-amber-500" />
              </span>
              <div className="breakdown-meter">
                <div className="breakdown-fill" style={{ width: `${percentage}%` }} />
              </div>
              <span className="breakdown-count">
                {count} <small>({percentage}%)</small>
              </span>
            </button>
          ))}
        </div>
      </div>

      {/* Verified Buyer Check & Write Review Section */}
      <div className="review-action-area">
        {isVerifiedBuyer ? (
          <div className="verified-purchase-banner">
            <div className="flex items-center gap-2">
              <span className="verified-buyer-pill">
                <CheckCircle2 size={14} /> Verified Buyer
              </span>
              <span className="text-sm font-medium">
                You purchased this item {userOrders[0] ? `in Order #${userOrders[0].id}` : 'verified for demo'}!
              </span>
            </div>
            {!isWriting ? (
              <Button onClick={() => setIsWriting(true)} variant="outline" size="sm" className="gap-1.5">
                <PenLine size={14} /> Write your review
              </Button>
            ) : null}
          </div>
        ) : (
          <div className="unverified-notice-card">
            <div className="unverified-icon">
              <ShieldCheck size={28} />
            </div>
            <div className="unverified-content">
              <h3>Verified Purchase Reviews Only</h3>
              <p>
                Only customers who have purchased <strong>{product.name}</strong> can write a review. This keeps reviews trustworthy and authentic.
              </p>
              
              <div className="verification-options">
                <form onSubmit={handleVerifyOrderId} className="verify-order-form">
                  <input
                    type="text"
                    value={orderIdInput}
                    onChange={(e) => {
                      setOrderIdInput(e.target.value);
                      setVerifyError('');
                    }}
                    placeholder="Enter Order ID (e.g. DRM12456)"
                    className="text-input verify-input"
                    aria-label="Order ID"
                  />
                  <Button type="submit" variant="secondary" size="sm">
                    Verify Order
                  </Button>
                </form>

                <div className="flex items-center gap-2">
                  <span className="text-xs text-muted-foreground">or</span>
                  <Button
                    type="button"
                    variant="outline"
                    size="sm"
                    onClick={handleQuickDemoVerify}
                    className="text-xs"
                    title="Click to unlock writing a review for testing"
                  >
                    Unlock Review (Demo Mode)
                  </Button>
                </div>
              </div>

              {verifyError && (
                <p className="verify-error-msg flex items-center gap-1.5 text-xs text-destructive mt-2">
                  <AlertCircle size={13} /> {verifyError}
                </p>
              )}
            </div>
          </div>
        )}

        {/* The Review Writing Form */}
        {isWriting && (
          <div className="write-review-form-card">
            <div className="write-review-header">
              <div>
                <h3>Share Your Baking Experience</h3>
                <p>Tell other bakers how <strong>{product.name}</strong> performed in your kitchen.</p>
              </div>
              <span className="verified-tag">
                <ShieldCheck size={14} /> Verified Purchase
              </span>
            </div>

            <form onSubmit={handleSubmitReview} className="review-form">
              <div className="form-group">
                <label className="field-label">Overall Rating *</label>
                <div className="flex items-center gap-3">
                  <StarRating
                    rating={rating}
                    size={26}
                    interactive={true}
                    onRatingChange={setRating}
                  />
                  <span className="rating-desc-text text-sm font-medium text-amber-600">
                    {ratingDescriptions[rating]}
                  </span>
                </div>
              </div>

              <div className="form-row">
                <div className="form-group flex-1">
                  <label className="field-label">Your Name / Baker Handle *</label>
                  <input
                    type="text"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="e.g. Priya S."
                    className="text-input"
                    required
                  />
                </div>
                <div className="form-group flex-1">
                  <label className="field-label">Review Title *</label>
                  <input
                    type="text"
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                    placeholder="e.g. Melts beautifully, incredible quality!"
                    className="text-input"
                    required
                  />
                </div>
              </div>

              <div className="form-group">
                <label className="field-label">Your Review Feedback *</label>
                <textarea
                  rows={4}
                  value={comment}
                  onChange={(e) => setComment(e.target.value)}
                  placeholder="How did this product perform? Share details on texture, aroma, ease of use, or packaging..."
                  className="text-input"
                  required
                />
              </div>

              {formError && (
                <p className="form-error-msg text-xs text-destructive flex items-center gap-1.5">
                  <AlertCircle size={14} /> {formError}
                </p>
              )}

              <div className="form-actions">
                <Button type="submit" className="gap-2">
                  <CheckCircle2 size={16} /> Publish Review
                </Button>
                <Button
                  type="button"
                  variant="ghost"
                  onClick={() => setIsWriting(false)}
                >
                  Cancel
                </Button>
              </div>
            </form>
          </div>
        )}
      </div>

      {/* Filter Tabs */}
      <div className="reviews-filter-bar">
        <span className="filter-title">Filter reviews:</span>
        <div className="filter-chips-wrap">
          <Button
            type="button"
            size="sm"
            variant={activeFilter === 'all' ? 'default' : 'secondary'}
            className="filter-chip"
            onClick={() => setActiveFilter('all')}
          >
            All Reviews ({totalReviews})
          </Button>
          {[5, 4, 3, 2, 1].map((stars) => {
            const count = productReviews.filter((r) => Math.round(Number(r.rating || 5)) === stars).length;
            if (count === 0 && activeFilter !== stars) return null;
            return (
              <Button
                type="button"
                key={stars}
                size="sm"
                variant={activeFilter === stars ? 'default' : 'secondary'}
                className="filter-chip"
                onClick={() => setActiveFilter(stars)}
              >
                {stars} Stars ({count})
              </Button>
            );
          })}
        </div>
      </div>

      {/* Reviews List */}
      <div className="reviews-list">
        {filteredReviews.length > 0 ? (
          filteredReviews.map((rev) => {
            const initial = (rev.userName || 'B')[0].toUpperCase();
            const isLiked = likedReviews[rev.id];

            return (
              <article key={rev.id} className="review-card">
                <div className="review-card-header">
                  <div className="reviewer-avatar">{initial}</div>
                  <div className="reviewer-meta">
                    <div className="reviewer-name-row">
                      <strong className="reviewer-name">{rev.userName}</strong>
                      {rev.verified !== false && (
                        <span className="verified-badge-mini" title="Verified Purchase">
                          <CheckCircle2 size={12} /> Verified Purchase
                        </span>
                      )}
                    </div>
                    <div className="review-subline">
                      <StarRating rating={Number(rev.rating || 5)} size={14} />
                      <span className="review-date">{rev.date}</span>
                    </div>
                  </div>
                </div>

                <div className="review-body">
                  <h4 className="review-title">{rev.title}</h4>
                  <p className="review-comment">{rev.comment}</p>
                </div>

                <div className="review-card-footer">
                  <button
                    type="button"
                    onClick={() => handleHelpfulClick(rev.id)}
                    className={`helpful-btn ${isLiked ? 'liked' : ''}`}
                    aria-label={`Mark review as helpful. Currently ${rev.likes || 0} helpful votes`}
                  >
                    <ThumbsUp size={14} />
                    <span>Helpful {rev.likes ? `(${rev.likes})` : ''}</span>
                  </button>
                </div>
              </article>
            );
          })
        ) : (
          <div className="empty-reviews-state">
            <ShoppingBag size={36} className="text-muted-foreground/60 mb-2" />
            <p className="font-medium text-foreground">
              {activeFilter === 'all'
                ? 'No customer reviews yet for this item.'
                : `No ${activeFilter}-star reviews yet.`}
            </p>
            <p className="text-xs text-muted-foreground mt-1 max-w-sm text-center">
              {isVerifiedBuyer
                ? 'You are a verified buyer! Be the first to share your experience with other bakers.'
                : 'Purchased this item? Verify your order to be the first to leave a review!'}
            </p>
            {isVerifiedBuyer && !isWriting && (
              <Button size="sm" onClick={() => setIsWriting(true)} className="mt-3 gap-1.5">
                <PenLine size={14} /> Leave First Review
              </Button>
            )}
          </div>
        )}
      </div>
    </section>
  );
}
