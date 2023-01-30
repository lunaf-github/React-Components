
import React, { Component} from "react";
import StarRating from "./star-rating/StarRating";
import Header from "./nested-menu/NestedMenu_Header";

class App extends Component{
  render(){
    return(
      <div className="App">
        <h2>Star Rating</h2>
        <StarRating rating={3} totalStars={5}  />
        <hr/>
        <h2 >Nested Menu</h2>
        <Header />
        <hr/>
      </div>
    );
  }
}

export default App;