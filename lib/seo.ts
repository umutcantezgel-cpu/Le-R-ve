import { Metadata } from 'next';

export function constructMetadata({
  title = "Le Rêve - Ein Wahrer Traum",
  description = "Ihr Rückzugsort für Entspannung und mütterliches Wohlbefinden in Berlin.",
  path = "",
  noIndex = false,
}: {
  title?: string;
  description?: string;
  path?: string;
  noIndex?: boolean;
} = {}): Metadata {
  const baseUrl = 'https://www.lereve.de';
  const url = `${baseUrl}${path}`;

  return {
    title,
    description,
    openGraph: {
      title,
      description,
      url,
      siteName: "Le Rêve",
      locale: "de_DE",
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
    },
    alternates: {
      canonical: url,
    },
    ...(noIndex && {
      robots: {
        index: false,
        follow: false,
      },
    }),
  };
}
