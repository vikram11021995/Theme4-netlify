import Link from "next/link";
import Image from "next/image";
import Head from "next/head";
import classes from "./CategoryChildList.module.css";
import {Fade} from "react-awesome-reveal";

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
      {/* <Fade direction="left" delay={1e3} cascade damping={0.1} triggerOnce>
      <div className={classes.categoryList}>
        <div className={classes.categoryListInner}>
          <div className={classes.fond}>
            <div className={classes.carreaux_presentation_light} style={{ backgroundImage: "url(https://ik.imagekit.io/ofb/themes/Group_52_Qs6-qg-Ix.png?ik-sdk-version=javascript-1.4.3&updatedAt=1665387678254)", marginRight: "20px" }}>
              <div className={classes.shadow_swhow_mini}>
                <div className={classes.deroul_titre}><Link
                      href={`/shop/shop1`}
                    >
                      <a style={{color: "#fff"}}>Dresses</a></Link></div>
              </div>
            </div>
            <div className={classes.carreaux_presentation_light} style={{ backgroundImage: "url(https://ik.imagekit.io/ofb/themes/Group_53_Arm7hmk3R.png?ik-sdk-version=javascript-1.4.3&updatedAt=1665387678555)", marginRight: "20px" }}>
              <div className={classes.shadow_swhow_mini}>
                <div className={classes.deroul_titre}><Link
                      href={`/shop/shop1`}
                    >
                      <a style={{color: "#fff"}}>Tops</a></Link></div>
              </div>
            </div>
            <div className={classes.carreaux_presentation_light} style={{ backgroundImage: "url(https://ik.imagekit.io/ofb/themes/Group_54_MF5BCmX58T.png?ik-sdk-version=javascript-1.4.3&updatedAt=1665387678365)", marginRight: "20px" }}>
              <div className={classes.shadow_swhow_mini}>
                <div className={classes.deroul_titre}><Link
                      href={`/shop/shop1`}
                    >
                      <a style={{color: "#fff"}}>Bottoms</a></Link></div>
              </div>
            </div>
            <div className={classes.carreaux_presentation_light} style={{ backgroundImage: "url(https://ik.imagekit.io/ofb/themes/Group_55_DxedajuFq.png?ik-sdk-version=javascript-1.4.3&updatedAt=1665387678306)" }}>
              <div className={classes.shadow_swhow_mini}>
                <div className={classes.deroul_titre}><Link
                      href={`/shop/shop1`}
                    >
                      <a style={{color: "#fff"}}>Pantsuits and Jumpsuits</a></Link></div>
              </div>
            </div>
          </div>
        </div>
      </div>
      </Fade> */}

    </>
  );
};

export default HomeBanner;
