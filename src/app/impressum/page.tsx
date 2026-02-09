import type { Metadata } from "next";
import { getImpressumContent } from "@/lib/content";
import ReactMarkdown from "react-markdown";

export const metadata: Metadata = {
  title: "Impressum | Digital Volunteers",
  description: "Impressum – Digital Volunteers",
};

export default function ImpressumPage() {
  const content = getImpressumContent();
  return (
    <article className="max-w-3xl mx-auto px-4 py-16 prose prose-lg prose-gray">
      <ReactMarkdown>{content}</ReactMarkdown>
    </article>
  );
}
