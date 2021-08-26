import React, { useRef } from 'react';
import Link from 'next/link';
import * as S from '@components/blog/PostPreview/styling';
import Scene from '@components/blog/scene';

function PostPreview({ data, totalCount, tag }) {
  const imagesRef = useRef([]);

  return (
    <>
      <S.PostCount tag={tag}>{totalCount} Posts</S.PostCount>
      <S.PostList>
        {data.map(({ title, slug, img, publishedAt }, i) => (
          <S.Post key={title}>
            <Link href={`/blog/${slug}`}>
              <a>
                <S.Thumbnail>
                  <img
                    ref={(el) => (imagesRef.current[i] = el)}
                    src={img}
                    alt="post thumbnail"
                  />
                </S.Thumbnail>
                <S.Info>
                  <S.PublishedAt>{publishedAt.split('T')[0]}</S.PublishedAt>
                  <S.Title>{title}</S.Title>
                </S.Info>
              </a>
            </Link>
          </S.Post>
        ))}
      </S.PostList>
      <S.CanvasContainer>
        <Scene images={imagesRef.current} />
      </S.CanvasContainer>
    </>
  );
}

export default PostPreview;
