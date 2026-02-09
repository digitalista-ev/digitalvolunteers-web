import Image from "next/image";
import Link from "next/link";

type Partner = { name: string; url: string; image: string };
type Props = {
  intro: { title: string; description: string };
  partners: Partner[];
};

export function SectionPartners({ intro, partners }: Props) {
  return (
    <section
      id="partners"
      className="py-16 md:py-24 bg-dv-hero/95 text-white relative overflow-hidden"
    >
      <div
        className="absolute inset-0 bg-cover bg-center opacity-20"
        style={{ backgroundImage: "url(/images/2022/05/header.jpg)" }}
      />
      <div className="relative z-10 max-w-6xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-6">{intro.title}</h2>
        <p className="text-center text-white/90 max-w-3xl mx-auto mb-12">
          {intro.description}
        </p>
        <div className="flex flex-wrap justify-center items-center gap-8 md:gap-12">
          {partners.map((p, i) => (
            <Link
              key={i}
              href={p.url}
              target="_blank"
              rel="noreferrer noopener"
              className="flex items-center justify-center w-28 h-28 md:w-36 md:h-36 rounded-lg bg-white/10 hover:bg-white/20 transition p-3"
              title={p.name}
            >
              <Image
                src={p.image}
                alt={p.name}
                width={120}
                height={120}
                className="object-contain max-w-full max-h-full"
              />
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
