import styled from "styled-components";
export const Tabs = styled.div`
//   overflow: hidden;
//   background: #fff;
//   font-family: Open Sans;
//   height: 3em;
    display: flex;
    justify-content: space-between;
    margin-bottom: 54px;
    border-bottom: 1px solid #F27665;
`;

export const Tab = styled.button`
font-family: 'Noto Sans', sans-serif !important;
//   border: none;
//   outline: none;
//   cursor: pointer;
//   width: 40%;
//   position: relative;

//   margin-right: 0.1em;
//   font-size: 1em;
//   border: ${props => (props.active ? "1px solid #ccc" : "")};
//   border-bottom: ${props => (props.active ? "none" : "")};
//   background-color: ${props => (props.active ? "white" : "lightgray")};
//   height: ${props => (props.active ? "3em" : "2.6em; top:.4em")};
//   transition: background-color 0.5s ease-in-out;

border: 1px solid #707070;
    display: inline-block;
    border-radius: 4px;
    cursor: pointer;
    background-color: #FFFFFF;
    color: #363636;
    // /* font-family: Roboto; */
    width: 15%;
    padding: 4px 0px;
    margin-bottom: 3px;

  :hover {
    background-color: white;
    border: 1px solid #F27665;
    border-bottom: 4px solid #F27665;
  }
`;
export const Content = styled.div`
  ${props => (props.active ? "" : "display:none")}
`;
