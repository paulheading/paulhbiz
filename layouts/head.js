import Head from 'next/head';

export default function CustomHead({ title, keywords, desc }) {
  return (
    <Head>
      <title>{ title }</title>
      <meta name="keywords" content={ keywords } />
      <meta name="description" content={ desc } />
      <meta name="author" content="Paul Heading" />
    </Head>
  );
}