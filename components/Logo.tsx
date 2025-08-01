"use client";

import Image from "next/image";
import Link from "next/link";

const Logo = () => {
  return (
    <Link href="/" className="inline-block">
      <Image
        src="https://res.cloudinary.com/dpeg7wc34/image/upload/v1754017148/GREAT_LAKES_hotm5h.png"
        alt="Great Lakes Logo"
        width={500}
        height={300}
        className="h-[100px] md:h-[140px] w-auto object-contain"
        priority
      />
    </Link>
  );
};

export default Logo;
