import { useSelector, shallowEqual, useDispatch } from "react-redux";
import React, { useState } from "react";
import Link from "next/link";
import { MdKeyboardArrowRight } from "react-icons/md";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { Fade } from "react-awesome-reveal";
import PopularOffersoftheDayCard from "../components/PopularOffersoftheDayCardHome";
// import PopularOffersoftheDayCard from "../"
import Grid from "./AC-UI-Elements/Grid/Grid";

import { toggleWishListAction } from "../redux/actions/wishlistActions";
import { Tabs, Tab, Content } from "../components/categoryTab"
import styled from "styled-components";


const ChangeIconColorOnce = styled.div`
  // height: 10rem;
  border: 1px solid black;
  margin: 2rem;
  display: flex;
  justify-content: center;
  align-items: center;
`;

function PopularOffersoftheDay({ shopby }) {
  const [active, setActive] = useState(0);
  // const [buttonStatus, setButtonStatus] = useState('');
  // const [buttonStatus, setButtonStatus] = useState("login");
  const [iconOneColor, setIconOneColor] = useState("1px solid #1A2841");
  const [iconTwoColor, setIconTwoColor] = useState("1px solid #1A2841");
  const [iconThreeColor, setIconThreeColor] = useState("1px solid #1A2841");
  const [iconFourColor, setIconFourColor] = useState("1px solid #1A2841");
  const [iconFiveColor, setIconFiveColor] = useState("1px solid #1A2841");


  const handleClick = e => {
    setIconOneColor("4px solid #F27665");
    // setIconOneColor("1px solid #F27665");
    // setIconTwoColor("3px solid #F27665");
    // setIconThreeColor("3px solid #F27665");
    // setIconFourColor("3px solid #F27665");
    // setIconFiveColor("3px solid #F27665");

    const index = parseInt(e.target.id, 0);
    if (index !== active) {
      setActive(index);
    }

  };

  const handleClick1 = e => {
    setIconTwoColor("4px solid #F27665");
    
    const index = parseInt(e.target.id, 0);
    if (index !== active) {
      setActive(index);
    }

  };

  const handleClick2 = e => {
    setIconThreeColor("4px solid #F27665");
    const index = parseInt(e.target.id, 0);
    if (index !== active) {
      setActive(index);
    }

  };

  const handleClick3 = e => {
    setIconFourColor("4px solid #F27665");

    const index = parseInt(e.target.id, 0);
    if (index !== active) {
      setActive(index);
    }

  };

  const handleClick4 = e => {
    setIconFiveColor("4px solid #F27665");

    const index = parseInt(e.target.id, 0);
    if (index !== active) {
      setActive(index);
    }

  };

  


  console.log("shopbyshopby", shopby);
  const dispatch = useDispatch();

  const isMobileState = useSelector(
    state => state.mainReducer.isMobile,
    shallowEqual
  );

  const userLocationState = useSelector(
    state => state.userLocationReducer,
    shallowEqual
  );

  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 1600 },
      items: 4
    },
    desktop: {
      breakpoint: { max: 1600, min: 1360 },
      items: 4
    },
    mdDesktop: {
      breakpoint: { max: 1360, min: 1024 },
      items: 4
    },
    tablet: {
      breakpoint: { max: 1024, min: 768 },
      items: 2
    },
    mobile: {
      breakpoint: { max: 768, min: 520 },
      items: 2
    },
    xsMobile: {
      breakpoint: { max: 520, min: 0 },
      items: 2
    }
  };

  const wishListState = useSelector(
    state => state.wishListReducer.wishlist,
    shallowEqual
  );


  // const handleClick = () =>{

  //   if(buttonStatus === ''){
  //     setButtonStatus('active')
  //   }
    
  //   else{
  //     setButtonStatus('')
  //   }
    
  //   }

  const toggleWish = (e, id, title, desc, currency_sign, image, price, url) => {
    e.preventDefault();
    dispatch(
      toggleWishListAction(
        id,
        title,
        desc,
        currency_sign,
        image,
        price,
        url,
        wishListState
      )
    );
  };

  const renderPlaceholderCards = () => {
    return (
      <Carousel
        swipeable={false}
        draggable={true}
        showDots={false}
        responsive={responsive}
        ssr={false} // means to render carousel on server-side.
        infinite={true}
        autoPlay={isMobileState ? false : false}
        autoPlaySpeed={3000}
        keyBoardControl={true}
        transitionDuration={500}
        containerClass="carousel-container"
        // removeArrowOnDeviceType={["mobile", "xsMobile"]}
        // deviceType={this.props.deviceType}
        dotListClass="custom-dot-list-style"
        itemClass="carousel-item-padding-40-px"
      >
        {console.log("arra", Array(4))}
        {Array(4)
          .fill(0, 0, 4)
          .map((v, i) => (
            <Grid key={i} item className="item-card-item" xs={12} md={12}>
              <div
                className="placeholder-item-card-wrapper"
                style={{ boxShadow: "0px 0px 1px 0px #c8c8c8" }}
              >
                <div
                  style={{
                    backgroundColor: "#fff",
                    height: "400px"
                  }}
                ></div>
                <div>
                  <div
                    style={{
                      backgroundColor: "#f5f5f5",
                      height: "40px"
                    }}
                  ></div>
                </div>
              </div>
            </Grid>
          ))}
      </Carousel>
    );
  };
  console.info("wwww", shopby?.[1]?.items);
  return (
    <div className="popularowl">
      <div className="browseCat-container">
        <br />
        <Fade direction="left" delay={1e3} cascade damping={0.1} triggerOnce>
          <div className="mainpopular">
            <h3 className="browseCat">Best Selling Products</h3>
            <p className="bestProducts">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit sed.
            </p>


              

<Tabs>
        <Tab onClick={handleClick} active={active === 0} id={0} style={{ borderBottom: iconOneColor }}>
        Skincare
        </Tab>

        <Tab onClick={handleClick1} active={active === 1} id={1} style={{ borderBottom: iconTwoColor }}>
        Makeup
        </Tab>
        <Tab onClick={handleClick2} active={active === 2} id={2} style={{ borderBottom: iconThreeColor }}>
        Hair Care
        </Tab>
        <Tab onClick={handleClick3} active={active === 3} id={3} style={{ borderBottom: iconFourColor }}>
        Bath & Body
        </Tab>
        <Tab onClick={handleClick4} active={active === 4} id={4} style={{ borderBottom: iconFiveColor }}>
        Fragrance
        </Tab>
      </Tabs>


      














      {/* <div className="overflow-x-auto flex justify-center">
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


      <Tabs>
        <Tab onClick={handleClick} active={active === 0} id={0}>
        Skincare
        </Tab>

        <Tab onClick={handleClick} active={active === 1} id={1}>
        Makeup
        </Tab>
        <Tab onClick={handleClick} active={active === 2} id={2}>
        Hair Care
        </Tab>
        <Tab onClick={handleClick} active={active === 3} id={3}>
        Bath & Body
        </Tab>
        <Tab onClick={handleClick} active={active === 4} id={4}>
        Fragrance
        </Tab>
      </Tabs>
    </div> */}











      <>
      <Content active={active === 0}>
        {console.log("shopby", shopby)}
          {shopby && shopby?.[1]?.items?.length > 0 ? (
            <Carousel
              swipeable={true}
              draggable={true}
              showDots={false}
              responsive={responsive}
              ssr={false} // means to render carousel on server-side.
              infinite={true}
              autoPlay={false}
              autoPlaySpeed={20000}
              keyBoardControl={true}
              transitionDuration={500}
              containerClass="carousel-container"
              // removeArrowOnDeviceType={["mobile", "xsMobile"]}
              // deviceType={this.props.deviceType}
              dotListClass="custom-dot-list-style"
              itemClass="carousel-item-padding-40-px"
            >
{/* {console.log("xxxxrrrayyy", shopby?.[1]?.items?.title)} */}
              {shopby &&
                shopby?.[1]?.items?.map(item => (
                  
                  <div key={item.id} className="owl-item popularProducts">
                    
                    <PopularOffersoftheDayCard key={item.id} itemCard={item} />
                  </div>
                ))}
            </Carousel>
          ) : (
            renderPlaceholderCards()
          )}
        </Content>
        <Content active={active === 1}>
        {console.log("shopby", shopby)}
          {shopby && shopby?.[1]?.items?.length > 0 ? (
            <Carousel
              swipeable={true}
              draggable={true}
              showDots={false}
              responsive={responsive}
              ssr={false} // means to render carousel on server-side.
              infinite={true}
              autoPlay={false}
              autoPlaySpeed={20000}
              keyBoardControl={true}
              transitionDuration={500}
              containerClass="carousel-container"
              // removeArrowOnDeviceType={["mobile", "xsMobile"]}
              // deviceType={this.props.deviceType}
              dotListClass="custom-dot-list-style"
              itemClass="carousel-item-padding-40-px"
            >
              {/* {shopby &&
                shopby?.[1]?.items?.map(item => ( */}
                {shopby &&
                shopby?.[1]?.items?.map(item => (
                  <div key={item.id} className="owl-item popularProducts">
                    <PopularOffersoftheDayCard key={item.id} itemCard={item} />
                  </div>
                ))}
            </Carousel>
          ) : (
            renderPlaceholderCards()
          )}
        </Content>
        <Content active={active === 2}>
        {console.log("shopby", shopby)}
          {shopby && shopby?.[1]?.items?.length > 0 ? (
            <Carousel
              swipeable={true}
              draggable={true}
              showDots={false}
              responsive={responsive}
              ssr={false} // means to render carousel on server-side.
              infinite={true}
              autoPlay={false}
              autoPlaySpeed={20000}
              keyBoardControl={true}
              transitionDuration={500}
              containerClass="carousel-container"
              // removeArrowOnDeviceType={["mobile", "xsMobile"]}
              // deviceType={this.props.deviceType}
              dotListClass="custom-dot-list-style"
              itemClass="carousel-item-padding-40-px"
            >
              {/* {shopby &&
                shopby?.[1]?.items?.map(item => ( */}
                {shopby &&
                shopby?.[1]?.items?.map(item => (
                  <div key={item.id} className="owl-item popularProducts">
                    <PopularOffersoftheDayCard key={item.id} itemCard={item} />
                  </div>
                ))}
            </Carousel>
          ) : (
            renderPlaceholderCards()
          )}
        </Content>
        <Content active={active === 3}>
        {console.log("shopby", shopby)}
          {shopby && shopby?.[1]?.items?.length > 0 ? (
            <Carousel
              swipeable={true}
              draggable={true}
              showDots={false}
              responsive={responsive}
              ssr={false} // means to render carousel on server-side.
              infinite={true}
              autoPlay={false}
              autoPlaySpeed={20000}
              keyBoardControl={true}
              transitionDuration={500}
              containerClass="carousel-container"
              // removeArrowOnDeviceType={["mobile", "xsMobile"]}
              // deviceType={this.props.deviceType}
              dotListClass="custom-dot-list-style"
              itemClass="carousel-item-padding-40-px"
            >
              {/* {shopby &&
                shopby?.[1]?.items?.map(item => ( */}
                {shopby &&
                shopby?.[1]?.items?.map(item => (
                  <div key={item.id} className="owl-item popularProducts">
                    <PopularOffersoftheDayCard key={item.id} itemCard={item} />
                  </div>
                ))}
            </Carousel>
          ) : (
            renderPlaceholderCards()
          )}
        </Content>
        <Content active={active === 4}>
        {console.log("shopby", shopby)}
          {shopby && shopby?.[1]?.items?.length > 0 ? (
            <Carousel
              swipeable={true}
              draggable={true}
              showDots={false}
              responsive={responsive}
              ssr={false} // means to render carousel on server-side.
              infinite={true}
              autoPlay={false}
              autoPlaySpeed={20000}
              keyBoardControl={true}
              transitionDuration={500}
              containerClass="carousel-container"
              // removeArrowOnDeviceType={["mobile", "xsMobile"]}
              // deviceType={this.props.deviceType}
              dotListClass="custom-dot-list-style"
              itemClass="carousel-item-padding-40-px"
            >
              {/* {shopby &&
                shopby?.[1]?.items?.map(item => ( */}
                {shopby &&
                shopby?.[1]?.items?.map(item => (
                  <div key={item.id} className="owl-item popularProducts">
                    <PopularOffersoftheDayCard key={item.id} itemCard={item} />
                  </div>
                ))}
            </Carousel>
          ) : (
            renderPlaceholderCards()
          )}
        </Content>
        
      </>

          </div>


          {/* {console.log("shopby", shopby)}
          {shopby && shopby?.[1]?.items?.length > 0 ? (
            <Carousel
              swipeable={true}
              draggable={true}
              showDots={false}
              responsive={responsive}
              ssr={false} // means to render carousel on server-side.
              infinite={true}
              autoPlay={false}
              autoPlaySpeed={20000}
              keyBoardControl={true}
              transitionDuration={500}
              containerClass="carousel-container"
              // removeArrowOnDeviceType={["mobile", "xsMobile"]}
              // deviceType={this.props.deviceType}
              dotListClass="custom-dot-list-style"
              itemClass="carousel-item-padding-40-px"
            >
              {shopby &&
                shopby?.[1]?.items?.map(item => (
                  <div key={item.id} className="owl-item popularProducts">
                    <PopularOffersoftheDayCard key={item.id} itemCard={item} />
                  </div>
                ))}
            </Carousel>
          ) : (
            renderPlaceholderCards()
          )} */}
        </Fade>
      </div>
    </div>
  );
}

export default PopularOffersoftheDay;
