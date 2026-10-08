import { createFileRoute } from '@tanstack/react-router';
import { WishlistPage } from '@/components/shop/catalog';
import { shopHead } from '@/lib/shop-head';
export const Route = createFileRoute('/wishlist')({
 head: () => shopHead('Your Wishlist', 'Save your favorite baking essentials for your next creation.'),
 component: Page,
});
function Page() {
 return <WishlistPage/>;
}
