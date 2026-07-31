import Link from 'next/link';
import { constructMetadata } from '@/lib/seo';

export const metadata = constructMetadata({
  title: 'Journal | Le Rêve',
  description: 'Inspirationen, Tipps und Artikel für mehr Achtsamkeit und Wohlbefinden.',
  path: '/blog'
});

export default function Blog() {
  const posts = [
    {
      title: "Entspannung im Alltag finden",
      excerpt: "Kleine Rituale, die Ihnen helfen, auch an stressigen Tagen Ruhe zu bewahren.",
      date: "12. Mai 2024",
      href: "/blog/entspannung-im-alltag"
    },
    {
      title: "Die Vorteile der Schwangerschaftsmassage",
      excerpt: "Wie sanfte Berührungen während der Schwangerschaft Wunder wirken können.",
      date: "28. April 2024",
      href: "/blog/vorteile-schwangerschaftsmassage"
    }
  ];

  return (
    <div className="max-w-5xl mx-auto px-6 py-16 space-y-16">
      <div className="text-center space-y-6">
        <h1 className="font-serif text-5xl md:text-6xl text-primary">Journal</h1>
        <p className="text-text-light text-xl font-light">Inspirationen für mehr Achtsamkeit und Wohlbefinden.</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {posts.map((post, idx) => (
          <Link key={idx} href={post.href} className="glass-panel p-8 rounded-[2rem] hover:-translate-y-2 transition-transform duration-300 block">
            <span className="text-sm text-text-light mb-2 block">{post.date}</span>
            <h2 className="font-serif text-2xl text-secondary mb-4">{post.title}</h2>
            <p className="text-text-main font-light">{post.excerpt}</p>
            <span className="text-primary text-sm uppercase tracking-widest font-semibold mt-6 block">Artikel lesen: {post.title} →</span>
          </Link>
        ))}
      </div>
    </div>
  );
}
