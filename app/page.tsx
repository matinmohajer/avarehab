"use client";

import { useRouter } from "next/navigation";
import { HomePage } from "../src/components/HomePage";

export default function Page() {
  const router = useRouter();
  return (
    <HomePage onNavigate={(page) => router.push(page === "home" ? "/" : `/${page}`)} />
  );
}
