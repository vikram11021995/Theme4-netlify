import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { useRouter } from "next/router";
import { MdKeyboardArrowUp, MdKeyboardArrowDown, MdDone } from "react-icons/md";

const Wrapper = styled.div`
  //justify-content: center;
  //margin-top: 100px;
  //margin-left: 50px;
  width: 100%;
    margin: 5px 0px 10px 0px;
    padding: 0px 30px;

  h2 {
    cursor: pointer;
    font-size: 14px;
    border-bottom: 1px solid #e9e9ed;
  letter-spacing: 0px;
  color: #212B36;
  opacity: 1;
  font-weight: 500;
  width: 100%;
  padding-bottom: 2px;
    display: flex;
    align-items: center;
    justify-content: space-between;
  border-left: 3px solid #F27665;
    padding-left: 10px;
    color: #F27665;
  }

  hr {
    margin-bottom: 15px;
    margin-top: 15px;
    border-bottom: 1px solid #e9e9ed;
    width: 100%;
  }

  .delivery-facet {
    border: 1px solid;
    padding: 5px;
    margin: 10px;
    font-size: 14px;
  }

  .clearBtn {
    float: right;
    font-size: 14px;
    color: orange;
    cursor: pointer;
  }
  

  .color-dots {
    height: 25px;
    width: 25px;
    background-color: #bbb;
    border-radius: 50%;
    display: inline-block;
    margin: 10px;
  }

  li {
    margin: 10px;
  }

  .stars {
    color: orange;
    font-size: 1rem;
    display: inline-block;
    margin-right: 30px;
  }

  .distanceCheck {
    display: block;
  }

  input {
    margin-top: 10px;
    height: 20px;
    margin-right: 15px;
    width: 30px;
  }

  .viewBtn {
    color: var(--primary);
    display: inline-block;
    border: 1px solid var(--primary);
    font-size: 14px;
    padding: 10px;
    //margin-top:10px;
  }

  .storeInfo {
    flex: 1;
  }

  p {
    font-size: 13px;
  }

  .content {
    width: 100%;
    //height: auto;
    margin-top: 10px;
    //border: 1px solid #686868;
    display: none;
    //justify-content: center;
    //border-radius: 10px;
  }

  .show {
    width: 100%;
    display: flex;
    align-items: center;
  }
`;

const Facet = ({
  facet,
  query,
  setQuery,
  collectionsOpen,
  index,
  queryIsNotChanged,
  setQueryIsNotChanged
}) => {
  const router = useRouter();

  const [isOpen, setIsOpen] = useState(false);

  const handleSetQuery = (query, facet, facetValue) => {
    if (queryIsNotChanged && setQueryIsNotChanged) setQueryIsNotChanged(false);

    setQuery([
      ...query,
      {
        name: facetValue.name,
        value: `${facet.code || facet.name}=${
          facetValue.code || facetValue.value
        }`,
        removeText: facetValue.removeText
      }
    ]);
  };

  useEffect(() => {
    if (
      facet?.title.toLowerCase() === "price" ||
      facet?.title.toLowerCase() === "sellers" ||
      (collectionsOpen && facet?.title.toLowerCase() === "collections")
    ) {
      setIsOpen(true);
    }
  }, [facet]);

  return (
    <>
      <Wrapper>
        {/* <h3 className="text-lg lg:text-2xl">Filters</h3> */}
        {/* {index !== 0 && <hr />} */}
        <h2
          onKeyDown={e => {
            if (e.key === "Enter") {
              e.target.click();
            }
          }}
          aria-expanded={isOpen ? "true" : "false"}
          tabIndex={"0"}
          onClick={() => setIsOpen(!isOpen)}
          className={`desk-${facet?.title} text-base md:text-md lg:text-2xl facets-title`}
        >
          {facet?.title}



          {/* <span
            className="clearBtn"
            style={{
              color: "#212B36"
            }}
            onClick={() =>
                setQuery([...query.filter(q => q.name !== facet.name)])
            }
          >
            
            {!isOpen ? (
              <MdKeyboardArrowDown
              style={{ fontSize: "1.5em" }}
              className="toggle"
            />
            ) : (
              <MdKeyboardArrowUp
                style={{ fontSize: "1.5em" }}
                className="toggle"
              />
              
            )}
          </span> */}


        </h2>
        {facet?.facetValues
          ?.filter(f => f.count > 0)
          .map(facetValue => {
            return (
              <div
                onKeyDown={e => {
                  if (e.key === "Enter") {
                    e.target.click();
                  }
                }}
                tabIndex={"0"}
                className={`focusAble flex my-2 cursor-pointer ${
                  isOpen ? "content show" : "content show"
                }`}
                key={facetValue.removeText}
                onClick={() =>
                  query.length > 0
                    ? query.find(
                        q =>
                          q.value ===
                          `${facet.code || facet.name}=${
                            facetValue.code || facetValue.value
                          }`
                      )
                      ? setQuery([
                          ...query.filter(
                            q =>
                              q.value !==
                              `${facet.code || facet.name}=${
                                facetValue.code || facetValue.value
                              }`
                          )
                        ])
                      : handleSetQuery(query, facet, facetValue)
                    : handleSetQuery(query, facet, facetValue)
                }
              >
                <CheckBox className="flex items-center justify-center w-6 h-6 mr-4">
                  {query.find(
                    q =>
                      q.value ===
                      `${facet.code || facet.name}=${
                        facetValue.code || facetValue.value
                      }`
                  ) ? (
                    <MdDone
                      className="text-sm"
                      style={{
                        color: "#DC7863",
                        fontSize: "38px"
                      }}
                    />
                  ) : (
                    ""
                  )}
                </CheckBox>
                <TextFilter>{facetValue.text}</TextFilter>
                <p style={{ marginLeft: "auto" }}>({facetValue.count})</p>
              </div>
            );
          })}
      </Wrapper>
    </>
  );
};

const H2 = styled.h2`
  font-size: 22px;
  line-height: 28px;
`;
const CheckBox = styled.div`
  position: relative;
  top: 0;
  left: 0;
  height: 17px;
  width: 17px;
  background-color: #fff;
  cursor: pointer;
  margin: 0 5px 0 0;
  border: 1px solid #c8c8c8;
`;
const TextFilter = styled.p`
  font-weight: normal;
  font-size: 13px;
  line-height: 22px;
  margin-left: 5px;
`;
const Line = styled.span`
  height: 2px;
  background: #c4c4c4;
  margin: 30px 0px;
`;
export default Facet;
