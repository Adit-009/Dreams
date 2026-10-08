import { createFileRoute } from '@tanstack/react-router';
import { CartPage } from '@/components/shop/checkout';
import { shopHead } from '@/lib/shop-head';
export const Route = createFileRoute('/cart')({
 head: () => shopHead('My Cart', 'Your DREAMS baking supplies, quantities and order summary.'),
 component: Page,
});
function Page() {
 return <CartPage/>;
}
