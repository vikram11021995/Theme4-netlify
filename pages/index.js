import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { useSelector, shallowEqual, useDispatch } from "react-redux";
import { LINK_DISTRIBUTION, PROJECT_LINK, VID } from "../project-config";
import HomeBanner from "../components/home/HomeBanner";
import Collections from "../components/Collections";
import FeaturedSellers from "../components/FeaturedSellers";
import CategoriesListTheme1 from "../components/theme1/category-list/CategoriesListTheme1";
import menuData from "../preBuildData/menu/menu.json";
import { categoryUrl } from "../preScripts/links";
import PopularOffersoftheDay from "../components/FeaturedProducts";
import RecommendedProducts from "../components/RecommendedProducts";

import Head from "next/head";
// import ExternalContentFromCMS from "../components/AC-ExternalContentFromCMS/ExternalContentFromCMS";
import dynamic from "next/dynamic";
import { useTranslation } from "next-i18next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { i18n } from "../next-i18next.config";
import Translate from "../utils/Translate";
import EndOfSeason from "../components/theme1/EndOfSeason/EndOfSeason";
import ShopByType from "../components/theme1/ShopByType/ShopByType";
import ShopByTypeNew from "../components/theme1/ShopByType/ShopByTypeNew";
import ShopByCollection from "../components/theme1/ShopByCollection/ShopByCollection";
import ListOfBest from "../components/theme1/ListOfBest/ListOfBest";
import Policies from "../components/theme1/Policies/Policies";
import Image from 'next/image'

const DynamicExternalContentFromCMS = dynamic(() =>
  import("../components/AC-ExternalContentFromCMS/ExternalContentFromCMS")
);
const DynamicDrawer = dynamic(() => import("../components/elements/Drawer/Drawer.jsx"));
import App from "../themeSetUp/App";
import * as themes from "../themeSetUp/theme/schemas.json";
import { setToLS } from "../themeSetUp/utils/storage";
import { useTheme } from "../themeSetUp/theme/useTheme";

export default function Home({ carousel, menu, shopbyData, allThemes }) {
  console.log("Sivaaaaaa", allThemes);
  setToLS("all-themes", themes.default);
  const [showThemes, setShowThemes] = useState(false);

  const { theme, themeLoaded, getFonts, getBanners, get } = useTheme();
  const [selectedTheme, setSelectedTheme] = useState({
    id: "T_001",
    name: "Light",
    colors: {
      body: "#FFFFFF",
      text: "#000000",
      button: {
        text: "#FFFFFF",
        background: "#000000"
      },
      link: {
        text: "teal",
        opacity: 1
      }
    },
    
  });

  const [showDialog, setShowDialog] = useState(false);
  const [newTheme, setNewTheme] = useState();
  const createTheme = newTheme => {
    console.log("Homepagetheme", newTheme);
    setShowDialog(false);
    setNewTheme(newTheme);
  };

  let defaultThemes = window.localStorage.getItem("all-themes");
  // useEffect(() => {
  //   if (!defaultThemes) {
  //     setToLS("all-themes", themes.default);
  //   } else {
  //   }
  // }, [defaultThemes]);


  useEffect(() => {
    setSelectedTheme(theme);
  }, [themeLoaded]);

  const { t } = useTranslation("translation");
  const [catRegular, setCatRegular] = useState("regular");
  useEffect(() => {
    const currentRegularCat = JSON.parse(localStorage.getItem("Cat"));
    if (currentRegularCat) {
      setCatRegular(currentRegularCat);
    }

  }, [catRegular]);
  console.log("t22", shopbyData);
  const [stores, setStores] = useState([]);

  useEffect(() => {
    async function fetchData() {
      let storeCid = menuData.childs.find(cat =>
        cat.URL.includes("stores")
      ).cid;

      let storesData = await fetch(categoryUrl({ id: storeCid }));
      let data = await storesData?.json();
      setStores(data[1]);
    }

    fetchData();
  }, []);

  const isMobileState = useSelector(
    state => state.mainReducer.isMobile,
    shallowEqual
  );

  console.log("c", selectedTheme);
  console.log("cf", createTheme);
  console.log("cff", allThemes);

  return (
    <>
      <Head>
        <title>Home</title>
        <meta name="description" content="placeholder" />
        {" "}
        <meta name="keywords" content="placeholder" />
        {" "}
        <meta name="metakeywords" content="placeholder" />
        <meta property="og:title" content="placeholder" />
        <meta property="og:image" content={`/images/sllogo.png`} />
        <meta property="og:image:secure_url" content={`/images/sllogo.png`} />
        <meta property="og:description" content="placeholder" />
        {" "}
        <meta property="twitter:title" content="placeholder" />
        <meta property="twitter:description" content="placeholder" />
        <meta property="og:url" content={LINK_DISTRIBUTION} />
        <meta property="og:type" content="website" />
        <meta property="twitter:creator" content={"@avetti"} />
        {/* <link rel="icon" href="/favicon.ico" /> */}
      </Head>
      <DynamicExternalContentFromCMS
        place="home"
        position="Top"
        renderedBy="Header"
      />
      {/* <App /> */}
      <HomeBanner />
      <DynamicExternalContentFromCMS
        place="home"
        position="Middle"
        renderedBy="Header"
      />
      <CategoriesListTheme1 />
      <PopularOffersoftheDay shopby={shopbyData} />

      <EndOfSeason />
      {catRegular.cat === "regular" ? <ShopByType /> : <ShopByTypeNew />}


      <ShopByCollection />

      <RecommendedProducts shopby={shopbyData}/>
      <ListOfBest />
     <div className="browseCat-container">
        
        <Collections />
        
        <FeaturedSellers stores={stores} />
       
      </div>



        <div className="brand-authors">
          <div>
            <img src="https://ik.imagekit.io/ofb/themes/Group_570_8tCC5Kv9z.png?ik-sdk-version=javascript-1.4.3&updatedAt=1669881834938"
            className="brand-authors1"/>
            {/* <Image
        src="https://ik.imagekit.io/ofb/themes/Group_570_8tCC5Kv9z.png?ik-sdk-version=javascript-1.4.3&updatedAt=1669881834938"
        alt="Picture of the author"
        width={200}
        height={100}
      /> */}
          </div>
          <div>
            <img src="https://ik.imagekit.io/ofb/themes/Group_571_W0fPMGAt_.png?ik-sdk-version=javascript-1.4.3&updatedAt=1669881834909"
            className="brand-authors1"/>
            {/* <Image
                src="https://ik.imagekit.io/ofb/themes/Group_570_8tCC5Kv9z.png?ik-sdk-version=javascript-1.4.3&updatedAt=1669881834938"

        alt="Picture of the author"
        width={90}
        height={60}
      /> */}
          </div>
          <div>
            <img src="https://ik.imagekit.io/ofb/themes/Group_569_vxtK0B6Sg.png?ik-sdk-version=javascript-1.4.3&updatedAt=1669881834772"
            className="brand-authors1"/>
            {/* <Image
                src="https://ik.imagekit.io/ofb/themes/Group_570_8tCC5Kv9z.png?ik-sdk-version=javascript-1.4.3&updatedAt=1669881834938"

        alt="Picture of the author"
        width={90}
        height={60}
      /> */}
          </div>

        </div>

       

      

     

      <DynamicExternalContentFromCMS
        place="home"
        position="Bottom"
        renderedBy="HomeBanner"
      />

    </>
  );
}

export async function getStaticProps({ locale }) {
  // let data;
  // let banners;
  let carousel;
  let menu;

  let allThemes;
  try {
    const url = "https://themes-c5a48-default-rtdb.firebaseio.com/schema/data.json";
    const res = await fetch(url);
    allThemes = await res.json();
  } catch (e) {
    console.log("THEMES CANNOT BE FETCHED ", e);
  }

  console.log("allThemessss", allThemes);

  // try {
  //   const url = `${PROJECT_LINK}/uservices/1.0.2/category-page/${VID}/cid/445448/lang/en/`; // furniture category's cid
  //   const res = await fetch(url);
  //   data = await res.json();
  // } catch (err) {
  //   console.error("Error fetching static data for index page", err);
  // }

  // try {
  //   const strapiUrl = "https://cms.avetti.io/banners";
  //   const res = await fetch(strapiUrl);
  //   banners = await res.json();
  // } catch (e) {
  //   console.log(e);
  // }

  try {
    const strapiUrl =
      "https://cms.avetti.io/home-carousels?id=628cd1fc01b9a94d6c985db1";
    const res = await fetch(strapiUrl);
    carousel = await res.json();
    // carousel = carousel[0].map(img => img.image_mobile);
  } catch (e) {
    console.log(e);
  }

  /* try {
    const url = `${LINK_DISTRIBUTION}/uservices/1.0.2/menu/${VID}/category/Shop/lang/${locale}/?longdesc=1`;
    console.log("menu url", url);
    const res = await fetch(url);
    menu = await res.json();
  } catch (e) {
    console.log("error fetching menu", e);
  }
 */
  /*   if (data === undefined) {
    data = {};
  }
 */

  try {
    const url = `${LINK_DISTRIBUTION}/uservices/1.0.2/menu/${VID}/category/menu1/lang/en/?longdesc=1`;
    const res = await fetch(url);
    menu = await res.json();
  } catch (e) {
    console.log(e);
  }

  let storesData = [];
  let featuredStoresData = [];

  let shopbyData = [];

  let collectionData = [];

  try {
    // const ShopCid = "557799";
    // const StoreCid = "557715";
    /* All Stores Data  */
    const url = `${LINK_DISTRIBUTION}/uservices/1.0.2/category-page/${VID}/cid/561249/lang/en/`;

    const res = await fetch(url);
    storesData = await res.json();

    /* featured products */
    const featuredProducts = `${LINK_DISTRIBUTION}/uservices/1.0.2/category-page/${VID}/cid/561249/lang/en/`;

    const resFeaturedProducts = await fetch(featuredProducts);
    const featuredProductsData = await resFeaturedProducts.json();

    let featuredProductsCreatedBySupplierList = [];

    featuredProductsData?.[1].items.forEach(item => {
      const supplier = item?.properties?.Created_By_Supplier;
      if (supplier && !featuredProductsCreatedBySupplierList.includes(supplier))
        featuredProductsCreatedBySupplierList.push(supplier);
    });

    const featuredProductsDataPageCount = Number(
      featuredProductsData?.[0]?.numOfPages
    );

    if (featuredProductsDataPageCount && featuredProductsDataPageCount > 1) {
      // fetch all pages promise all using map
      const allPagesPromise = Array.from(
        { length: featuredProductsDataPageCount },
        (_, i) => i + 1
      ).map(async pageNumber => {
        const pagingUrl = CATEGORY_PAGING_FETCH_LINK({
          cid: shopByCid,
          page: pageNumber,
          lang: "en",
          queryString: "&featured_sellers=20220706044"
        });
        const res = await fetch(pagingUrl);
        const data = await res.json();
        return data;
      });

      const allPagesData = await Promise.all(allPagesPromise);

      allPagesData.forEach(pageData => {
        pageData.forEach(data => {
          data?.[1].items.forEach(item => {
            const supplier = item?.properties?.Created_By_Supplier;
            if (
              supplier &&
              !featuredProductsCreatedBySupplierList.includes(supplier)
            )
              featuredProductsCreatedBySupplierList.push(supplier);
          });
        });
      });

      console.log("allPagesData", allPagesData);
    }

    featuredStoresData = storesData;

    if (featuredStoresData?.[1]?.items) {
      featuredStoresData[1].items = storesData?.[1].items.filter(store => {
        return featuredProductsCreatedBySupplierList.includes(
          store?.properties?.Created_By_Supplier
        );
      });
    }

    console.table({
      url,
      featuredProducts,
      featuredProductsDataPageCount,
      featuredProductsCreatedBySupplierList
    });

    /* ShopBy Products */
    const furl = `${LINK_DISTRIBUTION}/uservices/1.0.2/category-page/${VID}/cid/561249/lang/en/`;

    console.log("siva", VID);


    const curl = `${LINK_DISTRIBUTION}/uservices/1.0.2/category-page/${VID}/cid/561249/lang/en/`;


    console.log("stores url", VID);
    /* ShopBy Products */
    const fres = await fetch(furl);
    shopbyData = await fres.json();

    /* Collection Products */
    const cres = await fetch(curl);
    collectionData = await cres.json();


    console.log("resresres", shopbyData);
  } catch (err) {
    console.error("Error fetching static data for stores index page", err);
  }

  return {
    props: {
      ...(await serverSideTranslations(
        locale,
        ["common", "translation", "currency-formatting"],
        { i18n }
      )),
      carousel,
      menu,
      storesData,
      featuredStoresData,
      shopbyData,
      collectionData,
      allThemes
    },
    revalidate: 3600 * 24
  };
}

const Wrapper = styled.main`
  margin-top: 30px;

  hr {
    border: none;
    border-bottom: 1px solid rgb(221, 221, 221);
    margin: 30px 0;
  }

  .one-column {
    /* width: 600px;
    position: relative; */

    img {
      width: 100%;
    }
  }

  .three-columns {
    width: 100%;
    display: inline-grid;
    grid-template-columns: 1fr 1fr 1fr;
    grid-gap: 10px;

    .article-img {
      grid-column: span 1;
    }
  }

  .image {
    object-fit: contain;
    width: 100% !important;
    position: relative !important;
    height: unset !important;
  }

  .unset {
    width: 100%;
  }

  .unset > div {
    position: unset !important;
  }

  @media only screen and (max-width: 768px) {
    .three-columns {
      grid-template-columns: 1fr;
    }
  }
`;
const MenuStyled = styled.div`
  .css-5cjz36 {
    margin: 0px 0px 0.625rem;
    font-weight: 500;
    font-size: 1rem;
    line-height: 1.5;
    letter-spacing: 0.15px;
    color: "rgba(76, 78, 100, 0.87);
  padding: 20px 20px 0px 20px;
}

.logo a{
 color: var(--text1);
 font-weight:bold;
}


.mainPart{
 display: flex;
 align-items: center;
}

  .buttons{
    
     ul{
      display: flex;
      justify-content: flex-start;
      padding: 10px 20px;
    }
    .button{
      cursor:pointer;
      margin-right:.2rem;
    }
    .fonts{
      color: #333;
      width: 100%;
      border: 1px solid #cdcdcd;
      margin-bottom: 12px;
      text-align: center;
    }
    .circle{
      width: 40px;
      height: 40px;
      display: flex;
      border-radius: 8px;
      cursor: pointer;
      -webkit-box-align: center;
      align-items: center;
      -webkit-box-pack: center;
      justify-content: center;
      margin: 0rem 0.375rem;
      color: " rgb(255, 255, 255);
    transition: box-shadow 0.25s ease 0s;
    background-color: var(--circle-colr);
    border: 2px solid var(--border);
  }
}

.align-items-center {
  -webkit-box-align: center !important;
  -ms-flex-align: center !important;
  align-items: center !important;
}

.justify-content-between {
  -webkit-box-pack: justify !important;
  -ms-flex-pack: justify !important;
  justify-content: space-between !important;
}

.p-5 {
  padding: 0.4rem;
}

.d-flex {
  display: -webkit-box !important;
  display: -ms-flexbox !important;
  display: flex !important;
}

.h4, h4 {
  font-size: 1.286rem;
}

.customizer-section {
  padding: 1.2rem 0px;
  border-bottom: 1px solid #ebe9f1;
}
`;
