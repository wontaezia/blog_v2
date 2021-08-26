import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import mdxPrism from 'mdx-prism';
import { serialize } from 'next-mdx-remote/serialize';

const root = process.cwd();

export async function getFiles() {
    return fs.readdirSync(path.join(root, 'src/assets/posts'));
}

export async function getAllFiles() {
    const files = getFiles();
    const frontmatters = [];

    (await files).map((file) => {
        const source = fs.readFileSync(
            path.join(root, 'src/assets/posts', file),
            'utf-8',
        );
        const { data } = matter(source);

        frontmatters.push(data);
    });

    return frontmatters;
}

export async function getFileBySlug(type, slug) {
    const source = slug
        ? fs.readFileSync(path.join(root, type, `${slug}.mdx`), 'utf-8')
        : fs.readFileSync(path.join(root, `${type}.mdx`), 'utf-8');

    const { content, data } = matter(source);
    const mdxSource = await serialize(content, {
        scope: data,
        mdxOptions: {
            remarkPlugins: [
                require('remark-autolink-headings'),
                require('remark-code-titles'),
                require('remark-slug'),
            ],
            rehypePlugins: [mdxPrism],
        },
    });

    return { props: { source: mdxSource, frontMatter: data } };
}
