import { getFiles, getFileBySlug } from '@utils/mdx';
import { MDXRemote } from 'next-mdx-remote';
import { BlogTemplate } from '@components/blog';

export default function Blog({ source }) {
    return (
        <BlogTemplate>
            <MDXRemote {...source} />
        </BlogTemplate>
    );
}

export async function getStaticPaths() {
    const posts = await getFiles('');

    return {
        paths: posts.map((post) => ({
            params: {
                slug: post.replace(/\.mdx/, ''),
            },
        })),
        fallback: false,
    };
}

export async function getStaticProps({ params }) {
    const { props } = await getFileBySlug('src/posts', params.slug);
    return { props };
}
