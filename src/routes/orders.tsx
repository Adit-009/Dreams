import { createFileRoute } from '@tanstack/react-router';
import { OrdersPage } from '@/components/shop/account';
import { shopHead } from '@/lib/shop-head';
export const Route = createFileRoute('/orders')({
 head: () => shopHead('My Orders', 'Browse your DREAMS orders and delivery statuses.'),
 component: Page,
});
function Page() {
 return <OrdersPage/>;
}
