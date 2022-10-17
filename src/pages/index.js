import React from 'react';
import clsx from 'clsx';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import useBaseUrl from '@docusaurus/useBaseUrl';
import styles from './styles.module.css';

const features = [
  {
    title: 'Quick & Easy',
    imageUrl: 'img/illustrations/tooling.png',
    description: (
      <>
        Chewy is being designed from the ground up to be easily installed and
        used to get your projects up and running quickly. We're building tooling to 
        make sure anyone can start building ASAP, regardless of where you're at in 
        your journey as a developer.
      </>
    ),
  },
  {
    title: 'Opinionated',
    imageUrl: 'img/illustrations/education.png',
    description: (
      <>
        Part of the Chewy philosophy is that the Chewy community will make decisions
        so that individual developers don't have to. We'll do everything we can so there is
        a "correct" way to do things, so you aren't left with unanswered questions.
      </>
    ),
  },
  {
    title: 'Scalable',
    imageUrl: 'img/illustrations/support.png',
    description: (
      <>
        Chewy's default configuration will make user and team growth as easy to handle as possible. 
        If you grow bigger than that, we're designing things to make sure it's easy to modify and 
        extend so you can keep going with as little friction as possible.
      </>
    ),
  },
];

function Feature({imageUrl, title, description}) {
  const imgUrl = useBaseUrl(imageUrl);
  return (
    <div className={clsx('col col--4', styles.feature)}>
      {imgUrl && (
        <div className="text--center">
          <img className={styles.featureImage} src={imgUrl} alt={title} />
        </div>
      )}
      <h3 className={styles.title}>{title}</h3>
      <p>{description}</p>
    </div>
  );
}

export default function Home() {
  const context = useDocusaurusContext();
  const {siteConfig = {}} = context;
  return (
    <Layout
      title={`Welcome to the Chewy Stack`}
      description="Description will go into a meta tag in <head />">
      <header className={clsx('hero hero--primary', styles.heroBanner)}>
        <div className="container">
          <h1 className="hero__title">Welcome to the Chewy Stack</h1>
          <p className="hero__subtitle">A new kind of opinionated stack to help you build and deploy better products faster.</p>
          <div className={styles.buttons}>
            <Link
              className={clsx(
                'button button--secondary button--lg',
                styles.getStarted,
              )}
              to={useBaseUrl('docs/introduction')}>
              Get Started
            </Link>
          </div>
        </div>
      </header>
      <main>
        <div className={styles.featuresWrapper}>
        {features && features.length > 0 && (
          <section className={styles.features}>
            <div className="container">
              <div className="row">
                {features.map((props, idx) => (
                  <Feature key={idx} {...props} />
                ))}
              </div>
            </div>
          </section>
        )}
        </div>
      </main>
    </Layout>
  );
}
