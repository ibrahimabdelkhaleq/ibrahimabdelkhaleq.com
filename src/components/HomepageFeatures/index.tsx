import clsx from 'clsx';
import Heading from '@theme/Heading';
import styles from './styles.module.css';

const AboutMeList = [
  {
    title: '💻 Expertise',
    description: (
      <>
        DevOps Lead with a knack for cloud magic, container spells, and CI/CD enchantments. When I'm not casting spells to optimize software delivery, I'm diving deep into the mystical realms of business growth and tech innovation.
      </>
    ),
  },
  {
    title: '🚀 Passionate Explorer',
    description: (
      <>
        driven by a love for discovery and hands-on experimentation in my home lab. My motto, ‘Break and fix,’ reflects my commitment to learning through action and embracing every chance to grow.
      </>
    ),
  },
  {
    title: '🤝 Community Contributor',
    description: (
      <>
        I enjoy creating material and contributing to the community through blog posts, and mentorship.
      </>
    ),
  },
  ,
  // {
  //   title: '🏉 Sports Enthusiast',
  //   description: (
  //     <>
  //       You will often find me enjoying nature or on the field, playing team sports.
  //       Recently, I joined a local women’s rugby team, where I am embracing the creativity of the sport itself.
  //     </>
  //   ),
  //   center: true,
  // },
];

function AboutMe({ Svg, title, description, center }) {
  return (
    <div className={clsx('col', center && 'col--4 offset--center')}>
      <div className="text--center padding-horiz--md">
        <Heading as="h3">{title}</Heading>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures() {
  return (
    <section className={styles.features}>
      <div className="container">
        <Heading as="h1" className="text--center margin-bottom--lg"> A little bit about myself </Heading>
        <div className="margin-bottom--lg"></div>
        <div className="margin-bottom--lg"></div>
        <div className="row">
          {AboutMeList.map((props, idx) => (
            <AboutMe key={idx} Svg={null} center={null} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
