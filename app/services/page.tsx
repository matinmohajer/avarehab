"use client";

import { useRouter } from "next/navigation";
import { ServicesPage } from "../../src/components/ServicesPage";

export default function Page() {
  const router = useRouter();
  return (
    <ServicesPage onNavigate={(page) => router.push(page === "home" ? "/" : `/${page}`)} />
  );
}
