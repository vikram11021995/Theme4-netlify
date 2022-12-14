import { useSelector, shallowEqual, useDispatch } from "react-redux";
import React, { useState } from "react";
import Link from "next/link";
import { MdKeyboardArrowRight } from "react-icons/md";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { Fade } from "react-awesome-reveal";
import PopularOffersoftheDayCard from "../components/PopularOffersoftheDayCard";
// import PopularOffersoftheDayCard from "../"
import Grid from "./AC-UI-Elements/Grid/Grid";

import { toggleWishListAction } from "../redux/actions/wishlistActions";
import { Tabs, Tab, Content } from "../components/categoryTab"

function PopularOffersoftheDay({ shopby }) {
  const [active, setActive] = useState(0);
  const handleClick = e => {
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

            {/* <div className="content-wrapperm content-skincare"> */}


              {/* <ul className="skincare-makeup nav nav-tabs" role="tablist">
                <li className="beauty-products nav-item">
                  <a
                    target="_blank"
                    className="tab nav-link active"
                    data-toggle="tab"
                    href="#menu1"
                  >
                    Skincare
                  </a>
                </li>
                <li className="beauty-products nav-item">
                  <a
                    target="_blank"
                    className="tab"
                    data-toggle="tab"
                    href="#menu2"
                  >
                    Makeup
                  </a>
                </li>
                <li className="beauty-products nav-item">
                  <a
                    data-toggle="tab"
                    href="#menu3"
                    target="_blank"
                    className="tab"
                  >
                    Hair Care
                  </a>
                </li>
                <li className="beauty-products nav-item">
                  <a
                    data-toggle="tab"
                    href="#menu4"
                    target="_blank"
                    className="tab"
                  >
                    Bath & Body
                  </a>
                </li>
                <li className="beauty-products nav-item">
                  <a
                    data-toggle="tab"
                    href="#menu5"
                    target="_blank"
                    className="tab"
                  >
                    Fragrance
                  </a>
                </li>
                <li className="beauty-products nav-item">
                  <a data-toggle="tab" href="#menu6" target="_blank">
                    Lorem Ipsum
                  </a>
                </li>
                <li className="beauty-products nav-item">
                  <a data-toggle="tab" href="#menu7" target="_blank">
                    Lorem Ipsum
                  </a>
                </li>
                <li className="beauty-products nav-item">
                  <a data-toggle="tab" href="#menu8" target="_blank">
                    Lorem Ipsum
                  </a>
                </li>
              </ul> */}

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
              {/* {console.log("fff", shopby?.[1]?.items?.[1]?.Object.keys(properties).Skin_type)} */}
              {/* {console.log("vvvvvv", shopby?.[1]?.items?.title)} */}

{/* {console.log("xxxxrrrayyy", shopby?.[1]?.items?.title)} */}
              {shopby &&
                shopby?.[1]?.items?.map(item => (
                  
                  <div key={item.id} className="owl-item popularProducts">
                    
                    <PopularOffersoftheDayCard key={item.id} itemCard={item} />
                  </div>
                ))}

                {/* {shopby &&
                shopby?.[1]?.items?.filter((cval) => cval.title = 'Face Serum').map(item => (
                  
                  <div key={item.id} className="owl-item popularProducts">
                    
                    <PopularOffersoftheDayCard key={item.id} itemCard={item} />
                  </div>
                ))} */}
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
                shopby?.[1]?.items?.filter((cvall) => cvall.title = 'Hydration Cream').map(item => (
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
                shopby?.[1]?.items?.filter((cvals) => cvals.title = 'Cucumber Shampoo').map(item => (
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
                shopby?.[1]?.items?.filter((cvalt) => cvalt.title = 'BB Cream').map(item => (
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
                shopby?.[1]?.items?.filter((cvalf) => cvalf.title = 'Fresh Aroma Spray').map(item => (
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

            {/* </div> */}

            {/* <button><Link href={`/shop/shop-by/`}><a>View More <MdKeyboardArrowRight /></a></Link></button> */}
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



        {/* <div className="w-full image-wrapper popularImage">
              <img
                    src={`https://ik.imagekit.io/ofb/starter/store/20180522154/assets/items/largeimages/${code}.jpg`}
                    alt={desc}
                  />
                  
              </div>
              
              <p className="popularDesc">{storeProps.Brand}</p>
              <p className="font-semibold text-center popularTitle">{title}</p>

              <span className="card__status">
                    {currency_sign} {price.value.integer}.
                    {price.value.decimal}
                  </span> */}
      </div>
    </div>
  );
}

export default PopularOffersoftheDay;
