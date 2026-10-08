import { createFileRoute } from '@tanstack/react-router';
import { CheckoutPage } from '@/components/shop/checkout';
import { shopHead } from '@/lib/shop-head';
export const Route = createFileRoute('/checkout')({
 head: () => shopHead('Checkout', 'Choose delivery and preview your baking supplies order with demo payments.'),
 component: Page,
});
function Page() {
 return <CheckoutPage/>;
}
