import React from "react";
import Link from "next/link";
import { htmlDecode } from "../../utils/htmlDecoder";
import styled from "styled-components";
import ExternalContentFromCMS from "../AC-ExternalContentFromCMS/ExternalContentFromCMS";
import { LINK_DISTRIBUTION } from "../../project-config";
import Head from "next/head";
import {Fade} from "react-awesome-reveal";

const Wrapper = styled.div`
  .sub-nav-wrapper {
    background-image: url("https://ik.imagekit.io/ofb/themes/Group_566_EiinFUMb3Z.png?ik-sdk-version=javascript-1.4.3&updatedAt=1670567308442") !important;
    /* background-size: cover !important; */
    background-position-x: center !important;
    background-position-y: top !important;
    background-repeat: no-repeat !important;
    background-size: cover;
  }

  @media screen and (max-width: 430px) {
    .sub-nav-wrapper {
      background-size: contain;
      height: 98px;
    }
  }

  @media screen and (max-width: 768px) {
    .sub-nav-title-desc-wrapper p{
      width: 100% !important;
    }
  }

  .sub-nav-menu {
    height: 320px;
    justify-content: center;
    align-items: center;
    text-align: left;
    margin: 0 auto;
    color: #000;
    display: inline-flex;
    width: 100%;
    padding: 0px 0 0px 0;
    position: relative;
    flex-direction: row;
  }

  .sub-nav-title-desc-wrapper {
    display: flex;
    width: 90%;
    margin: 0 auto;
  }
  .sub-nav-title-desc-wrapper p{
      width: 50%;
      text-align: left;
      letter-spacing: 0px;
      color: #212B36;
      opacity: 1;
      margin-top: 10px;
  }

  .sub-nav-menu-title {
    margin: 0;
    line-height: initial;
    font-size: 40px;
    text-transform: capitalize;
    letter-spacing: normal;
    padding-left: 0px;
    letter-spacing: 0px;
    color: #212B36;
    opacity: 1;
    font-weight: 500;
  }

  @media only screen and (max-width: 768px) {
    background: url("https://ik.imagekit.io/ofb/themes/Mask_Group_5_qByvx6kru.png?ik-sdk-version=javascript-1.4.3&updatedAt=1665383991372") !important;
  }
`;

const CategoryHeader = ({ data }) => {
  
  return (
    <Wrapper>
      <Fade>
      <div
        className="sub-nav-wrapper"
        style={{
          width: "100%",
          marginBottom: "30px"
        }}
      >
        <Fade direction="left" delay={1e3} cascade damping={0.1} triggerOnce>
        <div className="bred">
          <div><Link href={"/"}><a>Home</a></Link> / {data.description.replace("&amp;", "/")}</div>
        </div>
        </Fade>
        <div className="sub-nav-menu">
          <div className="sub-nav-title-desc-wrapper">
            <div>
            <div className="App">
      
    </div>
              {/* <div>
              <Fade direction="left" delay={1e3} cascade damping={0.2} triggerOnce>
                <h2
                  style={{ backgroundColor: "transparent" }}
                  className="sub-nav-menu-title"
                  dangerouslySetInnerHTML={{
                    __html: htmlDecode(data.description)
                  }}
                />
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna</p>
                </Fade>
              </div> */}
            </div>
          </div>
        </div>
        {/* <CategoryBreadcrumb /> */}
      </div>
      </Fade>
    </Wrapper>
  );
};

export default CategoryHeader;
