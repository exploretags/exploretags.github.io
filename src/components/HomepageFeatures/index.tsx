import type { ReactNode } from "react";
import clsx from "clsx";
import Heading from "@theme/Heading";
import styles from "./styles.module.css";

type FeatureItem = {
  title: string;
  icon: string;
  description: ReactNode;
};

const FeatureList: FeatureItem[] = [
  {
    title: "城市任務式探索",
    icon: "🧭",
    description: (
      <>
        不再只是走馬看花，ExploreTags 將城市轉化為一場場探索任務。
        從藝文景點到隱藏版秘境，每一次打卡都是一個成就，讓你的旅程更有方向與意義。
      </>
    ),
  },
  {
    title: "專屬你的旅行收藏庫",
    icon: "💎",
    description: (
      <>
        每一次打卡，都會轉化為一顆專屬「旅行寶石」。
        透過視覺化收藏與地圖紀錄，完整保存你的足跡，打造屬於你的人生冒險履歷。
      </>
    ),
  },
  {
    title: "主題式地圖策展",
    icon: "🗺️",
    description: (
      <>
        不論是「博物館巡禮」、「鐵道車站蒐集」，或「名人美食地圖」， ExploreTags
        幫你整理好探索路線，讓你用不同視角認識一座城市。
      </>
    ),
  },
];

function Feature({ title, icon, description }: FeatureItem) {
  return (
    <div className={clsx("col col--4")}>
      <div className={styles.glassCard}>
        <div className={styles.iconWrap}>{icon}</div>
        <h3 className={styles.cardTitle}>{title}</h3>
        <p className={styles.cardDesc}>{description}</p>
      </div>
    </div>
  );
}

type ShowcaseItem = {
  gradient: string;
  placeholderIcon: string;
  title: string;
  description: string;
};

function ProductShowcase(): ReactNode {
  const features: ShowcaseItem[] = [
    {
      gradient:
        "linear-gradient(135deg, #1a1b2e 0%, #2a1f0e 50%, #3d2a0a 100%)",
      placeholderIcon: "🗺️",
      title: "探索藝文與經典景點",
      description:
        "博物館、古蹟、圖書館、美術館、鐵道車站，一次收錄在地最值得探訪的文化場所，讓城市探索不再迷路",
    },
    {
      gradient:
        "linear-gradient(135deg, #0d1a1e 0%, #0e2218 50%, #1a3520 100%)",
      placeholderIcon: "✅",
      title: "打卡挑戰，收集專屬旅行章",
      description:
        "設計精心規劃的打卡任務，到達景點後一鍵完成挑戰。集滿指定印章，解鎖城市主題成就勳章",
    },
    {
      gradient:
        "linear-gradient(135deg, #1a0e0e 0%, #2e1a08 50%, #3d2a10 100%)",
      placeholderIcon: "🍜",
      title: "特色美食地圖，品嚐在地滋味",
      description:
        "在地小吃、老字號餐館、特色咖啡廳——ExploreTags 帶你找到旅途中每一口讓人難忘的美食驚喜",
    },
    {
      gradient:
        "linear-gradient(135deg, #0d0e1a 0%, #1a1028 50%, #231530 100%)",
      placeholderIcon: "📖",
      title: "記錄與分享你的冒險旅程",
      description:
        "為每個景點加上筆記、照片連結與心得標籤，打造屬於你的旅行知識庫，隨時回顧也能輕鬆分享給旅伴",
    },
    {
      gradient:
        "linear-gradient(135deg, #0e1a0e 0%, #1a2816 50%, #0d1a1a 100%)",
      placeholderIcon: "💎",
      title: "解鎖城市成就，收藏旅行寶石",
      description:
        "每一座探索完成的城市、每一個解鎖的主題成就，都成為你冒險足跡中閃閃發光的旅行寶石",
    },
  ];

  return (
    <section className={styles.showcase}>
      <div className="container">
        <div className={styles.sectionLabel}>
          <span className="ct-section-badge">功能特色</span>
          <Heading as="h2">一起出發，探索城市每個角落</Heading>
        </div>
        {features.map((feature, idx) => (
          <div
            key={idx}
            className={clsx(
              styles.showcaseRow,
              idx % 2 === 1 && styles.showcaseRowReverse,
            )}
          >
            <div className={styles.showcaseImageWrap}>
              <div
                className={styles.showcasePlaceholder}
                style={{ background: feature.gradient }}
              >
                {feature.placeholderIcon}
              </div>
            </div>
            <div className={styles.showcaseTextWrap}>
              <h3 className={styles.showcaseTitle}>{feature.title}</h3>
              <p className={styles.showcaseDesc}>{feature.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default function HomepageFeatures(): ReactNode {
  return (
    <>
      <section className={styles.features}>
        <div className="container">
          <div className={styles.featuresPreamble}>
            <span className="ct-section-badge">核心優勢</span>
            <Heading as="h2">為何選擇 ExploreTags 漫旅書籤？</Heading>
          </div>
          <div className="row">
            {FeatureList.map((props, idx) => (
              <Feature key={idx} {...props} />
            ))}
          </div>
        </div>
      </section>
      <ProductShowcase />
    </>
  );
}
