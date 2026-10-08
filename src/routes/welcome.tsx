import { createFileRoute } from '@tanstack/react-router';
import { WelcomePage } from '@/components/shop/catalog';
import { shopHead } from '@/lib/shop-head';
export const Route = createFileRoute('/welcome')({
 head: () => shopHead('Welcome to your baking world', 'Everything you need to bake better. Discover DREAMS baking essentials.'),
 component: Page,
});
function Page() {
 return <WelcomePage/>;
}
