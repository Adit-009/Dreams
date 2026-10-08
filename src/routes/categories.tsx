import { createFileRoute } from '@tanstack/react-router';
import { CategoriesPage } from '@/components/shop/catalog';
import { shopHead } from '@/lib/shop-head';
export const Route = createFileRoute('/categories')({
 head: () => shopHead('Shop by Category', 'Explore chocolate, ingredients, decorations, candles, packaging and bakery supplies.'),
 component: Page,
});
function Page() {
 return <CategoriesPage/>;
}
