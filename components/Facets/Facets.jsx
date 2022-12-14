import { useState } from "react";

import { MdClose } from "react-icons/md";
import Facet from "../categorise/Facet";

export default function Facets({
  facets,
  collectionsOpen,
  setQuery,
  query,
  queryIsNotChanged,
  setQueryIsNotChanged,
  renderTitleAndCloseButton,
  close,
  isOpen,
  setIsOpen,
  setMobileFacetsOpen
}) {
  const [opened, setOpened] = useState(true);
  // const [mobileFacetsOpen, setMobileFacetsOpen] = useState(false);


  return (
    <div
      className="flex flex-col w-full h-full"
      style={{
        overflow: "auto",
        paddingLeft: "0",
        width : "350px",
        // position: "sticky",
        top: "0",
        left: "0 !important",
        paddingTop: renderTitleAndCloseButton ? "84px" : "0"
        // onClick ={setIsOpen(isOpen)}
      }}
    >
      {renderTitleAndCloseButton && (
        <div
          style={{ zIndex: "1", alignItems: "left" }}
          className=" fixed top-0 left-0 mx-auto my-0 w-full p-5 flex items-center justify-between font-semibold text-xl bg-black text-white"
        >
          <h2>Facets</h2>
          {/* <div className="text-white text-3xl cursor-pointer" onClick={!setMobileFacetsOpen} */}
          <div className="text-white text-3xl cursor-pointer">
            <MdClose />
          </div>
        </div>
      )}

      {/* {console.log("facets", facets)} */}
      
      {facets.length > 0 &&
        facets.map((facet, index) => {
          console.log("facet", facet);
          return (
            <>
            
            <Facet
              index={index}
              key={facet.title}
              query={query}
              setQuery={setQuery}
              facet={facet}
              collectionsOpen={collectionsOpen}
              queryIsNotChanged={queryIsNotChanged}
              setQueryIsNotChanged={setQueryIsNotChanged}
            />
            </>
          );
        })}

      
    </div>
  );
}
