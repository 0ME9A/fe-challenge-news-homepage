import React from "react";
import styles from "./Highlight.module.css";

interface HighlightProps {
  imgMob: string;
  imgDesk: string;
  title: string;
  content: string;
  url: string;
}

const Highlight: React.FC<HighlightProps> = ({
  imgMob,
  imgDesk,
  title,
  content,
  url = "#",
}) => {
  return (
    <article className={styles.highlights}>
      <picture>
        <source srcSet={imgDesk} media="(min-width: 900px)" />
        <img src={imgMob} alt={title} />
      </picture>
      <div className={styles["highlights-info"]}>
        <h1 className={styles["highlights-title"]}>{title}</h1>
        <div>
          <p className={styles["highlights-description"]}>{content}</p>
          <a href={url} target={"_top"} className={styles["highlights-button"]}>
            Read more
          </a>
        </div>
      </div>
    </article>
  );
};

export default Highlight;
