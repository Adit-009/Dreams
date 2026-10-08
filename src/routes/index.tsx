import { createFileRoute } from '@tanstack/react-router';
import { HomePage } from '@/components/shop/catalog';
import { shopHead } from '@/lib/shop-head';
export const Route = createFileRoute('/')({
  head: () => ({
    meta: [
      { title: 'Dreams' },
      { property: 'og:title', content: 'Dreams' },
      { name: 'description', content: 'Shop chocolate, baking ingredients, decorations and packaging for your next beautiful bake.' },
      { property: 'og:description', content: 'Everything you need to bake better.' },
    ],
  }),
  component: Page,
});
function Page() {
 return <HomePage/>;
}
