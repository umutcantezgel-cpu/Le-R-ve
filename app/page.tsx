import { constructMetadata } from '@/lib/seo';
import HomeClient from './HomeClient';

export const metadata = constructMetadata({
  title: 'Le Rêve | Ihr exklusiver Rückzugsort in Berlin',
  description: 'Entfliehen Sie dem Alltag im Le Rêve, Ihrem Wellness-Studio in Berlin für Massagen, Head Spa & mehr.',
  path: '/'
});

export default function Page() {
  return <HomeClient />;
}
