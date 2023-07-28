"use client";

import Image from "next/image";
import { useRouter } from "next/navigation";

const Logo = () => {
  const router = useRouter();
  return (
    // <Image
    //   alt="Logo"
    //   className="hidden md:block cursor-pointer"
    //   height="100"
    //   width="100"
    //   src="/images/logo.png"
    // />
    <h1 className="hidden cursor-pointer h-[31.25px] w-[100px] md:flex justify-center items-center">
      <span className="font-bold text-rose-500">캠핑 통합 예약</span>
    </h1>
  );
};

export default Logo;
