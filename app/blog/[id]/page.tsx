"use client";

import { useParams, useRouter } from "next/navigation";
import { BlogPostPage } from "../../../src/components/BlogPostPage";

export default function BlogPostRoutePage() {
  const params = useParams<{ id: string }>();
  const router = useRouter();
  const idNum = Number(params?.id);

  return (
    <BlogPostPage
      postId={Number.isFinite(idNum) ? idNum : -1}
      onNavigate={(to) => router.push(to === "blog" ? "/blog" : `/${to}`)}
    />
  );
}
