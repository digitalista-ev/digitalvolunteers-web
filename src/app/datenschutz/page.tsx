import type { Metadata } from "next";
import { getDatenschutzContent } from "@/lib/content";
import ReactMarkdown from "react-markdown";

export const metadata: Metadata = {
  title: "Datenschutzerklärung | Digital Volunteers",
  description: "Datenschutzerklärung – Digital Volunteers",
};

export default function DatenschutzPage() {
  const content = getDatenschutzContent();
  return (
    <article className="max-w-3xl mx-auto px-4 py-16 prose prose-lg prose-gray">
      <ReactMarkdown>{content}</ReactMarkdown>
    </article>
  );
}
