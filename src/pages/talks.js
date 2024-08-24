import clsx from 'clsx';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';
import styles from './styles.module.css';

const talks = [];

const thumbnailResolutions = [
  'default.jpg',
  'hqdefault.jpg',
  'mqdefault.jpg',
  'sddefault.jpg',
  'maxresdefault.jpg',
];

const structuredData = {
  '@context': 'https://schema.org',
  '@type': 'ItemList',
  itemListElement: talks.map((talk, index) => ({
    '@type': 'VideoObject',
    position: index + 1,
    name: talk.title,
    url: talk.permalink,
    description: talk.title,

    thumbnailUrl: thumbnailResolutions.map(
      (resolution) => `https://img.youtube.com/vi/${talk.id}/${resolution}`,
    ),

    uploadDate: talk.date,
    contentUrl: talk.permalink,
    embedUrl: `https://www.youtube-nocookie.com/embed/${talk.id}`,
  })),
};

function Talks() {
  return (
    <Layout title="Talks">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(structuredData),
        }}
      />
      <header className={clsx('hero hero--primary', styles.heroBanner)}>
        <div className="container">
          <h1 className="hero__title">Talks</h1>
          <p className="hero__subtitle">
            Work in progress...
          </p>
        </div>
      </header>
      <main>
        <section className={styles.features}>
          <div className="container">
            <div className="row">
              {talks.map((talk) => (
                <div className="card-demo margin--md" key={talk.id}>
                  <div className="card shadow--tl">
                    <div className="card__header">
                      <h3 style={{ maxWidth: '560px' }}>
                        <Link to={talk.permalink}>{talk.title}</Link>
                      </h3>
                      <h4>{talk.formattedDate}</h4>
                    </div>
                    <div className="card__image padding--md">
                      <iframe
                        src={`https://www.youtube-nocookie.com/embed/${talk.id}`}
                        title={talk.title}
                        frameBorder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                        allowFullScreen
                      ></iframe>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>
    </Layout>
  );
}

export default Talks;