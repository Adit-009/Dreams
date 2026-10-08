import { createFileRoute } from '@tanstack/react-router';
import { CategoryPage } from '@/components/shop/catalog';
import { shopHead } from '@/lib/shop-head';
export const Route = createFileRoute('/category/$slug')({
 head: () => shopHead('Baking Collection', 'Discover your favorite baking essentials in the DREAMS collection.'),
 component: Page,
});
function Page() {
 const { slug } = Route.useParams();
 return <CategoryPage slug={slug}/>;
}
