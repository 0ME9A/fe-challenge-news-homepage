import PageLayout from "./layouts/PageLayout";
import styles from "./App.module.css";
import ImgWeb3 from "./assets/images/image-web-3-desktop.jpg";
import ImgWeb3Mobile from "./assets/images/image-web-3-mobile.jpg";
import Card from "./components/Card";
import NewArticle from "./components/NewArticle";
import Highlight from "./components/Highlight";
import newArticle from "./Json/newArticle.json";
import recommendations from "./Json/recommendations.json";

function App() {
  return (
    <PageLayout>
      <div className={styles.content}>
        <Highlight
          imgMob={ImgWeb3Mobile}
          imgDesk={ImgWeb3}
          title="The Bright Future of Web 3.0?"
          content="We dive into the next evolution of the web that claims to put the
            power of the platforms back into the hands of the people. But is it
            really fulfilling its promise?"
          url="#"
        />

        <aside className={styles["sub-highlights"]}>
          <h2>New</h2>
          {newArticle.map((data) => (
            <NewArticle
              key={data.id + Math.random() * 500}
              id={data.id}
              title={data.title}
              content={data.content}
            />
          ))}
        </aside>

        <section className={styles.recommendations}>
          {recommendations.map((data) => (
            <Card
              key={data.id + Math.random() * 500}
              id={data.id}
              img={data.img}
              title={data.title}
              content={data.content}
            />
          ))}
        </section>
      </div>
    </PageLayout>
  );
}

export default App;
