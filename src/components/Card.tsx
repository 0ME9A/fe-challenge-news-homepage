import React from "react";
import styles from "./Card.module.css";

interface CardProps {
  id: number | string;
  title: string;
  img: string;
  content: string;
}

const Card: React.FC<CardProps> = ({ id, title, img, content }: CardProps) => {
  return (
    <article className={styles.card}>
      <img src={img} alt={title} className={styles.img} />
      <div className={styles.detail}>
        <strong className={styles.id}>{id}</strong>
        <h2 className="card-title">{title}</h2>
        <p className="card-content">{content}</p>
      </div>
    </article>
  );
};

export default Card;
