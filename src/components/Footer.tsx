import Link from "next/link";
import { footerNav } from "../../content/menus";

export function Footer() {
  return (
    <footer className="bg-dv-dark text-white py-10 mt-20">
      <div className="max-w-6xl mx-auto px-4 flex flex-col sm:flex-row items-center justify-between gap-4">
        <p className="text-sm text-gray-300">
          Digital Volunteers © {new Date().getFullYear()}
        </p>
        <nav className="flex items-center gap-6">
          {footerNav.map(({ label, href }) => (
            <Link
              key={href}
              href={href}
              className="text-sm text-gray-300 hover:text-white transition"
            >
              {label}
            </Link>
          ))}
        </nav>
      </div>
    </footer>
  );
}
