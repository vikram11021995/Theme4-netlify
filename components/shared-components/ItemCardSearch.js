import React, { useEffect, useState, useRef } from "react";
import Link from "next/link";
import styled from "styled-components";
import HamburgerMenu from "../category/HamburgerMenu";
import { shallowEqual, useSelector, useDispatch } from "react-redux";
import Image from "next/image";
import htmldecoder from "../../utils/htmlDecoder";
import { useTranslation } from "next-i18next";
import translate from "../../utils/Translate";
import dynamic from "next/dynamic";
import Modal from "../elements/Modal/Modal.jsx";
const DynamicModal = dynamic(() => import("../elements/Modal/Modal.jsx"));
//import { setAuthModal } from "../../redux/actions/app";
import { toggleWishListAction } from "../../redux/actions/wishlistActions";
import {
  MdFavoriteBorder,
  MdFavorite,
  MdCompareArrows,
  MdLink,
  MdMoreHoriz
} from "react-icons/md";

const ItemCard = ({
  item,
  setAuthModal,
  authModal,
  hasBorder = true,
  relatedItem = false,
  relatedItemProp
}) => {
  const { t } = useTranslation("currency-formatting");

  const langState = useSelector(state => state.mainReducer.lang, shallowEqual);
  //const [authModal, setAuthModal] = useState(false);
  const currencyState = useSelector(
    state => state.mainReducer.currency,
    shallowEqual
  );

  const authModalState = useSelector(
    state => state.appReducer.authModal,
    shallowEqual
  );

  
  console.log(
    "item3",
    item,
    `${process.env.NEXT_PUBLIC_IMAGEKIT}/${
      item.itemLargeImage || item.cimage
    }?tr=dpr-1,pr-true,w-200,q-70`
  );
  const [price, setPrice] = useState(0);
  const [discountPrice, setDiscountPrice] = useState(0);

  useEffect(() => {
    if (item?.price?.value?.integer) {
      const integer = Number(item.price.value.integer.replace(/[,.]/g, ""));
      const decimal = Number(item.price.value?.decimal);
      const price = integer + decimal / 100;
      setPrice(price);
    } else {
      setPrice(null);
    }
  }, [item]);

  useEffect(() => {
    if (item && item.price) {
      // setDiscountPrice(item.price.value.integer);
    }
  }, [item]);

  const wishListState = useSelector(
    state => state.wishListReducer.wishlist,
    shallowEqual
  );

  const switchImageOnEnter = e => {
    // e.target.style.backgroundImage = `url(${process.env.NEXT_PUBLIC_IMAGEKIT}/store/20180522154/assets/items/largeimages/${item.code}-2.jpg)`;
    
    e.target.style.backgroundImage = `url(${process.env.NEXT_PUBLIC_IMAGEKIT}/store/20180522154/assets/items/largeimages/${item.code}-2.jpg)`;

    e.target.style.backgroundSize = "contain";
    e.target.style.backgroundPosition = "center";
    e.target.style.backgroundRepeat = "no-repeat";
    e.target.style.width = "50%";
    // e.target.style.paddingTop = "20px";
    // e.target.style.margin = "0 auto";
    // e.target.style.overflow = hidden;
    // transition = all 0.3s ease;
    // position = relative;

  };
  const switchImageOnLeave = e => {
    e.target.style.backgroundImage = `url(${process.env.NEXT_PUBLIC_IMAGEKIT}/store/20180522154/assets/items/largeimages/${item.code}.jpg)`;
    e.target.style.backgroundSize = "contain";
    e.target.style.backgroundPosition = "center";
    e.target.style.backgroundRepeat = "no-repeat";
    e.target.style.width = "90%";
    // e.target.style.margin = "0 auto";
  };

  const baseUrl = process.env.NEXT_PUBLIC_PREVIEW_PROJECT_LINK;
  const [isActive, setIsActive] = useState(false);
  const [quantity, setQuantity] = useState(0);

  const dispatch = useDispatch();
  const [moreActive, setMoreActive] = useState(false);

  const ref = useRef();

  useEffect(() => {
    const checkIfClickedOutside = e => {
      // If the menu is open and the clicked target is not within the menu,
      // then close the menu
      if (isActive && ref.current && !ref.current.contains(e.target)) {
        closeShareModal();
      }
    };
    document.addEventListener("mousedown", checkIfClickedOutside);

    return () => {
      // Cleanup the event listener
      document.removeEventListener("mousedown", checkIfClickedOutside);
    };
  }, [isActive]);

  const wishlistState = useSelector(
    state => state.wishListReducer.wishlist,
    shallowEqual
  );

  let isItemWishlisted =
    wishlistState && wishlistState.some(i => i.id == item.id);

  const [favouriteState, setFavouriteState] = useState("favorite_border");

  const toggleWish = (
    id,
    title,
    code,
    desc,
    currency_sign,
    image,
    price,
    allPrices,
    // properties,
    url,
    wishlistState
  ) => {
    // e.preventDefault();
    dispatch(
      toggleWishListAction(
        id,
        title,
        code,
        desc,
        currency_sign,
        image,
        price,
        allPrices,
        // properties,
        url,
        wishlistState
      )
    );
  };

  const handleToggleWishlistIcon = (e, id) => {
    e.stopPropagation();
    let wishId = String(id);
    isItemWishlisted
      ? setFavouriteState("favourite_border")
      : setFavouriteState("favourite");

    toggleWish(
      // wishId,
      item.id,
      item.title,
      item.code,
      item.desc,
      item.currency_sign,
      process.env.NEXT_PUBLIC_IMAGEKIT + "/" + item.image,
      item.price.value.integer,
      item.allPrices,
      // item.properties,
      `/${item.url}`,
      wishlistState,
      false
    );

    closeShareModal();
  };

  const closeShareModal = () => {
    setMoreActive(false);
    setIsActive(false);
  };

  const compareListState = useSelector(
    state => state.compareListReducer.compareList,
    shallowEqual
  );

  let isItemCompared =
    compareListState && compareListState.some(i => i.id == item.id);

  const [compareIconState, setCompareIconState] = useState("");

  const handleToggleCompareListIcon = (event, itemId) => {
    event.stopPropagation();
    let compareid = String(itemId);
    isItemCompared && compareIconState === ""
      ? setCompareIconState("-outlined")
      : setCompareIconState("");

    // if item's compare checkbox is not checked
    if (!isItemCompared) {
      dispatch(fetchComparedItemDetails(compareid));
    } else {
      dispatch(deleteComparedItemsDetails(compareid));
    }

    toggleCompare(
      //event,
      compareid,
      item.title,
      item.currency_sign,
      item.image,
      item.price,
      item.url,
      compareListState,
      isItemCompared,
      dispatch,
      deleteCompareItem,
      toggleCompareAction
      // translate
    );

    closeShareModal();
  };

  const toggleClass = e => {
    e.stopPropagation();
    setIsActive(true);
    // runAfterSomeTime(() => setIsActive(false),100);
  };

  const renderTheBackDrop = () => {
    return (
      isActive && (
        <div
          onClick={event => {
            event.stopPropagation();
            setMoreActive(false);
          }}
          className="backdrop"
        ></div>
      )
    );
  };

  const [isCopied, setIsCopied] = useState(false);

  async function copyTextToClipboard(url) {
    if ("clipboard" in navigator) {
      return await navigator.clipboard.writeText(
        `${baseUrl.replace("/preview", "")}/${url}`
      );
    } else {
      return document.execCommand(
        "copy",
        true,
        `${baseUrl.replace("/preview", "")}/${url}`
      );
    }
  }

  const copyLinkToClipboard = (e, url) => {
    copyTextToClipboard(url)
      .then(() => {
        // If successful, update the isCopied state value
        setIsCopied(true);
        setTimeout(() => {
          setIsCopied(false);
        }, 2500);
      })
      .catch(err => {
        console.log(err);
      });
  };



  // console.log("price33", discountPrice, price, item.price, item.price.value);

  return (
    <>
    <Wrapper>
      <div
        className="item"
        style={{
          //paddingBottom: hasBorder ? "20px" : "0",
          height: relatedItem ? "100% " : "none"
        }}
      >
        <div className="">
          <div className="">
          
          {/* <Link href={`${baseUrl.replace("/preview", "")}/${item.url}`}> */}
          <Link href={`/${item.url}`} prefetch={false} >
            {/* <a tabIndex={"-1"} className="image-link" style={{ backgroundImage: `url(${process.env.NEXT_PUBLIC_IMAGEKIT}/store/20180522154/assets/items/largeimages/${item.code}.jpg)`, backgroundPosition: "center", backgroundSize: "cover", width: "100%" }} onMouseEnter={switchImageOnEnter} onMouseLeave={switchImageOnLeave}> */}
            <a tabIndex={"-1"} className="image-link" style={{ backgroundImage: `url(${process.env.NEXT_PUBLIC_IMAGEKIT}/store/20180522154/assets/items/largeimages/${item.code}.jpg)`, backgroundSize: "contain", width: "100%", backgroundRepeat: "no-repeat" }} onMouseEnter={switchImageOnEnter} onMouseLeave={switchImageOnLeave}>
            {/* background-size: contain;
    width: 100%;
    background-position: center center;
    background-position: center;
    background-repeat: no-repeat; */}

{/* background-image: url(https://ik.imagekit.io/ofb/starter/store/20180522154/assets/items/largeimages/AINHPSRJL2.jpg);
    background-size: contain;
    width: 100%;
    background-repeat: no-repeat;
    background-position-x: center;
    background-position-y: top; */}

{/* background-image: url(https://ik.imagekit.io/ofb/starter/store/20180522154/assets/items/largeimages/AINCDA9EN0.jpg);
    background-size: contain;
    width: 100%;
    background-repeat: no-repeat;
    backgroun-position-x: center;
    background-position-x: center;
    background-position-y: top; */}
             
            </a>
          </Link>
          
          </div>
          <div
          onKeyDown={e => {
            if (e.code === "Enter") {
              e.target.click();
            }
          }}
          tabIndex={isActive ? "0" : "-1"}
          onClick={event => handleToggleWishlistIcon(event, item.id)}
          style={{
            position: "absolute",
            top: "15px",
            right: "15px"
          }}
        >
          {wishListState.filter(w => w.id == item.id).length > 0 ? (
            <img src="https://ik.imagekit.io/ofb/themes/heart__1___1__w2s0eEm63.svg?ik-sdk-version=javascript-1.4.3&updatedAt=1666676255701"  style={{width: "25px", position: "absolute", color: "#fff", cursor: "pointer"}} />
          ) : null}

          {wishlistState.filter(wish => wish.id === item.id).length > 0 ? (
            null
          ) : (
            <img src="https://ik.imagekit.io/ofb/themes/Group_79_AxJIStywbY.svg?ik-sdk-version=javascript-1.4.3&updatedAt=1665052318950" style={{width: "25px", color: "#ff0", cursor: "pointer"}} />
          )}
        </div>
        <div className="carreaux_presentation_light">
          
          <Link href={`/${item.url}`} prefetch={false}>
            <a
              className="item-detail "
              style={{
                paddingTop: relatedItem ? "10px" : "0"
              }}
            >
              <p className="itemFamily">{item.title}</p>
              
              {!relatedItem && (
                <div className="itemPrice">
                  {discountPrice && discountPrice !== price ? (
                    <div className="discounted-price" key="discountedPrice">
                      <span style={{ textDecoration: "line-through" }}>
                        {price
                          ? `${t("currency", {
                              val: price,
                              style: "currency",
                              currency: "EUR"
                            }).replace(/[\,\.]00/, "")}`
                          : null}
                      </span>
                      <span style={{ marginLeft: "10px" }}>
                        ${discountPrice}
                      </span>
                    </div>
                  ) : (
                    <div className="price" key="regularPrice">
                      {t("currency", {
                        val: price,
                        style: "currency",
                        currency: currencyState,
                        locale: langState
                      }).replace(/[\,\.]00/, "")}
                    </div>
                  )}
                </div>
              )}
            </a>
          </Link>  


          <div className="star-rating star-ratingsz star-rating1">
        <input type="radio" id="5-stars" name="rating" value="5" />
        <label htmlFor="5-stars" className="star1">
          &#9733;
        </label>
        <input type="radio" id="4-stars" name="rating" value="4" />
        <label htmlFor="4-stars" className="star1">
          &#9733;
        </label>
        <input type="radio" id="3-stars" name="rating" value="3" />
        <label htmlFor="3-stars" className="star1">
          &#9733;
        </label>
        <input type="radio" id="2-stars" name="rating" value="2" />
        <label htmlFor="2-stars" className="star1">
          &#9733;
        </label>
        <input type="radio" id="1-star" name="rating" value="1" />
        <label htmlFor="1-star" className="star1">
          &#9733;
        </label>
      </div>

      <div className="addToCartProducts addToCartProductss">
        
        <div className="">
          <Link href={`/${item.url}`} prefetch={false} >
          <button className="button-addtocart1 category-btn button-cartsearch">Add to Cart</button>
          </Link>

        </div>
      </div>


      {/* </div> */}





          </div>       
        </div>
        
      </div>
      
      <div>
    {/* <a href={`#${item.id}`}>Open Demo Modal</a> */}
</div>

<div id={item.id} className="modal">
    <div className="modal__content">
    <div className="popup">
            <div className="popup-inner">
              <div className="popup__photo">
              <Link href={`/${item.url}`} prefetch={false} >
            <a tabIndex={"-1"} className="image-link" style={{ backgroundImage: `url(${process.env.NEXT_PUBLIC_IMAGEKIT}/store/20180522154/assets/items/largeimages/${item.code}.jpg)`, height: "460px", backgroundPosition: "center", backgroundSize: "cover", width: "100%" }} onMouseEnter={switchImageOnEnter} onMouseLeave={switchImageOnLeave}>
             
             
            </a>
          </Link>
          
              </div>
              <div className="popup__text">
                <h1>{item.title}</h1>
                <p>{item.desc} {item.desc} {item.desc} {item.desc}</p><br/>
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center"}}>
                <p>Product Code : <b>{item.code}</b></p>
                
                
                <p>Supplier Name : <b>{item.properties.Supplier_Code}</b></p>
                </div>
                {!relatedItem && (
                <div className="itemPrice1">
                  {discountPrice && discountPrice !== price ? (
                    <div className="discounted-price" key="discountedPrice">
                      <span style={{ textDecoration: "line-through" }}>
                        $ {price}
                      </span>
                      <span style={{ marginLeft: "10px" }}>
                        $ {discountPrice}
                      </span>
                    </div>
                  ) : (
                    <div className="price" key="regularPrice">
                      {t("currency", {
                        val: price,
                        style: "currency",
                        currency: currencyState,
                        locale: langState
                      }).replace(/[\,\.]00/, "")}
                    </div>
                  )}
                </div>
              )}

            <div tabindex="0" className="focusAble addToCartBtn mb-5" title="Add to cart"><Link href={`/${item.url}`} prefetch={false} ><span>Add to Shopping Bag</span></Link></div>
              </div>

              <div
          onKeyDown={e => {
            if (e.code === "Enter") {
              e.target.click();
            }
          }}
          tabIndex={isActive ? "0" : "-1"}
          onClick={event => handleToggleWishlistIcon(event, item.id)}
          style={{
            position: "absolute",
            top: "45px",
            right: "45px"
          }}
        >
          {wishListState.filter(w => w.id == item.id).length > 0 ? (
            <img src="https://ik.imagekit.io/ofb/themes/heart__1__WZGtDmHKq.svg?ik-sdk-version=javascript-1.4.3&updatedAt=1666349577318"  style={{width: "25px", position: "absolute", top: "-2px", color: "#fff", cursor: "pointer"}} />
          ) : null}

          {wishlistState.filter(wish => wish.id === item.id).length > 0 ? (
            null
          ) : (
            <img src="https://ik.imagekit.io/ofb/themes/Group_79_AxJIStywbY.svg?ik-sdk-version=javascript-1.4.3&updatedAt=1665052318950" style={{width: "25px", color: "#ff0", cursor: "pointer"}} />
          )}
        </div>

        
              
              <a className="popup__close modal__close" href="#">X</a>
            </div>
          </div>
        {/* <h1>{item.title}</h1>

        <p>
            You can use the :target pseudo-class to create a modals with Zero JavaScript. Enjoy!
        </p>

        <div className="modal__footer">
            Made with <i className="fa fa-heart"></i>, by <a href="https://twitter.com/denicmarko" target="_blank">@denicmarko</a>
        </div>

        <a href="#" className="modal__close">&times;</a> */}
    </div>
</div>
      {/* <button id={item.id} onClick={() => setAuthModal(!authModal)}>Quick View</button>

      <Modal
          renderAlways={true}
          open={authModal}
          onClose={() => setAuthModal(false)}
          id={item.id}
        >
          <div className="popup" id={item.id}>
            <div className="popup-inner">
              <div className="popup__photo">
              <Link href={`/${item.url}`} prefetch={false} >
            <a tabIndex={"-1"} className="image-link" style={{ backgroundImage: `url(${process.env.NEXT_PUBLIC_IMAGEKIT}/store/20180522154/assets/items/largeimages/${item.code}.jpg)`, backgroundPosition: "center", backgroundSize: "cover", width: "100%" }} onMouseEnter={switchImageOnEnter} onMouseLeave={switchImageOnLeave}>
             
             
            </a>
          </Link>
          
              </div>
              <div className="popup__text">
                <h1>{item.title}</h1>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer ex velit, viverra non vulputate vitae, blandit vitae nisl. Nullam fermentum orci et erat viverra bibendum. Aliquam sed varius nibh, vitae mattis purus. Mauris elementum sapien non ullamcorper vulputate. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Sed eget felis sit amet eros viverra pulvinar.</p>
              </div>
              
              <a className="popup__close" onClose={() => setAuthModal(false)}>X</a>
            </div>
          </div>

          
        </Modal> */}
      
    </Wrapper>
    
  </>
  );
};

const Wrapper = styled.section`

  width: 100%;

  .item-detail {
    margin: 10px 10px;
  }

  /* If you like this, be sure to ❤️ it. */
.wrapper {
  height: 100vh;
  /* This part is important for centering the content */
  display: flex;
  align-items: center;
  justify-content: center;
  /* End center */
  background: -webkit-linear-gradient(to right, #834d9b, #d04ed6);
  background: linear-gradient(to right, #834d9b, #d04ed6);
}
.categoryList {
  background: #fff;
  width: 100%;
  height: 100%;
  margin: 40px 0px;
}

.categoryListInner {
  width: 100%;
  margin: 0 auto;
}

.fond {
  display: flex;
}

.carreaux_presentation_light {
  overflow: hidden;
  position: relative;
}

.carreaux_presentation_light .shadow_swhow_mini {
  
  position: absolute;
  z-index: 1;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;

}

.carreaux_presentation_light:hover .shadow_swhow_mini {
  background-color: rgba(16, 23, 41, 0);
}

.carreaux_presentation_light .deroul_titre {
  
  padding: 7px;
  z-index: 1;
  text-align: center;
  letter-spacing: 0px;
  opacity: 1;
  color: #ffffff;
  font-size: 24px;
  width: 100%;
  transition: all 0.7s;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 266px;
  font-weight: 400;
  flex-direction: column;
  line-height: 35px;

}
.carreaux_presentation_light .deroul_titre span{
  font-size: 14px;
}

.carreaux_presentation_light:hover .deroul_titre {
  

}

.carreaux_presentation_light .deroul_soustitre {
  position: absolute;
  padding: 5px;
  z-index: 1;
  top: 10%;
  right: -85%;
  margin-top: 20px;
  color: #ffffff;
  font-weight: 500;
  font-size: 14px;
  width: 100%;
  transition: all 0.7s;
  text-align: center;
  
}
.carreaux_presentation_light .deroul_soustitre span{
  font-size: 14px;
  letter-spacing: 0px;
  color: var(--primary-color);
  background: var(--bg-header) 0% 0% no-repeat padding-box;
  box-shadow: 0px 3px 1px #00000029;
  border-radius: 40px;
  opacity: 1;
  width: 200px;
  height: 45px;
  padding: 10px 40px;
}
.carreaux_presentation_light .deroul_soustitre span:hover{
  background: var(--btn-color) 0% 0% no-repeat padding-box;
  color: var(--second-color);
}
.carreaux_presentation_light:hover .deroul_soustitre {
  right: 0px;
}
 .addToCartBtn {
  font-size: 15px;
  text-align: center;
  padding: 10px 20px;
  cursor: pointer;
  text-transform: capitalize;
  font-weight: normal;
  min-width: 180px;
  border-radius: 3px;
  background: #FFFFFF 0% 0% no-repeat padding-box;
  box-shadow: 0px 3px 1px #00000029;
  border-radius: 40px;
  opacity: 1;
  color: #232323;
  width: 50%;
  margin-top: 30px;
}

.wrapper a {
  display: inline-block;
  text-decoration: none;
  padding: 15px;
  background-color: #fff;
  border-radius: 3px;
  text-transform: uppercase;
  color: #585858;
  font-family: 'Roboto', sans-serif;
}

.modal {
  visibility: hidden;
  opacity: 0;
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  background: rgba(77, 77, 77, .7);
  transition: all .4s;
  z-index:9;
  width:100%
}

.modal:target {
  visibility: visible;
  opacity: 1;
}

.modal__content {
  position: relative;
  width: 850px;
  max-width: 100%;
  background: #fff;
}
@media screen and (max-width: 768px) {
  .modal__content {
    position: relative;
    width: 100% !important;
    max-width: 100%;
    background: #fff;
    padding-top:50%;
    padding-right:5%;
  }
  .addToCartBtn{
    width: 100% !important;
  }
}
.modal__footer {
  text-align: right;
  a {
    color: #585858;
  }
  i {
    color: #d02d2c;
  }
}
.modal__close {
  position: absolute;
  top: 10px;
  right: 10px;
  color: #585858;
  text-decoration: none;
}

  .image-link {
    // height: 400px;
    height: 350px;
    background: #f9f9f9;
    background-position-x: center !important;
    background-position-y: top !important;
    object-fit: contain !important;

    background-image: url(https://ik.imagekit.io/ofb/starter/store/20180522154/assets/items/largeimages/AINCDA9EN0.jpg);
    background-size: cover;
    /* width: 100%; */
    background-repeat: no-repeat;
    // background-position: center center;
    max-width: 100% !important;
    max-height: 100% !important;
    width: 100% !important;
  }

  .image-link:hover {
    // transform: scale(1.1) !important;
}

  .image-link span {
    height: 100% !important;
    width: 100% !important;
  }
  .image-link img {
    // object-fit: cover !important;
    object-fit: contain !important;
    // object-position: top;
  }
  .item {
    position: relative;
  }

 

  img {
    width: 100%;
  }

  a {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    p {
      text-align: center;
    }
  }

  .infinite-scroll-component {
    display: grid;
    grid-template-columns: repeat(5, 1fr);
    grid-gap: 20px;
    -webkit-column-gap: 20px;
    -moz-column-gap: 20px;
    width: 100%;
    margin-top: 30px;
  }

  .itemFamily {
    
    letter-spacing: 0px;
color: #212B36;
opacity: 1;
    // height: 30px;
  }

  .itemBrand {
    font-size: 12px;
    margin-bottom: 0.6rem;
    margin-top: 0.6rem;
    font-style: italic;
    color: rgb(102, 102, 102);
  }
  @media only screen and (max-width: 768px) {
    .popup {
      display: flex;
    align-items: center;
    justify-content: center;
    transition: .64s ease-in-out;
      &-inner {
        flex-direction: column !important;
      }
      .popup__photo{
        width: 100% !important;
      }
      .popup__text{
        width: 100% !important;
      }
      .modal__content{
        width: 100%;
        max-width: 100%;
        background: #fff;
        padding-top: 50%;
        padding-right: 5%;
      }
  }

  .popup {
    display: flex;
  align-items: center;
  justify-content: center;
  transition: .64s ease-in-out;
    &-inner {
      position: relative;
    display: flex;
    align-items: flex-start;
    width: 100%;
    height: 100%;
    background-color: #fff;
    transition: .64s ease-in-out;
    }
    &__photo {
      display: flex;
      justify-content: flex-end;
      align-items: flex-end;
      width: 40%;
      height: 100%;
      overflow: hidden;
      img {
        width: auto;
        height: 100%;
      }
    }
    &__text {
      display: flex;
      flex-direction: column;
      justify-content: center;
      width: 60%;
      height: 100%;
      padding: 10px 2rem;
      h1 {
        font-size: 24px;
        font-weight: 500;
        margin-top: 1.5rem;
        text-transform: capitalize;
        color: #0A0A0A;
        margin-bottom: 1rem;
      }
      p {
        font-size: .875rem;
        color: #686868;
        line-height: 1.5;
      }
    }
    &:target {
      visibility: visible;
      opacity: 1;
      .popup-inner {
        bottom: 0;
        right: 0;
        transform: rotate(0);
      }
    }
    &__close {
      position: absolute;
      right: -1rem;
      top: -1rem;
      width: 3rem;
      height: 3rem;
      font-size: .875rem;
      font-weight: 300;
      border-radius: 100%;
      background-color: #0A0A0A;
      z-index: 4;
      color: #fff;
      line-height: 3rem;
      text-align: center;
      cursor: pointer;
      text-decoration: none;
    }
  }

  .itemTitle {
    display: block;
    font-size: 12px;
    color: rgb(102, 102, 102);
  }

  .itemPrice {
    font-size: 19px !important;
    text-align: left !important;
    font-weight: 600 !important;
    float: left !important;
    margin-top: 0px;
    width: 100% !important;
    justify-content: center;    
    // margin-bottom: 5px;
    display: flex;
    align-items: flex-end;
    letter-spacing: 0px;
    color: var(--btn-hover);
    opacity: 1;
  }
  .itemPrice1 {
    font-size: 19px !important;
    text-align: left !important;
    font-weight: 600 !important;
    float: left !important;
    margin-top: 0px;
    width: 100% !important;  
    margin-bottom: 5px;
    display: flex;
    align-items: flex-end;
    letter-spacing: 0px;
    color: var(--btn-hover);
    opacity: 1;
    margin-top: 20px;
  }

  // .category-btn{
  //     padding: 7px 122px 7px !important;
  // }

  @media only screen and (max-width: 768px) {
    .itemFamily {
      font-size: 17px !important;
    }

    .infinite-scroll-component {
      grid-template-columns: repeat(2, 1fr);

      .item {
        width: 100%;
      }
    }
  }

  

  .category-btn{
    padding: 6px 125px;
  }

@media only screen and (max-width: 430px) {
  .category-btn {
    padding: 6px 143px !important;
  }
}

.button-addtocart11{
    padding: 7px 128px !important;
  }

`;

export default ItemCard;
