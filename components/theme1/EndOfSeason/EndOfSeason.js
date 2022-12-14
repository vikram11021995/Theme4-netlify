import Link from "next/link";
import Image from "next/image";
import Head from "next/head";
import classes from "./EndOfSeason.module.css";
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

      {/* <div className={classes.EndOfSeason}>
        <div className={classes.EndOfSeasonInner}>
          <div className={classes.EndOfSeasonBanner}>
          <Fade direction="right" delay={1e3} cascade damping={0.1} triggerOnce >
            <h1>End of Season upto to 70% off</h1>
            <h6>Be the first to shop the drop</h6>
            <button><Link
                      href={`/shop/shop1`}
                    >
                      <a >Shop Now</a></Link></button>
            </Fade>
          </div>
        </div>
      </div> */}
      <div className="skinCareTip11">
        <h3 className="skinCareTip">Skin and Hair Care Tips</h3>
        <p className="skinCareDescription">Lorem ipsum dolor sit amet, consectetur adipiscing elit</p>
      </div>

    <div className="healthCareMain">
      <div className="healthCareTips">
        <div className="skinimgtips">
        <img
                    src={`https://ik.imagekit.io/ofb/themes/Group_398_SHNf_6O7i.png?ik-sdk-version=javascript-1.4.3&updatedAt=1669856474318`}
                    // alt={desc}
                    className="skinCareImage"
                  />
        </div>

        <div className="health-descrip">
          <p className="healthTipsdetaildolor">Lorem ipsum dolor</p>
          <p className="healthTipsdetailsx">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.<br/><br/> 
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>

          <button className="readMorebtn readMorebtn1">Read More</button>
        </div>
      </div>
    </div>

{/* <div> */}





{/* <div>
<article className="article group">
  <img className="imageLeft right" src={`https://ik.imagekit.io/ofb/themes/Group_398_SHNf_6O7i.png?ik-sdk-version=javascript-1.4.3&updatedAt=1669856474318`} alt="Image"/>
  <section className="content">
    <h2 className="headline">Lorem ipsum dolor</h2>
    <p style={{color: "#1A2841"}}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.<br/><br/> 
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>

          <button className="button">Read More</button>
    </section>

    
  </article>
  </div> */}



  
{/* </div> */}
{/* </div> */}






          {/* <div className="customersProfit">
              <div>
              <img
                    src={`https://ik.imagekit.io/ofb/themes/Group_398_SHNf_6O7i.png?ik-sdk-version=javascript-1.4.3&updatedAt=1669856474318`}
                    // alt={desc}
                    className="skinCareImage"
                  />
              </div>
              <div className="sellerBenefitMobile">
              <p>Lorem ipsum dolor</p>
          <p className="healthTipsdetailsx">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.<br/><br/> 
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>

          <button className="readMorebtn readMorebtn1">Read More</button>
              </div>
            </div> */}



    </>
  );
};

export default HomeBanner;
