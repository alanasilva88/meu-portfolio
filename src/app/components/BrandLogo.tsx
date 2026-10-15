import Image from "next/image";
import Link from "next/link";
import styles from "./BrandLogo.module.css";

export default function BrandLogo({ compact = false }: { compact?: boolean }) {
  return (
    <Link
      href="#inicio"
      aria-label="Alana Silva — voltar ao início"
      className="inline-block shrink-0 rounded-md focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-yellow-400"
    >
      <Image
        src="/logo-alana-silva.png"
        alt="Alana Silva — Full Stack Developer"
        width={2172}
        height={724}
        priority={!compact}
        sizes={compact ? "192px" : "(min-width: 640px) 288px, 240px"}
        className={`${styles.logo} ${compact ? "w-48" : "w-60 sm:w-72"} h-auto max-w-full transition-transform duration-300 hover:scale-105 motion-reduce:transition-none motion-reduce:hover:scale-100 drop-shadow-[0_0_12px_rgba(59,130,246,0.3)]`}
      />
    </Link>
  );
}
