import { createFileRoute } from '@tanstack/react-router';
import { OrderPage } from '@/components/shop/checkout';
import { shopHead } from '@/lib/shop-head';
export const Route = createFileRoute('/order/$id')({
 head: () => shopHead('Order Details', 'Review your DREAMS order, payment status and delivery information.'),
 component: Page,
});
function Page() {
 const { id } = Route.useParams();
 return <OrderPage id={id}/>;
}
