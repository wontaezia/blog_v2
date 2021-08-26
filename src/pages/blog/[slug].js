import { forwardRef } from 'react';
import { getFiles, getFileBySlug } from '@utils/mdx';
import { MDXRemote } from 'next-mdx-remote';
import { BlogTemplate } from '@components/blog';

const Blog = forwardRef(({ source }, ref) => {
  return (
    <BlogTemplate ref={ref}>
      <MDXRemote {...source} />
    </BlogTemplate>
  );
});

export default Blog;

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
  const { props } = await getFileBySlug('src/assets/posts', params.slug);
  return { props };
}
