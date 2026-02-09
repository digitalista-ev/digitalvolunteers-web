"use client";

import { useState } from "react";

type SocialLink = { service: string; url: string };
type Props = {
  title: string;
  description: string;
  disclaimer: string;
  socialLinks: SocialLink[];
};

const socialIcons: Record<string, string> = {
  youtube: "https://www.youtube.com/favicon.ico",
  facebook: "https://www.facebook.com/favicon.ico",
  telegram: "https://telegram.org/favicon.ico",
};

export function ContactForm({
  title,
  description,
  disclaimer,
  socialLinks,
}: Props) {
  const [status, setStatus] = useState<"idle" | "sending" | "done" | "error">(
    "idle"
  );
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("sending");
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });
      if (res.ok) {
        setStatus("done");
        setFormData({ name: "", email: "", message: "" });
      } else setStatus("error");
    } catch {
      setStatus("error");
    }
  }

  return (
    <section id="contact" className="py-16 md:py-24">
      <div className="max-w-6xl mx-auto px-4">
        <div className="grid md:grid-cols-[35%_1fr] gap-10 items-start">
          <div>
            <h2 className="text-3xl font-bold text-dv-dark mb-4">{title}</h2>
            <p className="text-gray-700 mb-4">{description}</p>
            <p className="text-gray-600 text-sm mb-6">{disclaimer}</p>
            <div className="flex gap-4">
              {socialLinks.map((s) => (
                <a
                  key={s.service}
                  href={s.url}
                  target="_blank"
                  rel="noreferrer noopener"
                  className="text-dv-hero hover:opacity-80"
                  title={s.service}
                >
                  <span className="sr-only">{s.service}</span>
                  <img
                    src={socialIcons[s.service] || ""}
                    alt=""
                    className="w-8 h-8"
                  />
                </a>
              ))}
            </div>
          </div>
          <form
            onSubmit={handleSubmit}
            className="bg-dv-card rounded-lg p-6 space-y-4 max-w-md"
          >
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-dv-dark mb-1">
                Name
              </label>
              <input
                id="name"
                name="name"
                type="text"
                placeholder="Full Name"
                value={formData.name}
                onChange={(e) =>
                  setFormData((p) => ({ ...p, name: e.target.value }))
                }
                className="w-full px-4 py-2 border border-gray-300 rounded focus:ring-2 focus:ring-dv-hero focus:border-dv-hero"
              />
            </div>
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-dv-dark mb-1">
                Email *
              </label>
              <input
                id="email"
                name="email"
                type="email"
                required
                placeholder="Email"
                value={formData.email}
                onChange={(e) =>
                  setFormData((p) => ({ ...p, email: e.target.value }))
                }
                className="w-full px-4 py-2 border border-gray-300 rounded focus:ring-2 focus:ring-dv-hero focus:border-dv-hero"
              />
            </div>
            <div>
              <label htmlFor="message" className="block text-sm font-medium text-dv-dark mb-1">
                Message *
              </label>
              <textarea
                id="message"
                name="message"
                required
                rows={4}
                placeholder="Message"
                value={formData.message}
                onChange={(e) =>
                  setFormData((p) => ({ ...p, message: e.target.value }))
                }
                className="w-full px-4 py-2 border border-gray-300 rounded focus:ring-2 focus:ring-dv-hero focus:border-dv-hero"
              />
            </div>
            <button
              type="submit"
              disabled={status === "sending"}
              className="w-full py-3 bg-dv-hero text-white font-medium rounded-lg hover:bg-dv-hero/90 disabled:opacity-50 transition"
            >
              {status === "sending"
                ? "Sending…"
                : status === "done"
                  ? "Message sent"
                  : status === "error"
                    ? "Error – try again"
                    : "Send Message"}
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
