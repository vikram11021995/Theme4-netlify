import { useState, useEffect, useMemo } from "react";
import { useSelector, shallowEqual, useDispatch } from "react-redux";
import {
  getDeliveryOptions,
  setAddToCartValidationErrors
} from "../../redux/actions/productActions";
import { toggleLocationBoxAction } from "../../redux/actions/handlersAction";
import styled from "styled-components";
import { MdOutlineShoppingCart } from "react-icons/md";
import WishListBar from "./WishListBar";
import LinearLoading from "../elements/LinearLoading/LinearLoading";
import { useTranslation } from "next-i18next";
import { MdChat } from "react-icons/md";
import { setAuthModal } from "../../redux/actions/app";
import {
  GET_CHAT,
  GET_RECEIVER_ID,
  GET_THE_CURRENT_USER
} from "../Chat/queries";

import { INIT_CHAT } from "../Chat/mutations";
import { showChatPopup } from "../../redux/actions/chatActions";
import { useMutation, useQuery } from "@apollo/client";

const AddToCart = ({
  calculatedPriceAndFoundDist,
  productUnavailable,
  priceInv,
  storeInfo,
  numberOfItems,
  productDetailsData
}) => {
  const dispatch = useDispatch();

  const { t } = useTranslation("translation");
  const login = useSelector(state => state.loginReducer, shallowEqual);

  const [inStock, setInStock] = useState(true);
  const [inStockQty, setInStockQty] = useState("");
  const [price, setPrice] = useState(0);
  const [priceTiersState, setPriceTiersState] = useState({
    brackets: null,
    selectedPriceTierIndex: 0
  });
  const currencyState = useSelector(
    state => state.mainReducer.currency,
    shallowEqual
  );
  const langState = useSelector(state => state.mainReducer.lang, shallowEqual);

  console.log("PRODUCT UNAV ", productUnavailable);

  const mainItemIdState = useSelector(
    state => state.productReducer.itemDetail.mainitemid,
    shallowEqual
  );
  const itemIdState = useSelector(
    state => state.productReducer.itemDetail.itemid,
    shallowEqual
  );

  const supplierInfoState = useSelector(
    state => state.productReducer.supplierInfo,
    shallowEqual
  );

  const priceState = useSelector(
    state => state.productReducer.priceInventory,
    shallowEqual
  );

  useEffect(() => {
    if (priceState?.prices?.[0]) {
      const price = priceState.prices[0];
      const brackets = Array.from([1, 2, 3, 4]).reduce((a, c) => {
        const bracket = {
          quantity: price[`qty_${c}`],
          price: price[`price_${c}`]
        };
        if (bracket.price) a.push(bracket);

        return a;
      }, []);

      if (priceTiersState.brackets === null) {
        setPriceTiersState({
          brackets: brackets,
          selectedPriceTierIndex: 0
        });
      }
    }
  }, [priceState]);

  const distIdStateAndPrice = useMemo(() => {
    if (
      supplierInfoState?.[0]?.distributorOrder?.[0]?.distid &&
      priceState?.prices?.[0]?.price_1
    ) {
      const firstDistId = supplierInfoState[0].distributorOrder[0].distid;
      const price = priceState.prices.find(
        inv => inv.distributorId == firstDistId
      );

      return { distId: firstDistId, price };
    }

    return { distId: null, price: null };
  }, [supplierInfoState, priceState]);

  console.log("distIdStateAndPrice", distIdStateAndPrice);

  const checkBoxItemSelected = useSelector(
    state => state.productReducer.checkboxItemSelected,
    shallowEqual
  );

  const isProductDetailsLoading = useSelector(
    state => state.productReducer.loading,
    shallowEqual
  );

  const handleOnInputBlur = e => {
    const value = e.target.value;
    console.info("value2", value);

    if (value === "") setNumberOfItems(1);
  };

  const checkBoxItemsState = useSelector(
    state => state.productReducer.checkboxItems,
    shallowEqual
  );

  const selectedCheckBoxItemsState = useSelector(
    state => state.productReducer.selectedCheckboxItems,
    shallowEqual
  );

  const productAttributeCheckboxFlagState = useSelector(
    state => state.productReducer.productAttributeCheckboxFlag,
    shallowEqual
  );

  const checkBoxItem = useSelector(
    state => state.productReducer.accessoryModal,
    shallowEqual
  );

  const selectedProductAttributesState = useSelector(
    state => state.productReducer.selectedProductAttributes,
    shallowEqual
  );

  const attributeDetailsState = useSelector(
    state => state.productReducer.itemDetail.attributeDetails,
    shallowEqual
  );

  const userLocationState = useSelector(
    state => state.userLocationReducer,
    shallowEqual
  );

  const requestingAddToCartState = useSelector(
    state => state.productReducer.requestingAddToCart,
    shallowEqual
  );

  const securityTokenState = useSelector(
    state => state.loginReducer.securityToken,
    shallowEqual
  );

  const authModalState = useSelector(
    state => state.appReducer.authModal,
    shallowEqual
  );

  const loginNameState = useSelector(
    state => state.loginReducer.loginName,
    shallowEqual
  );

  const handleCheckUserlocationState = () => {
    dispatch(toggleLocationBoxAction(true));
  };

  const calculatePrice = () => {
    if (priceTiersState.brackets && priceTiersState.brackets.length > 0) {
      const selectedBracket =
        priceTiersState.brackets[priceTiersState.selectedPriceTierIndex];
      return selectedBracket.price * numberOfItems;
    } else {
      return price * numberOfItems;
    }
  };

  const handleAddToCart = () => {
    /*   if (!userLocationState.lat && !userLocationState.lng) {
            handleCheckUserlocationState();
            return;
        } */

    let attributesObject = null;

    let requiredFields = [];

    if (
      selectedProductAttributesState.hasOwnProperty(
        mainItemIdState || itemIdState
      )
    ) {
      attributesObject =
        selectedProductAttributesState[mainItemIdState || itemIdState];

      let expectedAttributes = attributeDetailsState.reduce((p, c) => {
        const { screenname, attributeid } = c;
        p = [...p, { screenname, attributeid }];
        return p;
      }, []);

      let receivedAttributeIds = Object.keys(attributesObject);

      if (mainItemIdState != 0) {
        expectedAttributes.forEach(attr => {
          if (!receivedAttributeIds.includes(attr.attributeid.toString()))
            requiredFields.push(attr.screenname);
        });
      } else {
        expectedAttributes.forEach(attr => {
          requiredFields.push(attr.screenname);
        });
      }
    } else {
      if (attributeDetailsState && attributeDetailsState.length > 0) {
        let expectedAttributes = attributeDetailsState.reduce((p, c) => {
          const { screenname, attributeid } = c;
          p = [...p, { screenname, attributeid }];
          return p;
        }, []);

        expectedAttributes.forEach(attr => {
          requiredFields.push(attr.screenname);
        });
      }
    }

    dispatch(setAddToCartValidationErrors(requiredFields));

    if (requiredFields.length > 0) {
      return;
    }

    dispatch(
      getDeliveryOptions(
        distIdStateAndPrice.distId,
        distIdStateAndPrice.price.itemcode,
        numberOfItems,
        distIdStateAndPrice.price.itemid,
        attributesObject
      )
    );

    if (checkBoxItemSelected) {
      dispatch(
        getDeliveryOptions(
          // priceState.prices[0].distributorId,
          checkBoxItem.priceInv.prices[0].distributorId,
          //priceState.code,
          checkBoxItem.details.code,
          //numberOfItems,
          1,
          //priceState.itemid,
          checkBoxItem.details.itemid,
          //attributesObject,
          null
        )
      );
    }
  };

  const { data: chatData } = useQuery(GET_CHAT);

  const [initChat] = useMutation(INIT_CHAT, {
    refetchQueries: [
      { query: GET_THE_CURRENT_USER, variables: { email: loginNameState } }
    ]
  });
  const { data: dataReceiverId } = useQuery(GET_RECEIVER_ID, {
    variables: {
      vendorId: storeInfo?.[0]?.distributorOrder?.[0]?.supplier_vid
    }
  });

  const handleEnquire = async event => {
    event.stopPropagation();
    if (securityTokenState) {
      // check if user is already in the system
      // if user exists
      // TODO: check if there is an existing chat between user-supplier
      if (
        dataReceiverId?.users?.[0]?.id &&
        !chatData?.chat?.some(chat =>
          chat?.chat_users?.some(
            user => user?.user?.id === dataReceiverId?.users?.[0]?.id
          )
        )
      ) {
        initChat({
          variables: {
            userName: login.loginName,
            email: login.loginName,
            firstName: login.firstName,
            lastName: login.lastName,
            reciever_id: dataReceiverId?.users?.[0]?.id
          }
        });
      }
      dispatch(showChatPopup(storeInfo?.vendorId));
    } else dispatch(setAuthModal(!authModalState));
  };

  return (
    <Wrapper>
      <div
        className="flex flex-wrap"
        style={{ alignItems: "flex-start", justifyContent: "space-between" }}
      >
        {/*{productUnavailable === false ? (*/}

        {/* <button className="chatSellerButton" onClick={handleEnquire}>
          <div className="chatIcon">
            <MdChat />
          </div>
          <span>CHAT WITH SELLER</span>
        </button> */}
        {/*) */}
        {/*: (*/}
        {/*    <p style={{ margin: "20px 0" }}>*/}
        {/*        SORRY, THIS PRODUCT IS CURRENTLY UNAVAILABLE*/}
        {/*    </p>*/}
        {/*)}*/}

        <div
          style={{
            display:
              productAttributeCheckboxFlagState ||
              (checkBoxItemsState && checkBoxItemsState.length > 0)
                ? "none"
                : ""
          }}
        >
          <div>
            <div className="qtyControlsBox">
              <p
                style={{
                  fontSize: "14px",
                  marginBottom: "10px",
                  marginTop: "auto",
                  marginBottom: "auto",
                  paddingRight: "24%"
                }}
              >
                Quantity<span className="qtyPoints">:</span>
              </p>
              <div className="qtyControlsBtns">
                <div
                  className="qtyControlsMinus no-select"
                  style={{ cursor: "pointer" }}
                >
                  <span>-</span>
                </div>
                <input
                  size={String(numberOfItems).length || 1}
                  aria-label="change quantity"
                  className="qtyControlsInput"
                  type="text"
                  value={numberOfItems}
                  onChange={e => {
                    handleSetQuantityInput(e);
                  }}
                  onBlur={handleOnInputBlur}
                />
                <div
                  className="qtyControlsPlus no-select"
                  onClick={() => setNumberOfItems(numberOfItems + 1)}
                  style={{ cursor: "pointer" }}
                >
                  <span>+</span>
                </div>
              </div>
              <div className="clearfix"></div>
            </div>
          </div>
          {/* <div id="buyBoxPrice">
                                {isProductDetailsLoading ? (
                                    <h1>loading</h1>
                                ) : (
                                    <span className="discountPrice">
                                        ${calculatePrice()}
                                        
                                    </span>
                                )}
                            </div> */}

          {/* <WishListBar product={productDetailsData} /> */}
        </div>

        {/* <div className="cartButtonitem">
<div className="wishbtn"><button className="button-wishlists">Add to Wishlist</button></div>
        <div
          tabIndex={"0"}
          onKeyDown={e => {
            if (e.code === "Enter") {
              e.target.click();
            }
          }}
          className="focusAble addToCartBtn mb-5"
          title="Add to cart"
          onClick={() => handleAddToCart()}
        >
          <span>Add to Cart</span>
        </div>
        {requestingAddToCartState ? <LinearLoading /> : null}
        </div> */}

        {/* <div
          tabIndex={"0"}
          onKeyDown={e => {
            if (e.code === "Enter") {
              e.target.click();
            }
          }}
          className="focusAble addToCartBtn mb-5"
          title="Add to cart"
          onClick={() => handleAddToCart()}
        >
          <span>Add to Shopping Bag</span>
        </div>
        {requestingAddToCartState ? <LinearLoading /> : null} */}

        {/*         <div
                id="buyBoxQuoteBtn"
                className={`add-to-order${inStock ? "" : " active"}`}
              >
                <div
                  className="addToCartBtn"
                  title="Add to Order"
                  onClick={() => handleAddToCart(true)}
                >
                  <div>
                    <span>Add to Order</span>
                  </div>
                  <div>
                    <i className="material-icons add-icon">description</i>
                  </div>
                </div>
              </div> */}
        {/* <div id="buyBoxEnquiryBtn">
                <div
                  id="enquiry-204"
                  className="addToCartBtn sendEnquiryBtn"
                  title={translate("js.item.enquiry")}
                  onClick={handleEnquiryModalOpenClicked}
                >
                  <div>{translate("js.item.enquiry")}</div>
                  <div>
                    <span>
                      <i className="material-icons add-icon">mail_outline</i>
                    </span>
                  </div>
                </div>
              </div> */}

        {/* {isMobileState && (
                <WishListBarMobile
                  data={props.data}
                  productUnavailable={props.productUnavailable}
                  price={price}
                />
              )} */}

        {!inStock && (
          <>
            <div className="add-to-cart-stock-status">
              The supplier may still be in progress updating the inventory for
              this product. Click the Chat button below to chat with the
              supplier to confirm availability.
            </div>
            {/* <NotifyOnReStock
                      supplier={{
                        stock: priceState.invs[0].instock,
                        code: priceState.code,
                        itemid: priceState.itemid
                      }}
                      renderedInsideAddToCartBox={true}
                    /> */}
          </>
        )}
      </div>

      <div className="cartButtonitem">
        {/* <div className="wishbtn"><button className="button-wishlists">Add to Wishlist</button></div> */}
        <div className="wishlistTopGap">
          <WishListBar product={productDetailsData} />
        </div>
        <div
          tabIndex={"0"}
          onKeyDown={e => {
            if (e.code === "Enter") {
              e.target.click();
            }
          }}
          className="focusAble addToCartBtn mb-5"
          title="Add to cart"
          onClick={() => handleAddToCart()}
        >
          <span>Add to Cart</span>
        </div>

        {/* </div> */}
        {requestingAddToCartState ? <LinearLoading /> : null}
      </div>
      {/* <ChatTheSeller storeSellerData={props.storeInfo.storeSellerData} /> */}
    </Wrapper>
  );
};

const Wrapper = styled.div`
  .addToCardBoxWrapper {
    display: flex;
    align-items: center;
    justify-content: center;
    margin-top: 30px;
  }

  @media only screen and (min-width: 320px) and (max-width: 767px) {
    .addToCartBtn {
      width: 100% !important;
    }
  }

  #buyBoxAddToCartBtn {
    display: flex;
  }

  #buyBoxPrice {
    color: #2e2d3f !important;
    font-size: 1.8em;
    line-height: 56px;
    //float: right;
  }

  .add-to-cart-box--per-unit-text {
    font-size: 24px;
    font-weight: bold;
    width: 100%;
    text-align: left;
  }

  .qtyControlsBox {
    /* border: 3px solid #000000; */
    margin: 0px;
    margin-bottom: 10px;
    margin-top: 0px;
    display: inline-flex;
    justify-content: space-between;
    // flex-direction: column;
  }

  .qtyControlsBtns {
    /* float: right; */
    display: flex;
    align-items: center;
    justify-content: space-between;
  }

  .qtyControlsBtns span {
    font-weight: bold;
    text-align: center;
    display: block;
    width: 100%;
    padding: 5px;
  }

  .qtyControlsMinus {
    line-height: 1.42857143;
    background: #ffffff 0% 0% no-repeat padding-box;
    border: 0.5px solid #707070;
    opacity: 1;
    height: 100%;
    display: flex;
    align-items: center;
    width: 53px;
    height: 37px;
  }

  .qtyControlsPlus {
    background: var(--unnamed-color-ffffff) 0% 0% no-repeat padding-box;
    background: #ffffff 0% 0% no-repeat padding-box;
    border: 0.5px solid #707070;
    // border-radius: 0px 40px 40px 0px;
    opacity: 1;
    line-height: 1.42857143;
    height: 100%;
    display: flex;
    align-items: center;
    width: 53px;
    height: 37px;
  }

  .qtyControlsInput {
    margin: 0px !important;
    font-weight: 500 !important;
    font-size: 15px !important;
    height: 37px !important;
    text-align: center !important;
    float: left !important;
    box-sizing: border-box !important;
    width: auto !important;
    padding: 0 14px !important;
    background: #ffffff 0% 0% no-repeat padding-box;
    border: 0.5px solid #707070;
    opacity: 1;
    border-left: 0px;
    border-right: 0px;
    text-align: center;
    letter-spacing: 0px;
    color: #212b36;
    opacity: 1;
    width: 100px !important;
  }

  .addToCartBtn {
    font-size: 15px;
    text-align: center;
    padding: 10px 20px;
    cursor: pointer;
    text-transform: capitalize;
    font-weight: normal;
    // min-width: 180px;
    min-width: 187px;
    border-radius: 5px;
    // background: #ffffff 0% 0% no-repeat padding-box;
    box-shadow: 0px 3px 1px #00000029;
    // border-radius: 40px;
    opacity: 1;
    // color: #232323;
    width: 75%;
    width: 36%;
    margin-top: 18px;
    background: #ff7d7d;
    color: #fff;
    // margin-left: 4%;
    margin-right: auto;
  }

  @media only screen and (min-width: 431px) {
    .addToCartBtn {
      margin-left: 4%;
    }
  }

`;

export default AddToCart;
