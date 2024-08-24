import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import HomepageFeatures from '@site/src/components/HomepageFeatures';

import styles from './index.module.css';


function HomepageHeader() {
  const { siteConfig } = useDocusaurusContext();
  return (
    <header className='header'>
      <div className="mixmax">
        <div className="main-text-container">
          <p className="hero__title">Welcome to</p>
          <h2 className="hero__title name reveal-text">Ibrahim 's</h2>
          <p className="hero__title">blog</p>
          <p className="tagline">{siteConfig.tagline}</p>
          <div className={styles.buttons}>
            <Link className="button button--secondary button--lg" to="/blog">
              Explore Blog Posts 📚
            </Link>
          </div>
        </div>
      </div>
      <div className="main-image-container">
        <img src="img/favicon.ico" alt="Ibrahim Abdel-Khaleq" />
      </div>
    </header>
  );
}

export default function Home() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <Layout
      title={`Hello from ${siteConfig.title}`}
      description="Description will go into a meta tag in <head />">
      <HomepageHeader />
      <main>
        <HomepageFeatures />
      </main>
    </Layout>
  );
}
