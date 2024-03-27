import Link from 'next/link';
import { getPosts } from '../utils/mdx-utils';

import Footer from '../components/Footer';
import Header from '../components/Header';
import Layout, { GradientBackground } from '../components/Layout';
import { getGlobalData } from '../utils/global-data';
import SEO from '../components/SEO';
import Image from 'next/image';

export default function Index({ posts, globalData }) {
  return (
    <Layout>
      <SEO title={globalData.name} description={globalData.blogTitle} />
      <main className="w-full">
      <div className="relative mb-10" style={{ backgroundImage: `url('/photos/7-23-23-round-valley/round-valley-cover.jpg')`, backgroundRepeat: 'no-repeat', backgroundSize: 'cover', backgroundPosition: 'center' }}>
      <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black opacity-75"></div>
        <div className='mx-auto flex flex-col justify-between min-h-[25em] relative z-10'>
          <Header name={globalData.name} />
          <header className='pb-32'>
            <div className='container'>
              <h1 className="text-3xl md:text-5xl dark:text-white text-white z-10 font-semibold">
              {globalData.blogTitle}
              </h1>
              <span className='text-[#ffffffd9] text-xl lg:text-2xl text-light pt-3'>Just Some Captures From My Life</span>
            </div>
          </header>
        </div>
      </div>
        <div className='container -mt-20'>
          <ul className="w-full grid gap-3 grid-cols-1 lg:grid-cols-3">
            {posts.map((post) => (
            <Link
                as={`/posts/${post.filePath.replace(/\.mdx?$/, '')}`}
                href={`/posts/[slug]`}
              >
              <li
                key={post.filePath}
                style={{ backgroundImage: `url(${post.data.thumb})`, backgroundRepeat: 'no-repeat', backgroundSize: 'cover', backgroundPosition: 'center' }}
                className="cursor-pointer relative rounded flex flex-col content-end text-white backdrop-blur-lg min-h-[400px] bg-white dark:bg-black dark:bg-opacity-30 bg-opacity-10 hover:bg-opacity-20 dark:hover:bg-opacity-50 transition  max-w-[500px]"
              >
                  <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black transition-all opacity-75 hover:opacity-0 h-full"></div>
                  <a className="py-3 px-2 lg:px-8 block focus:outline-none focus:ring-4 absolute bottom-2">
                    {post.data.date && (
                      <p className="uppercase font-bold opacity-70">
                        {post.data.date}
                      </p>
                    )}
                    <h2 className="text-2xl md:text-3xl">{post.data.title}</h2>
                    {post.data.description && (
                      <p className="mt-3 text-lg opacity-60">
                        {post.data.description}
                      </p>
                    )}
                  </a>
              </li>
            </Link>
            ))}
          </ul>
        </div>
      </main>
      <Footer copyrightText={globalData.footerText} />
    </Layout>
  );
}

export function getStaticProps() {
  const posts = getPosts();
  const globalData = getGlobalData();

  return { props: { posts, globalData } };
}
