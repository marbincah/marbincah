import Link from "next/link"

export default function Navbar() {
    return (
        <nav className="flex justify-between items-center py-6 px-8 md:px-24">
            <Link href="/" className="font-serif text-lg">
                marbincah
            </Link>
            <div className="flex gap-8 text-sm">
                <Link href="/explore" className="hover:opacity-60 transition">Explore</Link>
                <Link href="/lab" className="hover:opacity-60 transition">Lab</Link>
                <Link href="/about" className="hover:opacity-60 transition">About</Link>
            </div>
        </nav>
    )
}