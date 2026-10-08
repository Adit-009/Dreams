import { createFileRoute } from '@tanstack/react-router';
import { AboutPage } from '@/components/shop/account';
import { shopHead } from '@/lib/shop-head';
export const Route = createFileRoute('/about')({
 head: () => shopHead('About DREAMS', 'Baking supplies and more: ingredients, decorations, packaging and tools.'),
 component: Page,
});
function Page() {
 return <AboutPage/>;
}
