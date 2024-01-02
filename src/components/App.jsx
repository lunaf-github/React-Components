
import React from "react";
import StarRating from "./star-rating/StarRating";
import Header from "./nested-menu/NestedMenu_Header";
import useThemeContext from "../providers/theme/useThemeContext";
import ThemeSelector from "../providers/theme/ThemeSelector";

const App = () => {

  const {theme, colors} = useThemeContext();

  return (
    <div className="App" style={{backgroundColor: colors[theme].background}}>
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