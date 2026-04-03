import type { ReactNode } from "react";
import clsx from "clsx";
import Link from "@docusaurus/Link";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import Layout from "@theme/Layout";
import HomepageFeatures from "@site/src/components/HomepageFeatures";
import Heading from "@theme/Heading";

import styles from "./index.module.css";

function StatsBar(): ReactNode {
  const stats = [
    { value: "100+", label: "精選景點推薦" },
    { value: "20+", label: "城市主題探索" },
    { value: "打卡", label: "挑戰任務系統" },
    { value: "收藏", label: "記錄冒險足跡" },
    { value: "iOS & Android", label: "免費下載" },
  ];
  return (
    <div className="ct-stats-bar">
      {stats.map((s, i) => (
        <div key={i} className="ct-stat-item">
          <span className="ct-stat-value">{s.value}</span>
          <span className="ct-stat-label">{s.label}</span>
        </div>
      ))}
    </div>
  );
}

function HomepageHeader() {
  const { siteConfig } = useDocusaurusContext();
  return (
    <header className={clsx("hero hero--primary", styles.heroBanner)}>
      <div className="container">
        <Heading as="h1" className="hero__title">
          {siteConfig.title}
        </Heading>
        <p className="hero__subtitle">{siteConfig.tagline}</p>
        <div className={styles.buttons}>
          <Link className="button button--success button--lg" to="#">
            立即下載 App
          </Link>
          <Link
            className="margin-left--sm button button--secondary button--lg"
            to="/explore"
          >
            探索景點
          </Link>
        </div>
      </div>
    </header>
  );
}

export default function Home(): ReactNode {
  const { siteConfig } = useDocusaurusContext();
  return (
    <Layout
      title={`${siteConfig.title}`}
      description="透過打卡挑戰，探索城市藝文與經典景點，收藏屬於你的冒險足跡。博物館、古蹟、圖書館、鐵道車站，甚至特色美食地圖——一步步集屬於你的旅行寶石"
    >
      <HomepageHeader />
      <StatsBar />
      <main>
        <HomepageFeatures />
      </main>
      <div className="ct-newsletter-wrap">
        <iframe
          src="https://exploretags.substack.com/embed"
          width="100%"
          height="320"
          style={{ maxWidth: "680px", margin: "0 auto", display: "block" }}
          frameBorder="0"
          scrolling="no"
        ></iframe>
      </div>
    </Layout>
  );
}
