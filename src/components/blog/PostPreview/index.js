import React, { useEffect, useRef } from 'react';
import Link from 'next/link';
import { gsap } from 'gsap';
import ScrollTrigger from 'gsap/dist/ScrollTrigger';
import * as S from '@components/blog/PostPreview/styling';
import * as M from '@components/blog/PostPreview/motion';

function PostPreview({ data, totalCount, tag }) {
    const listRef = useRef(null);
    const titleRef = useRef(null);
    const listQuery = gsap.utils.selector(listRef);
    const titleQuery = gsap.utils.selector(titleRef);

    useEffect(() => {
        gsap.registerPlugin(ScrollTrigger);
        const titleTimeline = M.getTitleMotion(titleQuery, listQuery);
        gsap.delayedCall(1, () => {
            titleTimeline.play();
        });

        return () => {
            ScrollTrigger.getAll().forEach((t) => t.kill());
        };
    }, [data]);

    return (
        <>
            <S.MainTitle ref={titleRef}>
                <Link href="/blog/">
                    <a>
                        <span>B</span>
                        <span>l</span>
                        <span>o</span>
                        <span>g</span>
                    </a>
                </Link>
                <S.Line />
            </S.MainTitle>
            <S.PostCount tag={tag}>{totalCount} Posts</S.PostCount>
            <S.PostList ref={listRef}>
                {data.map(({ title, slug, img, tags, publishedAt }, i) => {
                    return (
                        <S.Post key={title} className={'post' + i}>
                            <Link href={`/blog/${slug}`}>
                                <a>
                                    <div className="hover" />
                                    <S.Thumbnail>
                                        <img src={img} alt="post thumbnail" />
                                    </S.Thumbnail>
                                    <S.Text>
                                        <S.Title>{title}</S.Title>
                                        <S.CreateAt>
                                            {publishedAt.split('T')[0]}
                                        </S.CreateAt>
                                    </S.Text>
                                </a>
                            </Link>
                            <S.Tags>
                                {tags?.map((tag) => (
                                    <li key={tag}>
                                        <Link href={`/blog/tag/${tag}`}>
                                            <a>{tag}</a>
                                        </Link>
                                    </li>
                                ))}
                            </S.Tags>
                        </S.Post>
                    );
                })}
            </S.PostList>
        </>
    );
}

export default PostPreview;
