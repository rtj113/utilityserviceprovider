import Link from 'next/link';

export default function PostList({ posts }) {
    return (
        <ul>
            <h2>Posts</h2>
            {/* {posts.map((post) => (
                <li key={post.id}>
                    <Link href={`/blog/${post.slug}`}>{post.title}</Link>
                </li>
            ))} */}
        </ul>
    )
}