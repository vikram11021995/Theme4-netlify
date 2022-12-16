import React, { useState } from "react";
import ReactDOM from "react-dom";
import { Tabs, Tab, Content } from "./MobileTab";
import htmldecoder from "../../utils/htmlDecoder";


function MobileTab({ description, properties }) {
  const [active, setActive] = useState(0);
  const handleClick = e => {
    const index = parseInt(e.target.id, 0);
    if (index !== active) {
      setActive(index);
    }
  };
  return (
    <div>
        <div className="overflow-x-auto">
      <Tabs>
        <Tab onClick={handleClick} active={active === 0} id={0}>
        Description
        </Tab>

        <Tab onClick={handleClick} active={active === 1} id={1}>
        Additional-info
        </Tab>
        <Tab onClick={handleClick} active={active === 1} id={1}>
        Reviews
        </Tab>
        <Tab onClick={handleClick} active={active === 1} id={1}>
        Other-Content
        </Tab>
        {/* <Tab onClick={handleClick} active={active === 1} id={1}>
        Comments
        </Tab> */}
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
              
            </Content>
            <Content active={active === 3} className="tab_content">
              <h1>No Content</h1>
            </Content>
            {/* <Content active={active === 4} className="tab_content">
              <h1>No Comments</h1>
            </Content> */}
          </div>
          
        
      
    </>
    </div>
  );
};

export default MobileTab;
