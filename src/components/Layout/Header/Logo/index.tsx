"use client";

import { getImagePrefix } from "@/utils/util";
import Image from "next/image";
import Link from "next/link";

const Logo: React.FC = () => {
  return (
    <>
      <Link href="/">
        <Image
          src={`${getImagePrefix()}images/logo/Logo.png`}
          alt="logo"
          width={160}
          height={50}
          style={{ width: "160px", height: "50px", objectFit: "contain" }}
          quality={100}
        />
      </Link>
    </>
  );
};

export default Logo;
