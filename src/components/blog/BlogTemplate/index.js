import React, { useState, useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import * as S from '@components/blog/BlogTemplate/styling';
import * as M from '@components/blog/BlogTemplate/motion';

function BlogTemplate({ children }) {
    const [date, setDate] = useState('');
    const blogRef = useRef(null);
    const query = gsap.utils.selector(blogRef);
    const { scope } = children.props;

    useEffect(() => {
        const blogTimeline = M.getBlogTimeline(query);
        const options = { year: 'numeric', month: 'long', day: 'numeric' };
        const dateFormat = new Date(scope.publishedAt).toLocaleDateString(
            'en-US',
            options,
        );
        setDate(dateFormat);
        gsap.delayedCall(0.8, () => {
            blogTimeline.play();
        });
    }, []);

    return (
        <S.Container ref={blogRef}>
            <S.Title className="post--title">{scope.title}</S.Title>
            <S.Info className="post--info">
                {scope.author === 'Wontae Jeong' ? <S.Icon>W</S.Icon> : null}
                <span>{scope.author}</span>
                <span>/</span>
                <span>{date}</span>
            </S.Info>
            <S.Body {...M.body}>{children}</S.Body>
        </S.Container>
    );
}

export default BlogTemplate;
