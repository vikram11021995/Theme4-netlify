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

  const ThemeMenu = ({
                       setTheme,
                       //setThemeFont,
                       //setColorTheme,
                       close
                     }) => {


    //const [colorTheme, setColorTheme] = useState('theme-blue');
    //const [bannerTheme, setBannerTheme] = useState('one');
    // const [colorSets, setcolorSets] = useState('first');
    // const [featuredTheme, setFeaturedTheme] = useState('row6');

    // const [menuRegular, setMenuRegular] = useState('regular');
    // const [catRegular, setCatRegular] = useState('regular');

    // console.log('menuRegular', menuRegular);

    // useEffect(() => {
    //   const currentColor = JSON.parse(localStorage.getItem("themes"));
    //   if (currentColor) {
    //     setColorTheme(currentColor);
    //     document.documentElement.className = currentColor.color;
    //   }

    // }, [colorTheme]);

    // const handleClickColorSets = (colors) => {
    //   let consent = {
    //     banner: colors,
    //     isLoaded: true
    //   };
    //   localStorage.setItem('ColorSets', JSON.stringify(consent));
    //   setBannerTheme(consent);
    // }

    // useEffect(() => {
    //   const currentBanner = JSON.parse(localStorage.getItem("themesbanner"));
    //   if (currentBanner) {
    //     setBannerTheme(currentBanner);
    //   }

    // }, [bannerTheme]);

    // useEffect(() => {
    //   const currentFeatured = JSON.parse(localStorage.getItem("themesfeatured"));
    //   if (currentFeatured) {
    //     setFeaturedTheme(currentFeatured);
    //   }

    // }, [featuredTheme]);

    // const handleClick = (theme) => {
    //   let consent = {
    //     color: theme,
    //     IsAllPages: "Yes",
    //     isLoaded: true
    //   };
    //   localStorage.setItem('themes', JSON.stringify(consent));
    //   //setColorTheme(consent);
    // }

    // const handleClickMenuRegular = (regular) => {
    //   let consent = {
    //     menu: regular
    //   };
    //   localStorage.setItem('menu', JSON.stringify(consent));
    //   //setMenuRegular(consent);
    // }

    // useEffect(() => {
    //   const currentRegularMenu = JSON.parse(localStorage.getItem("menu"));
    //   if (currentRegularMenu) {
    //     setMenuRegular(currentRegularMenu);
    //   }

    // }, [menuRegular]);


    // const handleClickCatRegular = (regular) => {
    //   let consent = {
    //     cat: regular
    //   };
    //   localStorage.setItem('Cat', JSON.stringify(consent));
    //   //setMenuRegular(consent);
    // }

    // useEffect(() => {
    //   const currentRegularCat = JSON.parse(localStorage.getItem("Cat"));
    //   if (currentRegularCat) {
    //     setCatRegular(currentRegularCat);
    //   }

    // }, [catRegular]);


    // const handleClickrowfeatured = (featured) => {
    //   let consent = {
    //     featured: featured,
    //     isLoaded: true
    //   };
    //   localStorage.setItem('themesfeatured', JSON.stringify(consent));
    //   //setFeaturedTheme(consent);
    // }


    return (
      <MenuStyled>
        <div className="h-full bg-white">
          <div
            className="h-full flex flex-col w-full"
            style={{ overflow: "auto", paddingBottom: "80px" }}
          >

            <div className="Sivaaaa"
                 style={{ width: isMobileState ? "340px" : "1000px" }}
            >
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  height: "100%",
                  justifyContent: "space-between",
                  backgroundColor: "white"
                }}
              >

                <div>


                  <div style={{ height: "700px", overFlow: "auto" }}

                  >

                    <div className="palette-card p-5">
                      {/* <p className="maincss">Color Sets (Recommeded)</p>
  
                      <div className="palette-card_colors">
                        <div className="singlebanner" id='theme-pink' onClick={() => handleClick('theme-pink')}>Set 1</div>
                        <div className='singlebanner' id='theme-gray' onClick={() => handleClick('theme-gray')}>Set 2</div>
                        <div className="singlebanner" id='theme-green' onClick={() => handleClick('theme-green')}>Set 3</div>
                        <div className='doublebanner' id='theme-blue' onClick={() => handleClick('theme-blue')}>Set 4</div>
                      </div>
                      <p className="maincss">Custom Colors</p>
                      <div className="palette-card_colors">
                        <div style={{ background: "rgb(251, 86, 7)" }} id='theme-orange' onClick={() => handleClick('theme-orange')}><span>FB5607</span></div>
                        <div style={{ background: "rgb(255, 190, 11)" }} id='theme-FFBE0B' onClick={() => handleClick('theme-FFBE0B')}><span>FFBE0B</span></div>
                        <div style={{ background: "rgb(6, 214, 160)" }} id='theme-06D6A0' onClick={() => handleClick('theme-06D6A0')}><span>06D6A0</span></div>
                        <div style={{ background: "rgb(17, 138, 178)" }} id='theme-118AB2' onClick={() => handleClick('theme-118AB2')}><span>118AB2</span></div>
                        <div style={{ background: "rgb(7, 59, 76)" }} id='theme-073B4C' onClick={() => handleClick('theme-073B4C')}><span>073B4C</span></div>
                      </div>
                      <div className="palette-card_colors">
                        <div style={{ background: "rgb(88, 81, 35)" }} id='theme-585123' onClick={() => handleClick('theme-585123')}><span>585123</span></div>
                        <div style={{ background: "rgb(238, 193, 112)" }} id='theme-EEC170' onClick={() => handleClick('theme-EEC170')}><span>EEC170</span></div>
                        <div style={{ background: "rgb(242, 166, 90)" }} id='theme-F2A65A' onClick={() => handleClick('theme-F2A65A')}><span>F2A65A</span></div>
                        <div style={{ background: "rgb(245, 133, 73)" }} id='theme-F58549' onClick={() => handleClick('theme-F58549')}><span>F58549</span></div>
                        <div style={{ background: "rgb(119, 47, 26)" }} id='theme-772F1A' onClick={() => handleClick('theme-772F1A')}><span>772F1A</span></div>
                      </div>
                      <div className="palette-card_colors">
                        <div style={{ background: "rgb(216, 140, 154)" }} id='theme-D88C9A' onClick={() => handleClick('theme-D88C9A')}><span>D88C9A</span></div>
                        <div style={{ background: "rgb(242, 208, 169)" }} id='theme-F2D0A9' onClick={() => handleClick('theme-F2D0A9')}><span>F2D0A9</span></div>
                        <div style={{ background: "#AB47BC" }} id='theme-AB47BC' onClick={() => handleClick('theme-AB47BC')}><span>AB47BC</span></div>
                        <div style={{ background: "rgb(153, 193, 185)" }} id='theme-99C1B9' onClick={() => handleClick('theme-99C1B9')}><span>99C1B9</span></div>
                        <div style={{ background: "rgb(142, 125, 190)" }} id='theme-8E7DBE' onClick={() => handleClick('theme-8E7DBE')}><span>8E7DBE</span></div>
                      </div> */}
                      <App
                        allThemes={allThemes}
                        selectedTheme={selectedTheme}
                        setSelectedTheme={setSelectedTheme}
                        theme={theme}
                        themeLoaded={themeLoaded}
                      />

                      {/* <p className="maincss">Header Styles</p>
  
                        <div className="palette-card_colors">
                        <div className="singlebanner" onClick={() => handleClickMenuRegular('regular')}>Header 1</div>
                        <div className='doublebanner' onClick={() => handleClickMenuRegular('nonregular')}>Header 2</div>
                        </div>
  
                        <p className="maincss">Category Styles</p>
  
                        <div className="palette-card_colors">
                        <div className="singlebanner" onClick={() => handleClickCatRegular('regular')}>Category 1</div>
                        <div className='doublebanner' onClick={() => handleClickCatRegular('nonregular')}>Category 2</div>
                        </div> */}
                      {/* <p className="maincss">Banner Wizards</p>
  
            <div className="palette-card_colors">
             <div className="singlebanner" onClick={() => handleClickBanners('one')}>Single Banner</div>
             <div className='doublebanner' onClick={() => handleClickBanners('two')}>Double Banner</div>
            </div>
  
            <p className="maincss">Featured Cards</p>
  
            <div className="palette-card_colors">
             <div className="singlebanner" onClick={() => handleClickrowfeatured('row6')}>Row 6 Ptoducts</div>
             <div className='doublebanner' onClick={() => handleClickrowfeatured('row10')}>Row 10 Ptoducts</div>
            </div> */}

                    </div>


                  </div>

                </div>

              </div>
            </div>
          </div>
        </div>
      </MenuStyled>
    );

  };


  // const fetchQueryData = async (query, sortBy) => {
  //   let storeCid = menuData.childs.find(cat => cat.URL.includes("stores")).cid;
  //
  //   const storesData = await fetch(
  //     categoryUrl({
  //       id: storeCid,
  //       query:
  //         query.length > 0
  //           ? query
  //               .map(q => "&" + q.name.toLowerCase() + "=" + q.value)
  //               .join("")
  //           : "",
  //       sortBy
  //     })
  //   );
  //   let data = await storesData.json();
  //
  //   setStores(data);
  // };
  //
  // useEffect(() => {
  //   if (query.length > 0 || sortBy !== "") {
  //     fetchQueryData(query, sortBy);
  //   }
  // }, [query, sortBy]);
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
      <HomeBanner allThemes={allThemes} create={createTheme} selectedTheme={selectedTheme} />
      <DynamicExternalContentFromCMS
        place="home"
        position="Middle"
        renderedBy="Header"
      />
      <CategoriesListTheme1 allThemes={allThemes} create={createTheme} selectedTheme={selectedTheme} />
      <PopularOffersoftheDay shopby={shopbyData} />

      <EndOfSeason />
      {catRegular.cat === "regular" ? <ShopByType /> : <ShopByTypeNew />}


      <ShopByCollection />

      <RecommendedProducts shopby={shopbyData}/>
      <ListOfBest />
      {/* <Policies /> */}
      

      {/* <img
        src="https://ik.imagekit.io/ofb/themes/Image_1_ZzNfpuWRD.png?ik-sdk-version=javascript-1.4.3&updatedAt=1665052320020" /> */}
        <div className="browseCat-container" style={{ marginTop: "30px" }}>
        {/* <h3 className="browseCat">
          <Translate
            translationFileName={"translation"}
            translateKey={"home.browseByCategories"}
          />
        </h3> */}
        <Collections />
        
        <FeaturedSellers stores={stores} />
       
      </div>



        <div className="brand-authors">
          <div>
            <img src="https://ik.imagekit.io/ofb/themes/Group_570_8tCC5Kv9z.png?ik-sdk-version=javascript-1.4.3&updatedAt=1669881834938"
            className="brand-authors1"/>
          </div>
          <div>
            <img src="https://ik.imagekit.io/ofb/themes/Group_571_W0fPMGAt_.png?ik-sdk-version=javascript-1.4.3&updatedAt=1669881834909"
            className="brand-authors1"/>
          </div>
          <div>
            <img src="https://ik.imagekit.io/ofb/themes/Group_569_vxtK0B6Sg.png?ik-sdk-version=javascript-1.4.3&updatedAt=1669881834772"
            className="brand-authors1"/>
          </div>

        </div>

        {/* <PopularOffersoftheDay shopby={shopbyData} /> */}


      {/* <div className="browseCat-container" style={{ marginTop: "30px" }}>
        <h3 className="browseCat">
          <Translate
            translationFileName={"translation"}
            translateKey={"home.browseByCategories"}
          />
        </h3>
        <Collections />
        
        <FeaturedSellers stores={stores} />
       
      </div> */}

      

      <div
        className="themeSetting"
        onClick={() => setShowThemes(!showThemes)}
      >
        <svg className="MuiSvgIcon-root MuiSvgIcon-fontSizeSmall css-11o4os1" focusable="false" aria-hidden="true"
             viewBox="0 0 24 24" data-testid="CogIcon">
          <path
            d="M12,15.5A3.5,3.5 0 0,1 8.5,12A3.5,3.5 0 0,1 12,8.5A3.5,3.5 0 0,1 15.5,12A3.5,3.5 0 0,1 12,15.5M19.43,12.97C19.47,12.65 19.5,12.33 19.5,12C19.5,11.67 19.47,11.34 19.43,11L21.54,9.37C21.73,9.22 21.78,8.95 21.66,8.73L19.66,5.27C19.54,5.05 19.27,4.96 19.05,5.05L16.56,6.05C16.04,5.66 15.5,5.32 14.87,5.07L14.5,2.42C14.46,2.18 14.25,2 14,2H10C9.75,2 9.54,2.18 9.5,2.42L9.13,5.07C8.5,5.32 7.96,5.66 7.44,6.05L4.95,5.05C4.73,4.96 4.46,5.05 4.34,5.27L2.34,8.73C2.21,8.95 2.27,9.22 2.46,9.37L4.57,11C4.53,11.34 4.5,11.67 4.5,12C4.5,12.33 4.53,12.65 4.57,12.97L2.46,14.63C2.27,14.78 2.21,15.05 2.34,15.27L4.34,18.73C4.46,18.95 4.73,19.03 4.95,18.95L7.44,17.94C7.96,18.34 8.5,18.68 9.13,18.93L9.5,21.58C9.54,21.82 9.75,22 10,22H14C14.25,22 14.46,21.82 14.5,21.58L14.87,18.93C15.5,18.67 16.04,18.34 16.56,17.94L19.05,18.95C19.27,19.03 19.54,18.95 19.66,18.73L21.66,15.27C21.78,15.05 21.73,14.78 21.54,14.63L19.43,12.97Z"></path>
        </svg>
      </div>

      <DynamicDrawer open={showThemes} onClose={() => setShowThemes(false)}>
        <ThemeMenu
          close={() => setShowThemes(false)}
          //setTheme={setTheme}
          //SetMenuRegular={SetMenuRegular}
          //setColorTheme={setColorTheme}
          //setThemeFont={setThemeFont}
        />
      </DynamicDrawer>

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
