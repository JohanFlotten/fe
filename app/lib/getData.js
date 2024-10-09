import { client } from "./sanity";

export async function getBlogPosts() {
    const query = `*[_type == "post"]{
        _id,
        title,
        slug,
        "authorName": author->name,
        "authorImage": author->image.asset->url,
        body,
        "categories": categories[]->title,
        "mainImage": mainImage.asset->url,
        publishedAt
    }`;

    try {
        const posts = await client.fetch(query, {
            cache: 'no-store'
        });
        return posts;
    } catch (error) {
        console.error("Error fetching blog posts:", error);
    }
}

export async function getPostBySlug(slug) {
    const query = `*[_type == "post" && slug.current == $slug][0]{
        _id,
        title,
        slug,
        "authorName": author->name,
        "authorImage": author->image.asset->url,
        body,
        "categories": categories[]->title,
        "mainImage": mainImage.asset->url,
        publishedAt
    }`;

    const params = { slug };

    try {
        const post = await client.fetch(query, params);
        return post;
    } catch (error) {
        console.error("Error fetching post:", error);
    }
}

export async function getAuthors() {
    const query = `*[_type == "author"]{
        _id,
        name,
        "image": image.asset->url,
        bio
    }`;

    try {
        const authors = await client.fetch(query, {
            cache: 'no-store'
        });
        return authors;
    } catch (error) {
        console.error("Error fetching authors:", error);
    }
}

export async function getCategories() {
    const query = `*[_type == "category"]{
        _id,
        title,
        description
    }`;

    try {
        const categories = await client.fetch(query, {
            cache: 'no-store'
        });
        return categories;
    } catch (error) {
        console.error("Error fetching categories:", error);
    }
}
