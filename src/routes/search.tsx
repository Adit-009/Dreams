import { createFileRoute } from '@tanstack/react-router';
import { SearchPage } from '@/components/shop/catalog';
import { shopHead } from '@/lib/shop-head';
export const Route = createFileRoute('/search')({
 head: () => shopHead('Search Baking Supplies', 'Find chocolate chips, cake boxes, cocoa powder and more at DREAMS.'),
 component: Page,
});
function Page() {
 return <SearchPage/>;
}
