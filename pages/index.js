import Head from 'next/head';
import Layout, { siteTitle } from '../components/Layout';
import utilStyles from '../styles/utils.module.css';
import { getAllPostsData } from '../lib/posts';
import Link from 'next/link';
import Date from '../components/Date';

export default function Home({ allPostsData }) {
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <section className={utilStyles.headingMd}>
        <p>The best recipes ever committed to a Drupal database!</p>
        <p>
          (This is a sample website)
        </p>
      </section>
      <section className={`${utilStyles.headingMd} ${utilStyles.padding1px}`}>
        <h2 className={utilStyles.headingLg}>All recipes</h2>
        <ul className={utilStyles.list}>
          {allPostsData.map(({ attributes, id }) => (
            <li className={utilStyles.listItem} key={id}>
              <Link href={`/posts/${id}`}>{attributes.title}</Link>
              <br />
              <small className={utilStyles.lightText}>
                <Date dateString={attributes.revision_timestamp} />
              </small>
            </li>
          ))}
        </ul>
      </section>
    </Layout>
  );
}

export async function getStaticProps() {
  const allPostsData = await getAllPostsData();
  return {
    props: {
      allPostsData,
    },
  };
}
