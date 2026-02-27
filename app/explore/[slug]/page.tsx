import { posts, formatDate } from "@/lib/posts";
import { notFound } from "next/navigation";

export default async function PostPage({ params }: { params: Promise<{ slug: string}>}) {
    
    const { slug } = await params;
    const post = posts.find((p) => p.slug === slug);

    if (!post) return notFound();

    return (
        <main className="min-h-screen px-6 py-24">
            <article className="max-w-2xl mx-auto">
                <p className="mb-2 text-sm opacity-50 tracking-wide">
                    {formatDate(post.date)}
                </p>
                <h1 className="text-4xl font light tracking tight">
                    {post.title}
                </h1>
                <div className="mt-6 whitespace-pre-line text-lg leading-relaxed opacity-80">
                    {post.content}
                </div>
            </article>        
        </main>
    )
}