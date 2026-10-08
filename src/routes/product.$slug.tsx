import { createFileRoute } from '@tanstack/react-router';
import { ProductPage } from '@/components/shop/catalog';
import { shopHead } from '@/lib/shop-head';
export const Route = createFileRoute('/product/$slug')({
 head: () => shopHead('Baking Essentials', 'Find product sizes, ingredients and your favorite baking supplies at DREAMS.'),
 component: Page,
});
function Page() {
 const { slug } = Route.useParams();
 return <ProductPage slug={slug}/>;
}
