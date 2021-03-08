import React from "react";
import clsx from "clsx";
import Layout from "@theme/Layout";
import Link from "@docusaurus/Link";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import useBaseUrl from "@docusaurus/useBaseUrl";
import styles from "./styles.module.css";
import BackgroundImage from "../components/BackgroundImage";

const features = [
  {
    title: "Flutter Starter",
    imageUrl: "img/FS-Blue.png",
    description: <>A Flutter starter-kit for production-level apps.</>,
  },
  {
    title: "SyncState",
    imageUrl: "img/synchState-logo.png",
    description: <>A state management library for React & JS apps</>,
  },
  {
    title: "NativeBase",
    imageUrl: "img/native-base-icon.png",
    description: (
      <>Essential cross-platform UI components for React Native & Vue Native.</>
    ),
  },
];

function Feature({ imageUrl, title, description }) {
  const imgUrl = useBaseUrl(imageUrl);
  return (
    <div className={clsx("col col--4", styles.feature)}>
      {imgUrl && (
        <div className="text--center">
          <img className={styles.featureImage} src={imgUrl} alt={title} />
        </div>
      )}
      <h3 className="text--center" style={{ marginTop: "20px" }}>
        {title}
      </h3>
      <p className="text--center">{description}</p>
    </div>
  );
}

function Home() {
  const context = useDocusaurusContext();
  const { siteConfig = {} } = context;
  return (
    <Layout
      title={`${siteConfig.title}`}
      description="Description will go into a meta tag in <head />"
    >
      <meta property="og:type" content="website" />
      <meta property="og:title" content="useDB" />
      <meta
        property="og:description"
        content="DB connection for React without writing the APIs"
      />
      <meta property="og:image" content={useBaseUrl("img/useDB-Logo1.png")} />
      <meta property="og:url" content={useBaseUrl + "/usedb"} />
      <meta property="og:site_name" content="useDB" />
      <div className="header">
        <BackgroundImage />
        <div id="contentDiv">
          <h1 className="hero__title hero_title--left">{siteConfig.tagline}</h1>
          <p className="hero__subtitle hero__subtitle--left">
            useDB is an open source library to make backend agnostic API calls
            using ORM like querying interface.
          </p>
          <div className={styles.buttons}>
            <Link
              id="getStartedBtn"
              className={clsx(
                "button button--outline button--secondary button--lg ",
                styles.getStarted
              )}
              to={useBaseUrl("docs/introduction")}
            >
              Get Started
            </Link>
          </div>
        </div>
      </div>

      <main>
        {features && features.length > 0 && (
          <section className={styles.features}>
            <div className="container">
              <h1 className="heading1">What is useDB?</h1>
              <p style={{ textAlign: "center" }}>
                useDB is an open source library to make backend agnostic API
                calls using ORM like querying interface.
              </p>
              <iframe
                src="https://codesandbox.io/embed/todo-nv180?fontsize=14&hidenavigation=1&theme=dark"
                style={{
                  width: "100%",
                  height: "600px",
                  border: "0",
                  borderRadius: "4px",
                  overflow: "hidden",
                  margin: "50px 0",
                }}
                title="todo"
                allow="accelerometer; ambient-light-sensor; camera; encrypted-media; geolocation; gyroscope; hid; microphone; midi; payment; usb; vr; xr-spatial-tracking"
                sandbox="allow-forms allow-modals allow-popups allow-presentation allow-same-origin allow-scripts"
              ></iframe>
              <h1 className="heading1">Related Projects</h1>
              <div className="row" style={{ marginTop: "50px" }}>
                {features.map((props, idx) => (
                  <Feature key={idx} {...props} />
                ))}
              </div>
            </div>
          </section>
        )}
      </main>
    </Layout>
  );
}

export default Home;
