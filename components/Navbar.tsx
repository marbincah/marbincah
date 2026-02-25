"use client";

import Link from "next/link"
import { usePathname } from "next/navigation";

export default function Navbar() {
    const pathname = usePathname();

    const linkStyle = (path: string) =>
        `hover:opacity-60 transition opacity ${
            pathname === path ? "opacity-100 underline underline-offset-4" : "opacity-60"
        }`;

    return (
        <nav className="w-full flex justify-between items-center py-6 px-6 md:px-24">
            <Link href="/" className="font-serif text-lg tracking-widest">
                marbincah
            </Link>
            <div className="flex gap-8 text-sm">
                <Link href="/explore" className={linkStyle("/explore")}>Explore</Link>
                <Link href="/lab" className={linkStyle("/lab")}>Lab</Link>
                <Link href="/about" className={linkStyle("/about")}>About</Link>
            </div>
        </nav>
    )
}