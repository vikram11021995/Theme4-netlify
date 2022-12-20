import Link from "next/link";
import Image from "next/image";
import Head from "next/head";
import classes from "./CategoriesListTheme1.module.css";
import { Fade } from "react-awesome-reveal";
// import Image from 'next/image'

const HomeBanner = props => {
  return (
    <>
      <Head>
        <title>B2BN Starter Home Page</title>
        <meta
          name="description"
          content="Placeholder description for the B2B Starter Marketplace Home Page"
        />
      </Head>
      {/* {props.selectedTheme.card === "3 cards per Row" ? 

      <div className={classes.categoryList}>
        <div className={classes.categoryListInner}>
        <Fade direction="left" delay={1e3} cascade damping={0.1} triggerOnce >
          <div className={classes.fond}>
          
         
            <div className={classes.carreaux_presentation_light} style={{ backgroundImage: "url(https://ik.imagekit.io/ofb/themes/Group_51_OqAgPBm2x.png?ik-sdk-version=javascript-1.4.3&updatedAt=1665052316554)", marginRight: "20px" }}>
              <div className={classes.shadow_swhow_mini}>
                <div className={classes.deroul_titre}> 
                <Link
                      href={`/shop/shop1`}
                    >
                      <a style={{color: "#fff"}}>New Arrivals</a></Link></div>
                <div className={classes.deroul_soustitre}><Link
                      href={`/shop/shop1`}
                    >
                      <a style={{color: "#fff"}}>www.wifeo.com/code</a></Link></div>
              </div>
            </div>
            
            <div className={classes.carreaux_presentation_light} style={{ backgroundImage: "url(https://ik.imagekit.io/ofb/themes/Group_51-1_75cXK3vV2.png?ik-sdk-version=javascript-1.4.3&updatedAt=1665052317747)", marginRight: "20px" }}>
              <div className={classes.shadow_swhow_mini}>
                <div className={classes.deroul_titre}><Link
                      href={`/shop/shop1`}
                    >
                      <a style={{color: "#fff"}}>Season Collection</a></Link></div>
                <div className={classes.deroul_soustitre}><Link
                      href={`/shop/shop1`}
                    >
                      <a style={{color: "#fff"}}>www.wifeo.com/code</a></Link></div>
              </div>
            </div>
            <div className={classes.carreaux_presentation_light} style={{ backgroundImage: "url(https://ik.imagekit.io/ofb/themes/Group_51-2_TOAVQ5S9G.png?ik-sdk-version=javascript-1.4.3&updatedAt=1665052318298)" }}>
              <div className={classes.shadow_swhow_mini}>
                <div className={classes.deroul_titre}><Link
                      href={`/shop/shop1`}
                    >
                      <a style={{color: "#fff"}}>Shoes</a></Link></div>
                <div className={classes.deroul_soustitre}><Link
                      href={`/shop/shop1`}
                    >
                      <a style={{color: "#fff"}}>www.wifeo.com/code</a></Link></div>
              </div>
            </div>
          </div>
          </Fade>
        </div>
      </div> : <div className={classes.categoryList1}>
        <div className={classes.categoryListInner1}>
        <Fade direction="left" delay={1e3} cascade damping={0.1} triggerOnce >
          <div className={classes.fond1}>
          
          
            <div className={classes.carreaux_presentation_light1} style={{ backgroundImage: "url(https://ik.imagekit.io/ofb/themes/Group_51_OqAgPBm2x.png?ik-sdk-version=javascript-1.4.3&updatedAt=1665052316554)", marginRight: "20px" }}>
              <div className={classes.shadow_swhow_mini1}>
                <div className={classes.deroul_titre1}><Link
                      href={`/shop/shop1`}
                    >
                      <a style={{color: "#fff"}}>New Arrivals</a></Link></div>
                <div className={classes.deroul_soustitre1}><Link
                      href={`/shop/shop1`}
                    >
                      <a style={{color: "#fff"}}>www.wifeo.com/code</a></Link></div>
              </div>
            </div>
            
            <div className={classes.carreaux_presentation_light1} style={{ backgroundImage: "url(https://ik.imagekit.io/ofb/themes/Group_51-1_75cXK3vV2.png?ik-sdk-version=javascript-1.4.3&updatedAt=1665052317747)", marginRight: "20px" }}>
              <div className={classes.shadow_swhow_mini1}>
                <div className={classes.deroul_titre1}><Link
                      href={`/shop/shop1`}
                    >
                      <a style={{color: "#fff"}}>Season Collection</a></Link></div>
                <div className={classes.deroul_soustitre1}><Link
                      href={`/shop/shop1`}
                    >
                      <a style={{color: "#fff"}}>www.wifeo.com/code</a></Link></div>
              </div>
            </div>
            <div className={classes.carreaux_presentation_light1} style={{ backgroundImage: "url(https://ik.imagekit.io/ofb/themes/Group_51-2_TOAVQ5S9G.png?ik-sdk-version=javascript-1.4.3&updatedAt=1665052318298)", marginRight: "20px" }}>
              <div className={classes.shadow_swhow_mini1}>
                <div className={classes.deroul_titre1}><Link
                      href={`/shop/shop1`}
                    >
                      <a style={{color: "#fff"}}>Shoes</a></Link></div>
                <div className={classes.deroul_soustitre1}><Link
                      href={`/shop/shop1`}
                    >
                      <a style={{color: "#fff"}}>www.wifeo.com/code</a></Link></div>
              </div>
            </div>

            <div className={classes.carreaux_presentation_light1} style={{ backgroundImage: "url(https://cdn.shopify.com/s/files/1/0062/5642/7093/files/demo04_02_1024x.jpg?v=1613771615)" }}>
              <div className={classes.shadow_swhow_mini1}>
                <div className={classes.deroul_titre1}><Link
                      href={`/shop/shop1`}
                    >
                      <a style={{color: "#fff"}}>New In</a></Link></div>
                <div className={classes.deroul_soustitre1}><Link
                      href={`/shop/shop1`}
                    >
                      <a style={{color: "#fff"}}>www.wifeo.com/code</a></Link></div>
              </div>
            </div>
          </div>
          </Fade>
        </div>
      </div> } */}

      {/* <div className="chooseUs">
          <div className="orgProducts">
          <img src="https://ik.imagekit.io/ofb/themes/Group_400_pd9Q9BM1P.png?ik-sdk-version=javascript-1.4.3&updatedAt=1669697124653"/>
          <p className="secure-delivery">Fast & Secure Delivery</p>
        </div>
        <div className="orgProducts">
          <img src="https://ik.imagekit.io/ofb/themes/Group_401_eOPs0wIII.png?ik-sdk-version=javascript-1.4.3&updatedAt=1669697124553"/>
          <p className="organic-products">Organic Products</p>
        </div>
        <div className="orgProducts">
          <img src="https://ik.imagekit.io/ofb/themes/Group_402_jGk1qWDUR1.png?ik-sdk-version=javascript-1.4.3&updatedAt=1669697124653"/>
          <p className="freeShipping">Free Shipping</p>
        </div>
        <div className="orgProducts">
          <img src="https://ik.imagekit.io/ofb/themes/Group_403_CnHA2nC-Ru.png?ik-sdk-version=javascript-1.4.3&updatedAt=1669697124671"/>
          <p className="secure-friendly">Vegan Friendly Formula</p>
        </div>
        <div className="orgProducts">
          <img src="https://ik.imagekit.io/ofb/themes/Group_404_eTc4aYaVo.png?ik-sdk-version=javascript-1.4.3&updatedAt=1669697124593"/>
          <p className="derma-approved">Dermatologically Approved</p>
        </div>
        <div className="orgProducts">
          <img src="https://ik.imagekit.io/ofb/themes/Group_405_EZfz8SK8nl.png?ik-sdk-version=javascript-1.4.3&updatedAt=1669697124567"/>
          <p className="cruelty-free">Cruelty Free</p>
        </div>
      </div> */}

      <h3 className="chooseUss">Why Choose Us</h3>
      {/* <div className="tab1cards">
        <div className="card">
          <img
            src="https://ik.imagekit.io/ofb/themes/Group_400_pd9Q9BM1P.png?ik-sdk-version=javascript-1.4.3&updatedAt=1669697124653"
            alt="safari"
            className="secureDelivery"
          />
          <div>
            <h4 className="fastDeliv">Fast & Secure Delivery</h4>
          </div>
        </div>
        <div className="card">
          <img
            src="https://ik.imagekit.io/ofb/themes/Group_401_eOPs0wIII.png?ik-sdk-version=javascript-1.4.3&updatedAt=1669697124553"
            alt="safari"
            className="secureDelivery"
          />
          <div>
            <h4 className="fastDeliv1">
              Organic
              <br />
              Products
            </h4>
          </div>
        </div>
        <div className="card">
          <img
            src="https://ik.imagekit.io/ofb/themes/Group_402_jGk1qWDUR1.png?ik-sdk-version=javascript-1.4.3&updatedAt=1669697124653"
            alt="safari"
            className="secureDelivery"
          />

          <div>
            <h4 className="fastDeliv2">
              Free <br />
              Shipping
            </h4>
          </div>
        </div>
        <div className="card">
          <img
            src="https://ik.imagekit.io/ofb/themes/Group_403_CnHA2nC-Ru.png?ik-sdk-version=javascript-1.4.3&updatedAt=1669697124671"
            alt="safari"
            className="secureDelivery"
          />
          <div>
            <h4 className="fastDeliv3">Vegan Friendly Formula</h4>
          </div>
        </div>
        <div className="card">
          <img
            src="https://ik.imagekit.io/ofb/themes/Group_404_eTc4aYaVo.png?ik-sdk-version=javascript-1.4.3&updatedAt=1669697124593"
            alt="safari"
            className="secureDelivery"
          />
          <div>
            <h4 className="fastDeliv4">Dermatologically Approved</h4>
          </div>
        </div>
        <div className="card">
          <img
            src="https://ik.imagekit.io/ofb/themes/Group_405_EZfz8SK8nl.png?ik-sdk-version=javascript-1.4.3&updatedAt=1669697124567"
            alt="safari"
            className="secureDelivery"
          />
          <div>
            <h4 className="fastDeliv5">
              Cruelty <br />
              Free
            </h4>
          </div>
        </div>
      </div> */}






      <div className="overflow-x-auto flex justify-center">
      <div className="flex-none py-6 px-3 first:pl-6 last:pr-6">
        <div className="flex flex-col items-center justify-center gap-3">
          <img className="w-18 h-18 rounded-full" src="https://ik.imagekit.io/ofb/themes/Group_400_pd9Q9BM1P.png?ik-sdk-version=javascript-1.4.3&updatedAt=1669697124653"/>
          <strong className="text-slate-900 text-sm font-medium dark:text-slate-200 text-center">Fast & Secure<br/>Delivery</strong>
        </div>
      </div>
      <div className="flex-none py-6 px-3 first:pl-6 last:pr-6">
        <div className="flex flex-col items-center justify-center gap-3">
          <img className="w-18 h-18 rounded-full" src="https://ik.imagekit.io/ofb/themes/Group_401_eOPs0wIII.png?ik-sdk-version=javascript-1.4.3&updatedAt=1669697124553"/>
          <strong className="text-slate-900 text-sm font-medium dark:text-slate-200 text-center">Organic<br/>Products</strong>
        </div>
      </div>
      <div className="flex-none py-6 px-3 first:pl-6 last:pr-6">
        <div className="flex flex-col items-center justify-center gap-3">
          <img className="w-18 h-18 rounded-full" src="https://ik.imagekit.io/ofb/themes/Group_402_jGk1qWDUR1.png?ik-sdk-version=javascript-1.4.3&updatedAt=1669697124653"/>
          <strong className="text-slate-900 text-sm font-medium dark:text-slate-200 text-center">Free<br/>Shipping</strong>
        </div>
      </div>
      <div className="flex-none py-6 px-3 first:pl-6 last:pr-6">
        <div className="flex flex-col items-center justify-center gap-3">
          <img className="w-18 h-18 rounded-full" src="https://ik.imagekit.io/ofb/themes/Group_403_CnHA2nC-Ru.png?ik-sdk-version=javascript-1.4.3&updatedAt=1669697124671"/>
          <strong className="text-slate-900 text-sm font-medium dark:text-slate-200 text-center">Vegan Friendly<br/>Formula</strong>
        </div>
      </div>
      <div className="flex-none py-6 px-3 first:pl-6 last:pr-6">
        <div className="flex flex-col items-center justify-center gap-3">
          <img className="w-18 h-18 rounded-full" src="https://ik.imagekit.io/ofb/themes/Group_404_eTc4aYaVo.png?ik-sdk-version=javascript-1.4.3&updatedAt=1669697124593"/>
          <strong className="text-slate-900 text-sm font-medium dark:text-slate-200 text-center">Dermatologically<br/>Approved</strong>
        </div>
      </div>
      <div className="flex-none py-6 px-3 first:pl-6 last:pr-6">
        <div className="flex flex-col items-center justify-center gap-3">
          <img className="w-18 h-18 rounded-full" src="https://ik.imagekit.io/ofb/themes/Group_405_EZfz8SK8nl.png?ik-sdk-version=javascript-1.4.3&updatedAt=1669697124567"/>
          <strong className="text-slate-900 text-sm font-medium dark:text-slate-200 text-center">Cruelty<br/>Free</strong>
        </div>
      </div>
    </div>
    </>
  );
};

export default HomeBanner;
