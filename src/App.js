import React from "react";
import { Mobile } from "./components/Mobile";
import "./components/common.css"
function App() {
  return (
    <div className="main">
     <Mobile 
     url="iphone1"
     title="Iphone"
     price="RS.89,000"
     category="Apple iPhone 15(Deep Gold 256 GB ROM)"
     btn="ADD TO CART"
     btnsub="BUY"
     />
       <Mobile 
     url="iphone2"
     title="Iphone 15 Plus"
     price="RS.1,07,999"
     category="Apple iPhone 15(Deep pink,128 GB)"
     btn="ADD TO CART"
     btnsub="BUY"
     />
       <Mobile 
     url="iphone3"
     title="Iphone 15 Pro"
     price="RS.1,48,000"
     category="Apple iPhone 15(Deep Grey,512 GB)"
     btn="ADD TO CART"
     btnsub="BUY"
     />
       <Mobile 
     url="iphone4"
     title="Iphone 15 Pro max"
     price="RS.1,99,999"
     category="Apple iPhone 15(Deep White,1 Tb)"
     btn="ADD TO CART"
     btnsub="BUY"
     />
    </div>
  );
}

export default App;
