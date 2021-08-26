import React, { useState, useEffect } from 'react';
import { getAllFiles } from '@utils/mdx';
import { PostPreview } from '@components/blog';

const Blog = ({ frontMatters, params }) => {
  const [totalCount, setTotalCount] = useState(0);
  const [sortedData, setSortedData] = useState([]);

  const filterDataByTag = (data) => {
    const filtered = data.filter((post) => post.tags.includes(params.tag));
    sortDataByDate(filtered);
  };

  const sortDataByDate = (data) => {
    const sorted =
      data?.sort((a, b) => {
        return (
          new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime()
        );
      }) || [];

    setSortedData(sorted);
    setTotalCount(sorted.length);
  };

  useEffect(() => {
    filterDataByTag(frontMatters);
  }, [frontMatters]);

  return (
    <div>
      {sortedData.length ? (
        <PostPreview
          totalCount={totalCount}
          data={sortedData}
          tag={params.tag}
        />
      ) : null}
      <div />
    </div>
  );
};

export default Blog;

export async function getStaticPaths() {
  return {
    paths: [
      { params: { tag: 'journal' } },
      { params: { tag: 'project' } },
      { params: { tag: 'sass' } },
      { params: { tag: 'javascript' } },
      { params: { tag: 'webpack' } },
      { params: { tag: 'web' } },
      { params: { tag: 'reactjs' } },
      { params: { tag: 'styled-components' } },
      { params: { tag: 'redux' } },
      { params: { tag: 'html' } },
      { params: { tag: 'css' } },
    ],
    fallback: false,
  };
}

export async function getStaticProps({ params }) {
  const data = await getAllFiles();
  return { props: { frontMatters: data, params } };
}
