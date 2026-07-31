import Link from 'next/link';

export default function BlogPost2() {
  return (
    <div className="max-w-3xl mx-auto px-6 py-16 space-y-12">
      <Link href="/blog" className="text-secondary hover:text-primary transition-colors text-sm uppercase tracking-widest font-semibold">
        ← Zurück zum Journal
      </Link>
      
      <div className="space-y-6">
        <span className="text-text-light">28. April 2024</span>
        <h1 className="font-serif text-4xl md:text-5xl text-primary">Die Vorteile der Schwangerschaftsmassage</h1>
      </div>

      <div className="space-y-6 text-text-main text-lg font-light leading-relaxed">
        <p>Eine Schwangerschaft ist eine der faszinierendsten Zeiten im Leben einer Frau, bringt jedoch auch körperliche Herausforderungen mit sich.</p>
        <p>Durch sanfte Streichungen werden Muskeln gelockert, die Durchblutung gefördert und Wassereinlagerungen reduziert. Das Wichtigste ist jedoch die tiefe seelische Entspannung, die nicht nur der Mutter, sondern auch dem ungeborenen Kind zugutekommt.</p>
      </div>
    </div>
  );
}
