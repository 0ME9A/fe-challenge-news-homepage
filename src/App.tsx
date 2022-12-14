import PageLayout from "./layouts/PageLayout";
import styles from "./App.module.css";

import ImgWeb3 from "./assets/images/image-web-3-desktop.jpg";
import ImgWeb3Mobile from "./assets/images/image-web-3-mobile.jpg";

import ImgRetro from "./assets/images/image-retro-pcs.jpg";
import ImgLaptop from "./assets/images/image-top-laptops.jpg";
import ImgGaming from "./assets/images/image-gaming-growth.jpg";

function App() {
  return (
    <PageLayout>
      <div className={styles.content}>
        <article className={styles.highlights}>
          <picture>
            <source srcSet={ImgWeb3} media="(min-width: 900px)" />
            <img src={ImgWeb3Mobile} />
          </picture>
          <div className={styles["highlights-info"]}>
            <h1 className={styles["highlights-title"]}>The Bright Future of Web 3.0?</h1>
            <div>
              <p className={styles["highlights-description"]}>
                We dive into the next evolution of the web that claims to put the power of the
                platforms back into the hands of the people. But is it really fulfilling its
                promise?
              </p>
              <a className={styles["highlights-button"]}>Read more</a>
            </div>
          </div>
        </article>

        <article className={styles["sub-highlights"]}>
          <h2>New</h2>
          <ul>
            <li>
              <h3>Hydrogen VS Electric Cars</h3>
              <p>Will hydrogen-fueled cars ever catch up to EVs?</p>
            </li>
            <hr />
            <li>
              <h3>The Downsides of AI Artistry</h3>
              <p>What are the possible adverse effects of on-demand AI image generation?</p>
            </li>
            <hr />
            <li>
              <h3>Is VC Funding Drying Up?</h3>
              <p>Private funding by VC firms is down 50% YOY. We take a look at what that means.</p>
            </li>
          </ul>
        </article>

        <article className={styles.recommendations}>
          <ul>
            <li>
              <img src={ImgRetro} />
              <div>
                <p className={styles.number}>01</p>
                <h3>Reviving Retro PCs</h3>
                <p>What happens when old PCs are given modern upgrades?</p>
              </div>
            </li>

            <li>
              {" "}
              <img src={ImgLaptop} />
              <div>
                <p className={styles.number}>02</p>
                <h3>Top 10 Laptops of 2022</h3>
                <p>Our best picks for various needs and budgets.</p>
              </div>
            </li>

            <li>
              {" "}
              <img src={ImgGaming} />
              <div>
                <p className={styles.number}>03</p>
                <h3>The Growth of Gaming</h3>
                <p>How the pandemic has sparked fresh opportunities.</p>
              </div>
            </li>
          </ul>
        </article>
      </div>
    </PageLayout>
  );
}

export default App;
