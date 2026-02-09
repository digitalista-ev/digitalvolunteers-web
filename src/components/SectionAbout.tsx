import Image from "next/image";
import type { AboutBlock } from "../../content/home";

type Props = { blocks: AboutBlock[] };

export function SectionAbout({ blocks }: Props) {
  return (
    <section className="py-16 md:py-24">
      <div className="max-w-6xl mx-auto px-4 space-y-20">
        {blocks.map((block, i) => (
          <div
            key={i}
            className={`grid md:grid-cols-3 gap-8 items-center ${
              block.imageRight ? "md:grid-flow-dense" : ""
            }`}
          >
            <div
              className={
                block.imageRight
                  ? "md:col-start-2 md:col-span-2 md:order-2"
                  : "md:col-span-2"
              }
            >
              <h3 className="text-2xl font-semibold text-dv-dark mb-4">
                {block.title}
              </h3>
              <p className="text-gray-700 leading-relaxed">{block.body}</p>
            </div>
            <div
              className={
                block.imageRight ? "md:col-start-1 md:row-start-1" : ""
              }
            >
              <div className="relative aspect-[4/3] rounded-lg overflow-hidden bg-gray-100">
                <Image
                  src={block.image}
                  alt=""
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 33vw"
                />
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
