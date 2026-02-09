import { readFileSync } from "fs";
import { join } from "path";
import matter from "gray-matter";
import { homeContent } from "../../content/home";

const contentDir = join(process.cwd(), "content");

export function getHomeContent() {
  return homeContent;
}

export function getImpressumContent(): string {
  const path = join(contentDir, "impressum.md");
  const raw = readFileSync(path, "utf-8");
  const { content } = matter(raw);
  return content;
}

export function getDatenschutzContent(): string {
  const path = join(contentDir, "datenschutz.md");
  const raw = readFileSync(path, "utf-8");
  const { content } = matter(raw);
  return content;
}
