import Link from "next/link"
import { posts, formatDate } from "@/lib/posts"

export default function ExplorePage() {
    return (
        <main className="min-h-screen px-6 py-24">
            <section className="max-w-2xl mx-auto">
                <h1 className="text-4xl font-light tracking-tight">
                    Explore
                </h1>
                <p className="mt-6 text-lg opacity-80 leading-relaxed">
                    Processed thoughts. Reflections across systems, stories, and self.
                </p>

                <div className="mt-10 border-t border-neutral-300 dark:border-neutral-700 pt-8">
                    {posts.map((post) => (
                        <article key={post.slug}>
                            <p className="text-sm opacity-50 tracking-wide">
                                {formatDate(post.date)}
                            </p>
                            <Link href={`/explore/${post.slug}`}>
                                <h2 className="text-2xl hover:opacity-70 transition-opacity">
                                    {post.title}
                                </h2>
                            </Link>
                            <p className="mt-2 opacity-70">
                                {post.description}
                            </p>
                        </article>
                    ))}
                </div>
            </section>
        </main>
    )
}