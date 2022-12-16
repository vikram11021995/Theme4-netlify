import React, { useState } from "react";
import htmldecoder from "../../utils/htmlDecoder";
import styled from "styled-components";
import PropTypes from "prop-types";
import { useTranslation } from "next-i18next";
import {
  MdOutlineCancel,
  MdClose,
  MdRemove,
  MdKeyboardArrowDown,
  MdKeyboardArrowUp,
  MdStarRate,
  MdStarHalf,
  MdAdd,
  MdStarOutline
} from "react-icons/md";
import { Tabs, Tab, Content } from "./tab";
// import { Tabs, Tab, Content } from "./MobileTab";

import { MdOutlineNavigateNext } from "react-icons/md";
// import {ReviewBar} from "../../components/product/ReviewBar";
import MobileTab from "./itemTabMobile";
import ReviewBar from "./ReviewBar"

const Wrapper = styled.div`
  .product-details-specs-container {
    margin-bottom: 20px;
  }
  .descr {
    border-bottom: 1px solid #cdcdcd;
  }
  .descr h2 {
    display: flex;
    align-items: center;
    justify-content: space-between;
    font-size: 17px;
    padding: 10px 0px;
    letter-spacing: 0px;
    color: #212b36;
    opacity: 1;
    font-weight: 600;
    cursor: pointer;
  }

  .product-details-specs-container h3 {
    padding-bottom: 12px;
    margin-top: 50px;
    font-size: 20px;
    border-bottom: 1px solid #cdcd;
  }
  .hidden {
    display: none;
  }
  .title {
    font-size: 14px;
    margin-bottom: 15px;
  }

  p.activeItemTab {
    border-bottom: 2px solid #f50057;
  }
`;

function AboutItem({ description, properties }) {
  const { t } = useTranslation("translation");

  // const [active, setActive] = useState(0);
  // const handleClick = e => {
  //   const index = parseInt(e.target.id, 0);
  //   if (index !== active) {
  //     setActive(index);
  //   }
  // };

  const [currentSection, setCurrentSection] = useState(0);
  const RenderCurrentSection = () => {
    switch (currentSection) {
      case 0:
        return (
          <p
            className="text-[12px] lg:text-[16px] p-3"
            dangerouslySetInnerHTML={{
              __html: description
                ? description
                : "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Asperiores, commodi consequuntur id impedit magni mollitia nostrum optio saepe soluta velit?"
            }}
          ></p>
        );
      case 1:
        return (
          <div>
            {properties ? (
              properties.map((prop, i) => (
                <p key={i} className="text-[12px] lg:text-[16px] ml-3">
                  <span className="font-bold">{prop.propdesc}</span> :{" "}
                  {prop.propvalue}
                </p>
              ))
            ) : (
              <p className="text-[12px] lg:text-[16px]">
                There is no Specifications to show
              </p>
            )}
          </div>
        );
      case 2:
        return (
          <p className="text-[12px] lg:text-[16px]">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. A ad
            assumenda atque cum cupiditate laboriosam nulla odio odit pariatur
            totam!
          </p>
        );
      default:
        return <p>Something went wrong...</p>;
    }
  };
  return (
    <div className="w-full h-full flex my-6">
      <div className="flex flex-col w-full">
        <div className="flex items-center ml-5">
          <p
            tabIndex={"0"}
            onKeyDown={e => {
              if (e.code === "Enter") {
                e.target.click();
              }
            }}
            className={
              currentSection == 0
                ? "text-[#000] lg:text-[20px] md:text-[16px] font-bold mr-10 cursor-pointer itemTab activeItemTab"
                : "text-[#000] lg:text-[20px] md:text-[16px] font-bold mr-10 cursor-pointer itemTab"
            }
            onClick={() => setCurrentSection(0)}
          >
            {t("items.about")}
          </p>
          <p
            tabIndex={"0"}
            onKeyDown={e => {
              if (e.code === "Enter") {
                e.target.click();
              }
            }}
            className={
              currentSection == 1
                ? "text-[#000] lg:text-[20px] md:text-[16px] font-bold mr-10 cursor-pointer itemTab activeItemTab"
                : "text-[#000] lg:text-[20px] md:text-[16px] font-bold mr-10 cursor-pointer itemTab"
            }
            onClick={() => setCurrentSection(1)}
          >
            {t("items.specs")}
          </p>
        </div>
        <div className="my-5 ml-2 leading-loose">
          <RenderCurrentSection />
        </div>
      </div>
    </div>
  );
}

const OtherInfoTab = ({ longDesc, properties, hiddenProps, reviews, description }) => {
  const { t } = useTranslation("translation");
  const [showInfo, setShowInfo] = useState(false);
  const [showInfo1, setShowInfo1] = useState(false);
  const [showInfo2, setShowInfo2] = useState(false);
  const [showInfo3, setShowInfo3] = useState(false);
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const handleChangeIndex = index => {
    setValue(index);
  };

  const [active, setActive] = useState(0);
  const handleClick = e => {
    const index = parseInt(e.target.id, 0);
    if (index !== active) {
      setActive(index);
    }
  };

  return (
    <Wrapper>
      {/* <div
        className="product-details-specs-container"
        style={{ backgroundColor: "white" }}
      >
        <br/><br/>
        <div className="descr">
          <h2 className="" onClick={e => setShowInfo(!showInfo)}>
            Description
            <span
              className="flex cursor-pointer text-main-orange"

            >
              {showInfo ? <MdAdd /> : <MdRemove />}
            </span>
          </h2>
          <div
            className={`w-full mt-0 ${showInfo ? "hidden" : ""
              } border border-gray-300 flex flex-col md:flex-row  items specs md:border-none`}
          >
            <div className="flex flex-col w-full pr-0 md:pr-6">
              <p className="title">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
            </div>
          </div>
        </div>



        <div className="descr">
          <h2 className="" onClick={e => setShowInfo1(!showInfo1)}>
          Shipping
            <span
              className="flex cursor-pointer text-main-orange"

            >
              {showInfo1 ? <MdRemove /> : <MdAdd />}
            </span>
          </h2>
          <div
            className={`w-full mt-0 ${showInfo1 ? "" : "hidden"
              } border border-gray-300 flex flex-col md:flex-row  items specs md:border-none`}
          >
            <div className="flex flex-col w-full pr-0 md:pr-6">
              <p className="title">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
            </div>
          </div>
        </div>

        <div className="descr">
          <h2 className="" onClick={e => setShowInfo2(!showInfo2)}>
          Returns
            <span
              className="flex cursor-pointer text-main-orange"

            >
              {showInfo2 ? <MdRemove /> : <MdAdd />}
            </span>
          </h2>
          <div
            className={`w-full mt-0 ${showInfo2 ? "" : "hidden"
              } border border-gray-300 flex flex-col md:flex-row  items specs md:border-none`}
          >
            <div className="flex flex-col w-full pr-0 md:pr-6">
              <p className="title">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
            </div>
          </div>
        </div>

        <div className="descr">
          <h2 className="" onClick={e => setShowInfo3(!showInfo3)}>
          Customer Reviews
            <span
              className="flex cursor-pointer text-main-orange"

            >
              {showInfo3 ? <MdRemove /> : <MdAdd />}
            </span>
          </h2>
          <div
            className={`w-full mt-0 ${showInfo3 ? "" : "hidden"
              } border border-gray-300 flex flex-col md:flex-row  items specs md:border-none`}
          >
            <div className="flex flex-col w-full pr-0 md:pr-6">
              <p className="title">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
            </div>
          </div>
        </div>

        
      </div> */}

      {/* <AboutItem description={longDesc} properties={properties} /> */}

      
      <div className="tabsparent">
        <div className="item_tabs">
          <Tabs>
            <Tab onClick={handleClick} active={active === 0} id={0}>
              Description{" "}
              <span>
                <MdOutlineNavigateNext style={{ display: "inline" }} />
              </span>
            </Tab>

            <Tab onClick={handleClick} active={active === 1} id={1}>
              Additional-info
              <span>
                <MdOutlineNavigateNext style={{ display: "inline" }} />
              </span>
            </Tab>

            <Tab onClick={handleClick} active={active === 2} id={2}>
              Reviews
              <span>
                <MdOutlineNavigateNext style={{ display: "inline" }} />
              </span>
            </Tab>

            <Tab onClick={handleClick} active={active === 3} id={3}>
              Other-Content
              <span>
                <MdOutlineNavigateNext style={{ display: "inline" }} />
              </span>
            </Tab>

            <Tab onClick={handleClick} active={active === 4} id={4}>
              Comments
              <span>
                <MdOutlineNavigateNext style={{ display: "inline" }} />
              </span>
            </Tab>
          </Tabs>
        </div>
        <>
          <div className="item_tabscontents">
            <Content active={active === 0} className="tab_content">
            <p
            className="text-[12px] lg:text-[16px] p-3"
            dangerouslySetInnerHTML={{
              __html: description
                ? description
                : "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Asperiores, commodi consequuntur id impedit magni mollitia nostrum optio saepe soluta velit?"
            }}
          ></p>
            </Content>
            <Content active={active === 1} className="tab_content">
            <div className="leading-loose">
            {properties ? (
              properties.map((prop, i) => (
                <p key={i} className="text-[12px] lg:text-[16px] ml-3">
                  <span>{prop.propdesc}</span> :{" "}
                  {prop.propvalue}
                </p>
              ))
            ) : (
              <p className="text-[12px] lg:text-[16px]">
                There is no Specifications to show
              </p>
            )}
          </div>
              {/* <h1>Content 2</h1> */}
              
              {/* {reviews.length > 0 ? (
          <>
            <button onClick={() => executeScroll(reviewsRef)}>
              Read Reviews
            </button>
            <span className="pipe">|</span>
          </>
        ) : (
          <>
            <span className="noReviews">0 {t("js.item.reviews")}</span>
          </>
        )} */}

            </Content>
            <Content active={active === 2} className="tab_content">
              {/* <ReviewBar/> */}
              <h>No Reviews</h>
              {/* <h2>Write a Review</h2>

              <form>
                <label htmlFor="fname">Name</label>
                <br />
                <input type="text" id="fname" name="fname" value="John" />
                <br />
                <label htmlFor="lname">Email</label>
                <br />
                <input type="text" id="lname" name="lname" value="Doe" />
                <br />
                <label htmlFor="fname">Review Title</label>
                <br />
                <input type="text" id="fname" name="fname" value="John" />
                <br />
                <label htmlFor="fname">Review Body</label>
                <br /> */}

                {/* <div className="wishbtna">
                  <button className="button-wishlists">Submit Review</button>
                </div> */}
              {/* </form> */}
            </Content>
            <Content active={active === 3} className="tab_content">
              <h1>No Content</h1>
            </Content>
            <Content active={active === 4} className="tab_content">
              <h1>No Comments</h1>
            </Content>
          </div>
        </>
      </div>

      <div className="onlymobileTab">
      <MobileTab/>
      </div>


      
    </Wrapper>
  );
};

export default OtherInfoTab;
