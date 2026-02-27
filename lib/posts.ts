export function formatDate(dateString: string) {
    const date = new Date(dateString);

    return new Intl.DateTimeFormat("en-US", {
        year: "numeric",
        month: "long",
        day: "numeric",
    }).format(date);
}

export const posts = [
    {
        slug: "start-again",
        title: "Let Me Start Again",
        description: "Building a space to capture ideas, thoughts, and refrections.",
        date: "2026-02-27",
        content: `It's been a while since my last time working as a website developer, and I want to take this moment to start again. Actually, not only in website development but also in other areas of personal and professional growth as well. 

        Sometimes, a lot of ideas come up and I feel like I need a space to pour all my ideas, thoughts, feelings, and reflections. So, I decided to create this website to document everything that has been in my mind or what I'm exploring or what I've experienced.

        So, here it is. The first note to myself.
        `
    },
]