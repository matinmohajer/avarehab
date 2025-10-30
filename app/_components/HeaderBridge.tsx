"use client";

import { useMemo } from "react";
import { usePathname, useRouter } from "next/navigation";
import { Header } from "../../src/components/Header";

export default function HeaderBridge() {
  const pathname = usePathname();
  const router = useRouter();

  const currentPage = useMemo(() => {
    if (!pathname || pathname === "/") return "home";
    const seg = pathname.split("/")[1];
    return seg || "home";
  }, [pathname]);

  const onNavigate = (page: string) => {
    const target = page === "home" ? "/" : `/${page}`;
    router.push(target);
  };

  return <Header currentPage={currentPage} onNavigate={onNavigate} />;
}
