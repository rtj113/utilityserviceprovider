import Link from 'next/link';

export default function PostList({ posts }) {
    return (
        <ul>
            <h2>Posts</h2>
            <h1>{ props.story ? props.story.name : 'My Site' }</h1>
            {/* {posts.map((post) => (
                <li key={post.id}>
                    <Link href={`/blog/${post.slug}`}>{post.title}</Link>
                </li>
            ))} */}
        </ul>
    )
}

export async function getStaticProps() {
    const res = await fetch('https://localhost.com/posts');
    const posts = await res.json();

    let slug = "home"
  let sbParams = {
    version: "draft",
  }

  const storyblokApi = getStoryblokApi();
  let {data} = await storyblokApi.get(`cdn/stories/${slug}`, sbParams);
    return {
        props: {
            posts,
            story: data ? data.story : false,
            key: data ? data.story.id : false,
        },
        revalidate: 3600,
    }
}