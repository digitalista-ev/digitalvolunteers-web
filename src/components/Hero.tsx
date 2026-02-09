import Image from "next/image";

type HeroProps = {
  title: string;
  subtitle: string;
  backgroundImage: string;
};

export function Hero({ title, subtitle, backgroundImage }: HeroProps) {
  return (
    <section
      id="about"
      className="relative min-h-[35em] flex items-center justify-center text-center overflow-hidden"
    >
      <div className="absolute inset-0 bg-dv-hero/90 z-10" />
      <Image
        src={backgroundImage}
        alt=""
        fill
        className="object-cover object-center"
        priority
        sizes="100vw"
      />
      <div className="relative z-20 max-w-4xl mx-auto px-4 py-20">
        <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
          {title}
        </h1>
        <p className="text-xl md:text-2xl text-white/95 font-light leading-snug max-w-3xl mx-auto">
          {subtitle}
        </p>
      </div>
    </section>
  );
}
