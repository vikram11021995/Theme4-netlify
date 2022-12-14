import Link from "next/link";
import Image from "next/image";
import Head from "next/head";
import classes from "./ListOfBest.module.css";
import { Fade } from "react-awesome-reveal";

const HomeBanner = () => {
  return (
    <>
      <Head>
        <title>B2BN Starter Home Page</title>
        <meta
          name="description"
          content="Placeholder description for the B2B Starter Marketplace Home Page"
        />
      </Head>

      <div className={classes.ListOfBest}>
        {/* <div className={classes.ListOfBestInner}>
        <Fade direction="right" delay={1e3} cascade damping={0.1} triggerOnce >
          <div className={classes.fond}>
            <div className={classes.carreaux_presentation_light} style={{ backgroundImage: "url(https://ik.imagekit.io/ofb/themes/AdobeStock_336181022_KVrfXBULO.png?ik-sdk-version=javascript-1.4.3&updatedAt=1665052311766)" }}>
              <div className={classes.shadow_swhow_mini}>
                <div className={classes.deroul_titre}>What's New <br/> <span>A collection of our latest arrivals</span></div>
                <div className={classes.deroul_soustitre}><span><Link
                      href={`/shop/shop1`}
                    >
                      <a style={{color: "#fff"}}>Shop Now</a></Link></span></div>
              </div>
            </div>
            <div className={classes.carreaux_presentation_light} style={{ backgroundImage: "url(https://ik.imagekit.io/ofb/themes/AdobeStock_336183104_tqO9zSPQuN.png?ik-sdk-version=javascript-1.4.3&updatedAt=1665052313045)" }}>
              <div className={classes.shadow_swhow_mini}>
                <div className={classes.deroul_titre}>Best Selling <br/><span>Explore our best sellers</span></div>
                <div className={classes.deroul_soustitre}><span><Link
                      href={`/shop/shop1`}
                    >
                      <a style={{color: "#fff"}}>Shop Now</a></Link></span></div>
              </div>
            </div>
            <div className={classes.carreaux_presentation_light} style={{ backgroundImage: "url(https://ik.imagekit.io/ofb/themes/AdobeStock_265897134_e0OGAMMPJ.png?ik-sdk-version=javascript-1.4.3&updatedAt=1665052305248)" }}>
              <div className={classes.shadow_swhow_mini}>
                <div className={classes.deroul_titre}>Accessories in Style <br/><span>Find your look in our carefully curated collection</span></div>
                <div className={classes.deroul_soustitre}><span><Link
                      href={`/shop/shop1`}
                    >
                      <a style={{color: "#fff"}}>Shop Now</a></Link></span></div>
              </div>
            </div>
          </div>
          </Fade>
        </div> */}

        {/* <div className="festive-collection">
          <button>Shop Collection</button>
        </div> */}
        <div className="container-img">
          <img
            src={`https://ik.imagekit.io/ofb/themes/Group_258_8ETvRmOwl.png?ik-sdk-version=javascript-1.4.3&updatedAt=1669864138283`}
            className="medicine-img"
            />
            <div className="bottom-left">Festive Sale</div>
            <div className="top-left">Grab all the Skin and Hair Care Products this Festive Season</div>

            <div className="extremetop-left">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</div>

            <div className="extremetop-left-btn"><button className="shopCollectBtn">Shop Collection</button></div>
        </div>
      </div>
    </>
  );
};

export default HomeBanner;
