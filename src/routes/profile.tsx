import { createFileRoute } from '@tanstack/react-router';
import { ProfilePage } from '@/components/shop/account';
import { shopHead } from '@/lib/shop-head';
export const Route = createFileRoute('/profile')({
 head: () => shopHead('Your Baking World', 'Your DREAMS profile, favorite products, addresses and orders.'),
 component: Page,
});
function Page() {
 return <ProfilePage/>;
}
