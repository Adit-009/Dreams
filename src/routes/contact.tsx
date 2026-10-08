import { createFileRoute } from '@tanstack/react-router';
import { ContactPage } from '@/components/shop/account';
import { shopHead } from '@/lib/shop-head';
export const Route = createFileRoute('/contact')({
 head: () => shopHead('Contact DREAMS', 'Find DREAMS on Instagram and get in touch about baking supplies.'),
 component: Page,
});
function Page() {
 return <ContactPage/>;
}
