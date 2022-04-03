import Head from "next/head";

const SEO = ({ title, description, url }) => (
  <Head>
    <title>{title}</title>
    <meta name="title" content={title} />
    <meta name="description" content={description} />
    <meta property="og:url" content={url} />
    <meta property="twitter:url" content={url} />
  </Head>
);

export default SEO;
