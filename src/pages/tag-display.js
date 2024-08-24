import React from 'react';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';
import clsx from 'clsx';
import styles from './styles.module.css';

// Fetch all available tags from the blog directory
function getTags() {

  const blogPosts = require.context('../../blog', false, /\.mdx$/);
  const tags = new Set();

  blogPosts.keys().forEach((key) => {
    const { metadata } = blogPosts(key);
    if (metadata.tags) {
      metadata.tags.forEach((tag) => tags.add(tag));
    }
  });

  return Array.from(tags);
}

function TagsDisplay() {
  const tags = getTags();

  return (
    <Layout title="Blog Tags" description="List of blog tags">
      <header className={clsx('hero hero--primary', styles.heroBanner)}>
        <div className="container">
          <h1 className="hero__title">Blog Post Tags</h1>
          <p className="hero__subtitle">Posts by tag</p>
        </div>
      </header>
      <main>
        <section className={styles.features}>
          <div className="container">
            <div className="row">
              {tags.length > 0 ? (
                tags.map((tag, index) => (
                  <div className="col col--4" key={index}>
                    <div className="card shadow--tl">
                      <div className="card__header">
                        <h3>
                          <Link to={`/blog/tags/${tag}`}>{tag}</Link>
                        </h3>
                      </div>
                    </div>
                  </div>
                ))
              ) : (
                <p>No tags found.</p>
              )}
            </div>
          </div>
        </section>
      </main>
    </Layout>
  );
}

export default TagsDisplay;