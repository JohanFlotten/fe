import { getBlogPosts } from './lib/getData';

export default async function BlogPage() {
    const posts = await getBlogPosts();
    
    return (
        <div>
            {posts.map(post => (
                <article key={post._id}>
                    <h2>{post.title}</h2>
                    <img src={post.mainImage} alt={post.title} />
                    <p>By {post.authorName}</p>
                </article>
            ))}
        </div>
    );
}
