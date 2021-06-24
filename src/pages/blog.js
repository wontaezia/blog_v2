import React, { useState, useEffect } from 'react';
import { getAllFiles } from '@utils/mdx';
import { PostPreview } from '@components/blog';

function Blog({ frontMatters }) {
    const [totalCount, setTotalCount] = useState(0);
    const [sortedData, setSortedData] = useState([]);

    const sortDataByDate = (data) => {
        const sorted =
            data?.sort((a, b) => {
                return (
                    new Date(b.publishedAt).getTime() -
                    new Date(a.publishedAt).getTime()
                );
            }) || [];

        setSortedData(sorted);
        setTotalCount(sorted.length);
    };

    useEffect(() => {
        sortDataByDate(frontMatters);
    }, []);

    return (
        <>
            {sortedData.length ? (
                <PostPreview totalCount={totalCount} data={sortedData} />
            ) : null}
            <div />
        </>
    );
}

export default Blog;

export async function getStaticProps() {
    const data = await getAllFiles();
    return { props: { frontMatters: data } };
}
