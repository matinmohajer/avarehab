import { blogPosts } from "../../../data/blogPosts";

export default function generateStaticParams() {
  return blogPosts.map((p) => ({ id: String(p.id) }));
}
