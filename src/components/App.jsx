
import React from "react";
import StarRating from "./star-rating/StarRating";
import Header from "./nested-menu/NestedMenu_Header";
import { COLORS } from "../providers/colors";
import useThemeContext from "../providers/useThemeContext";
import ThemeSelector from "../providers/ThemeSelector";

const App = () => {

  const {theme} = useThemeContext();
  console.log(COLORS[theme])
  return (
    <div className="App" style={{backgroundColor: COLORS[theme].background}}>
      <ThemeSelector />
      <h2>Star Rating</h2>
      <StarRating rating={3} totalStars={5}  />
      <hr/>
      <h2 >Nested Menu</h2>
      <Header />
      <hr/>
    </div>
  );
  
}

export default App;