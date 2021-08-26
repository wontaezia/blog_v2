import React, { useState, useEffect, forwardRef } from 'react';
import { getAllFiles } from '@utils/mdx';
import { PostPreview } from '@components/blog';
import { Container } from '@styles/layout';

const Blog = forwardRef(({ frontMatters }, ref) => {
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
        <Container ref={ref}>
            {sortedData.length ? (
                <PostPreview totalCount={totalCount} data={sortedData} />
            ) : null}
            <div />
        </Container>
    );
});

export default Blog;

export async function getStaticProps() {
    const data = await getAllFiles();
    return { props: { frontMatters: data } };
}
