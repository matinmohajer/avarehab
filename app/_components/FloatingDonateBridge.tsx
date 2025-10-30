"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { DonateButton } from "../../src/components/DonateButton";

export default function FloatingDonateBridge() {
  const [showDonateButton, setShowDonateButton] = useState(false);
  const router = useRouter();

  useEffect(() => {
    const handleScroll = () => {
      if (window.innerWidth < 1024) {
        setShowDonateButton(window.scrollY > 300);
      }
    };

    const handleResize = () => {
      if (window.innerWidth >= 1024) {
        setShowDonateButton(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    window.addEventListener("resize", handleResize);
    handleScroll();
    handleResize();
    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  if (!showDonateButton) return null;

  return <DonateButton onClick={() => router.push("/contact")} />;
}
