"use client";
import Image from "next/image";
import { useRouter } from "next/navigation";
const Logo = () => {
  const logo = useRouter();
  return <Image alt="logo" height="100" width="100" src="/logo.png" />;
};

export default Logo;
