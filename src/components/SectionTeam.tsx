import Image from "next/image";

type Member = { name: string; city: string; image: string };
type Props = {
  intro: { title: string; description: string; stats: string };
  members: Member[];
};

export function SectionTeam({ intro, members }: Props) {
  return (
    <section id="team" className="py-16 md:py-24">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-center text-dv-dark mb-6">
          {intro.title}
        </h2>
        <p className="text-center text-gray-700 max-w-3xl mx-auto mb-4">
          {intro.description}
        </p>
        <p className="text-center text-gray-600 text-sm mb-12">
          {intro.stats}
        </p>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6">
          {members.map((m, i) => (
            <div key={i} className="text-center">
              <div className="relative aspect-[3/4] rounded-lg overflow-hidden bg-gray-100 mb-2">
                <Image
                  src={m.image}
                  alt={m.name}
                  fill
                  className="object-cover"
                  sizes="(max-width: 640px) 50vw, (max-width: 768px) 33vw, (max-width: 1024px) 25vw, 16vw"
                />
              </div>
              <p className="font-semibold text-dv-dark">{m.name}</p>
              <p className="text-sm text-gray-600">{m.city}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
