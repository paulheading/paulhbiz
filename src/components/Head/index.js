import { Helmet } from 'react-helmet';

export default function Head({ title, keywords, description }) {
  return (
    <Helmet>
      <title>{ title }</title>
      <meta name="keywords" content={ keywords } />
      <meta name="description" content={ description } />
      <meta name="author" content="Paul Heading" />
    </Helmet>
  );
}