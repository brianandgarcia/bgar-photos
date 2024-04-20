import { getGlobalData } from '../../utils/global-data';
import {
  getNextPostBySlug,
  getPostBySlug,
  getPreviousPostBySlug,
  postFilePaths,
} from '../../utils/mdx-utils';


import { MDXRemote } from 'next-mdx-remote';
import Head from 'next/head';
import Link from 'next/link';
import ArrowIcon from '../../components/ArrowIcon';
import CustomLink from '../../components/CustomLink';
import Footer from '../../components/Footer';
import Header from '../../components/Header';
import Layout, { GradientBackground } from '../../components/Layout';
import SEO from '../../components/SEO';
import Image from "next/image";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import Gallery from '../../components/Gallery';


const components = {
  a: CustomLink,
  Head, Image, Image, Link, Carousel
};
const responsive = {
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 1,
    partialVisibilityGutter: 20
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 1,
    partialVisibilityGutter: 30
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
    partialVisibilityGutter: 30
  }
};
const coverURL = {
  
};
export default function PostPage({
  source,
  frontMatter,
  prevPost,
  nextPost,
  globalData,
}) {

  const images = Object.keys(frontMatter)
  .filter(key => key.startsWith('image'))
  .map(imageKey => frontMatter[imageKey])
  .filter(Boolean);
  
  return (
    <Layout>
      <SEO
        title={`${frontMatter.title} - ${globalData.name}`}
        description={frontMatter.description}
      />
      <div className="relative mb-10" style={{ backgroundImage: `url(${frontMatter.cover})`, backgroundRepeat: 'no-repeat', backgroundSize: 'cover', backgroundPosition: 'center' }}>
      <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black opacity-75"></div>
        <div className='mx-auto flex flex-col justify-between min-h-[15em] relative z-10'>
          <Header name={globalData.name} />
          <header className='pb-5'>
            <div className='container'>
              <h1 className="text-3xl md:text-5xl dark:text-white text-white z-10 font-semibold">
                {frontMatter.title}
              </h1>
              <span className='text-[#ffffffd9] text-2xl text-light pt-3'>{frontMatter.date}</span>
            </div>
          </header>
        </div>
      </div>
      <article className="px-2 md:px-0">
        <main>
          <article className="max-w-[1200px] mx-auto">
          {frontMatter.displayType === 'carousel' ? (
            <Carousel 
            responsive={responsive}
            showDots={true}
            infinite={true}
            draggable={true}
            autoPlay={true}
            autoPlaySpeed={5000}
            >
            {images.map((imageSrc, index) => (
              <div key={index}>
                  <Image src={imageSrc} alt="Carousel Image" width="2100" height="1400" priority unoptimized />
              </div>
            ))}
          
            </Carousel>
            ) : (
              <Gallery images={images} />
            )}
            <div className='text-2xl p-5'>
              <MDXRemote {...source} components={components} />
            </div>

          </article>
        </main>
        <div className="grid md:grid-cols-2 lg:-mx-24 mt-12">
          {prevPost && (
            <Link href={`/posts/${prevPost.slug}`}>
              <a className="py-8 px-10 text-center md:text-right first:rounded-t-lg md:first:rounded-tr-none md:first:rounded-l-lg last:rounded-r-lg first last:rounded-b-lg backdrop-blur-lg hover:bg-opacity-20 dark:hover:bg-opacity-50 transition border border-gray-800 dark:border-white border-opacity-10 dark:border-opacity-10 last:border-t md:border-r-0 md:last:border-r md:last:rounded-r-none flex flex-col">
                <p className="uppercase mb-4 dark:text-white dark:opacity-60">
                  Previous
                </p>
                <h4 className="text-2xl mb-6 dark:text-white">
                  {prevPost.title}
                </h4>
                <ArrowIcon className="transform rotate-180 mx-auto md:mr-0 mt-auto" />
              </a>
            </Link>
          )}
          {nextPost && (
            <Link href={`/posts/${nextPost.slug}`}>
              <a className="py-8 px-10 text-center md:text-left md:first:rounded-t-lg last:rounded-b-lg first:rounded-l-lg md:last:rounded-bl-none md:last:rounded-r-lg backdrop-blur-lg bg-white dark:bg-black dark:bg-opacity-30 bg-opacity-10 hover:bg-opacity-20 dark:hover:bg-opacity-50 transition border border-gray-800 dark:border-white border-opacity-10 dark:border-opacity-10 border-t-0 first:border-t first:rounded-t-lg md:border-t border-b-0 last:border-b flex flex-col">
                <p className="uppercase  mb-4 dark:text-white dark:opacity-60">
                  Next
                </p>
                <h4 className="text-2xl  mb-6 dark:text-white">
                  {nextPost.title}
                </h4>
                <ArrowIcon className="mt-auto mx-auto md:ml-0" />
              </a>
            </Link>
          )}
        </div>
      </article>
      <Footer copyrightText={globalData.footerText} />
    </Layout>
  );
}

export const getStaticProps = async ({ params }) => {
  const globalData = getGlobalData();
  const { mdxSource, data } = await getPostBySlug(params.slug);
  const prevPost = getPreviousPostBySlug(params.slug);
  const nextPost = getNextPostBySlug(params.slug);

  return {
    props: {
      globalData,
      source: mdxSource,
      frontMatter: data,
      prevPost,
      nextPost,
    },
  };
};

export const getStaticPaths = async () => {
  const paths = postFilePaths
    // Remove file extensions for page paths
    .map((path) => path.replace(/\.mdx?$/, ''))
    // Map the path into the static paths object required by Next.js
    .map((slug) => ({ params: { slug } }));

  return {
    paths,
    fallback: false,
  };
};
