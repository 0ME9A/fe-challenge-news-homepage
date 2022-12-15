import React from "react";
import styles from "./NewArticle.module.css";

interface NewArticleProps {
  id: number | string;
  title: string;
  content: string;
}

const NewCard: React.FC<NewArticleProps> = ({ id, title, content }) => {
  return (
    <article className={`${styles.card} new-article new-article-${id}`}>
      <h3>{title}</h3>
      <p>{content}</p>
    </article>
  );
};

export default NewCard;
