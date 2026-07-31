import { constructMetadata } from '@/lib/seo';
import BookingClient from './BookingClient';

export const metadata = constructMetadata({
  title: 'Termin buchen | Le Rêve',
  description: 'Buchen Sie Ihren Termin für Massagen, Gesichtsbehandlungen und Specials bei Le Rêve.',
  path: '/booking'
});

export default function Page() {
  return <BookingClient />;
}
