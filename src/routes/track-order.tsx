import { createFileRoute } from '@tanstack/react-router';
import { TrackingPage } from '@/components/shop/checkout';
import { shopHead } from '@/lib/shop-head';
export const Route = createFileRoute('/track-order')({
 head: () => shopHead('Track Your Order', 'Follow every step of your DREAMS baking supplies order.'),
 component: Page,
 validateSearch: (search: Record<string, unknown>) => ({ id: typeof search['id'] === 'string' ? search['id'] : '' }),
});
function Page() {
 return <TrackingPage/>;
}
