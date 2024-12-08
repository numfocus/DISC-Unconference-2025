import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import HomepageFeatures from '@site/src/components/HomepageFeatures';

import Heading from '@theme/Heading';
import styles from './index.module.css';

function HomepageHeader() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <header className={clsx('hero hero--primary', styles.heroBanner)}>
      <div className="container">
        <Heading as="h1">
          {siteConfig.title}
        </Heading>
        <p className="hero__subtitle">{siteConfig.tagline}</p>
        <div className={styles.buttons}>
          <Link
            className="button button--secondary button--lg"
            to="docs/sponsors">
            Sponsor this event
          </Link>
        </div>
      </div>
    </header>
  );
}

export default function Home() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <Layout
      title={`${siteConfig.title}`}
      description="DISC Unconference 2025">
      <HomepageHeader />
      <div className={styles.attribution}>
          Photo: Ponte Estaiada, São Paulo by NunysBR (<a href="https://commons.wikimedia.org/wiki/File:Ponte_estaiada_em_S%C3%A3o_Paulo.png">Wikimedia</a>)
      </div>
      <main>
        <HomepageFeatures />
      </main>
    </Layout>
  );
}
