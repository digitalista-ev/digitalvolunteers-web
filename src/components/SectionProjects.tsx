import Link from "next/link";
import type { ProjectItem } from "../../content/home";

type Props = {
  intro: { title: string; description: string };
  projects: ProjectItem[];
};

export function SectionProjects({ intro, projects }: Props) {
  return (
    <section id="projects" className="py-16 md:py-24 bg-gray-50">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-center text-dv-dark mb-6">
          {intro.title}
        </h2>
        <p className="text-center text-gray-700 max-w-3xl mx-auto mb-12">
          {intro.description}
        </p>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((p, i) => (
            <div
              key={i}
              className="bg-dv-card rounded-lg p-6 border border-dv-card"
            >
              <h3 className="text-lg font-semibold text-dv-dark mb-2">
                {p.title}
              </h3>
              <p className="text-gray-700 text-sm mb-3">{p.description}</p>
              {p.stats && (
                <p className="text-sm font-medium text-dv-dark mb-3">
                  {p.stats}
                </p>
              )}
              {p.links.length > 0 && (
                <ul className="space-y-1">
                  {p.links.map((link, j) => (
                    <li key={j}>
                      <Link
                        href={link.href}
                        target={link.href.startsWith("http") ? "_blank" : undefined}
                        rel={link.href.startsWith("http") ? "noreferrer noopener" : undefined}
                        className="text-dv-hero hover:underline text-sm"
                      >
                        → {link.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
