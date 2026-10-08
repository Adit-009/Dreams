import { createFileRoute } from '@tanstack/react-router';
import { HomePage } from '@/components/shop/catalog';
import { shopHead } from '@/lib/shop-head';
export const Route = createFileRoute('/')({
 head: () => shopHead('Baking Supplies & More', 'Shop chocolate, baking ingredients, decorations and packaging for your next beautiful bake.'),
 component: Page,
});
function Page() {
 return <HomePage/>;
}
