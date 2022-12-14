import Link from "next/link";
import Image from "next/image";
import Head from "next/head";
import classes from "./ShopByCollection.module.css";
import { JackInTheBox } from "react-awesome-reveal";

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

      <div className={classes.ShopByCollection}>
        <div className={classes.ShopByCollectionInner}>
          <h1 className={classes.ShopByCollectionHeading}>Shop Collections</h1>
          {/* <JackInTheBox direction="right" delay={1e3} cascade damping={0.1} triggerOnce >
          <div className={classes.ShopByCollectionUl}>
            <ul>
              <li><Link
                      href={`/shop/shop1`}
                    >
                      <a>
                <div className={classes.ShopByCollectionImg}><img src="https://ik.imagekit.io/ofb/themes/AdobeStock_287036617_oZZpiub8o.png?ik-sdk-version=javascript-1.4.3&updatedAt=1665052307122" /></div>
                <div className={classes.ShopByCollectionContent}>
                  <h1>Seasons Collection</h1>
                  <h6>121 Items</h6>
                </div></a></Link>
              </li>
              <li><Link
                      href={`/shop/shop1`}
                    >
                      <a>
                <div className={classes.ShopByCollectionImg}><img src="https://ik.imagekit.io/ofb/themes/AdobeStock_235181771_R6SF4u88uw.png?ik-sdk-version=javascript-1.4.3&updatedAt=1665052300028" /></div>
                <div className={classes.ShopByCollectionContent}>
                  <h1>Prints</h1>
                  <h6>158 Items</h6>
                </div></a></Link>
              </li>
              <li><Link
                      href={`/shop/shop1`}
                    >
                      <a>
                <div className={classes.ShopByCollectionImg}><img src="https://ik.imagekit.io/ofb/themes/AdobeStock_284343355_OPkPH2p8P.png?ik-sdk-version=javascript-1.4.3&updatedAt=1665052305123" /></div>
                <div className={classes.ShopByCollectionContent}>
                  <h1>Formal Wear</h1>
                  <h6>450 Items</h6>
                </div></a></Link>
              </li>
              <li><Link
                      href={`/shop/shop1`}
                    >
                      <a>
                <div className={classes.ShopByCollectionImg}><img src="https://ik.imagekit.io/ofb/themes/AdobeStock_352896872_MWF3WiYN0.png?ik-sdk-version=javascript-1.4.3&updatedAt=1665052313903" /></div>
                <div className={classes.ShopByCollectionContent}>
                  <h1>Party Wear</h1>
                  <h6>121 Items</h6>
                </div></a></Link>
              </li>
            </ul>
          </div>
          </JackInTheBox> */}

          <div className="shopByCollections">
            <div className="imagesitemcollections imagesitemcollection11 container-g">
              <img
                src={`https://ik.imagekit.io/ofb/themes/Component_178___3_iGV92GHQ2.png?ik-sdk-version=javascript-1.4.3&updatedAt=1669856474395`}
                // alt={desc}
                className="shopCollections shopCollectionsImage"
              />
              <div>
                <p className="skinCareView">Skin Care</p>
                <button className="btn-g">View Products</button>
              </div>

              {/* <div className="overlay"></div>
              <p className="skin-care1">Skin Care</p>
              <div className="carebutton">
                <a href="#"> View Products </a>
              </div> */}
            </div>

            <div className="imgcollectionmargin">
              <div className="particularitembrand1 container-a">
                <img
                  src={`https://ik.imagekit.io/ofb/themes/Component_179___10_HYrgwkyqG.png?ik-sdk-version=javascript-1.4.3&updatedAt=1670299132544`}
                  className="shopCollections"
                />
                <div>
                <p className="nailCareView">Nail Care</p>
                <button className="btn-a">View Products</button>
                </div>
                {/* <div className="overlay"></div>
                <div className="carebutton1">
                  <a href="#"> View Products </a>
                </div> */}
              </div>
              <div className="shopcollectionTop particularitembrand2 container-b">
                <img
                  src={`https://ik.imagekit.io/ofb/themes/Component_179___3_xrnhaWt9Z.png?ik-sdk-version=javascript-1.4.3&updatedAt=1669856473892`}
                  className="shopCollections"
                />
                <div>
                <p className="makeupCareView">Fragrances</p>
                <button className="btn-b">View Products</button>
                </div>
                {/* <div className="overlay"></div>
                <div className="carebutton2">
                  <a href="#"> View Products </a>
                </div> */}
              </div>
            </div>

            <div className="imgcollectionmargin">
              <div className="particularitembrand3 container-c">
                <img
                  src={`https://ik.imagekit.io/ofb/themes/Component_179___6_qAssxe4KZ.png?ik-sdk-version=javascript-1.4.3&updatedAt=1670299132107`}
                  // alt={desc}
                  className="shopCollections"
                  
                />
                <div>
                <p className="bathCareView1">Makeup & Cosmetics</p>
                <button className="btn-c">View Products</button>
                </div>

                {/* <div className="overlay"></div>
                <p className="Cosmetics-makeups fragranc">Makeup & Cosmetics</p>
                <div className="carebutton3">
                  <a href="#"> View Products </a>
                </div> */}
              </div>
              <div className="shopcollectionTop particularitembrand4 container-d">
                <img
                  src={`https://ik.imagekit.io/ofb/themes/Component_179___2_InQnlU0q2.png?ik-sdk-version=javascript-1.4.3&updatedAt=1670299131071`}
                  // alt={desc}
                  className="shopCollections"
                />
                <div>
                  <p className="bath_careview">Bath & Body Soap</p>
                <button className="btn-d">View Products</button>
                </div>
                {/* <div className="overlay"></div>
                <p className="Cosmetics-makeups fragrances">Bath & Body Soap</p>
                <div className="carebutton4">
                  <a href="#"> View Products </a>
                </div> */}
              </div>
            </div>

            <div className="imgcollectionmargin">
              <div className="particularitembrand5 container-e">
                <img
                  src={`https://ik.imagekit.io/ofb/themes/Component_179___8_Cwefxlccw-.png?ik-sdk-version=javascript-1.4.3&updatedAt=1670299133198`}
                  // alt={desc}
                  className="shopCollections"
                />
                <div>
                  <p className="hair_careview">Hair Care</p>
                <button className="btn-e">View Products</button>
                </div>
                {/* <div className="overlay"></div>
                <p className="Cosmetics-makeups fragrances">Hair Care</p>
                <div className="carebutton5">
                  <a href="#"> View Products </a>
                </div> */}
              </div>
              <div className="shopcollectionTop particularitembrand6 container-f">
                <img
                  src={`https://ik.imagekit.io/ofb/themes/Component_179___9_E4b5i2URp.png?ik-sdk-version=javascript-1.4.3&updatedAt=1670299134086`}
                  // alt={desc}
                  className="shopCollections"
                />
                {/* <button className="btn-f">View All</button> */}
                <button className="btn-f">
              <Link href={`/shop/categories`}>
                <a className="collection-color">View All</a>
              </Link>
            </button>

                {/* <div className="overlay"></div>
                <div className="carebutton6">
                  <a href="#"> View All </a>
                </div> */}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default HomeBanner;
