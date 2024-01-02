


import React from 'react';
import {useState} from 'react'
import './starRating.css';

const classNames = require('classnames');

const StarRating = (props: {rating: number, size: string, totalStars:number, lock: boolean}) => {

  const [hover, setHover] = useState(0);
  const [rating, setRating] = useState(props.rating);


  const stars = [];

  for(let i = 1; i <= props.totalStars; i++){
    const starClass = classNames({
      'starRating__star': true,
      'starRating__star--active': i <= (hover || rating)? true: false,
      'starRating--extraSmall': (props.size === 'extra small')? true : false,
      'starRating--small': (props.size === 'small')? true : false,
      'starRating--large': (props.size === 'large')? true : false,
      'starRating--extraLarge': (props.size === 'extra large')? true : false,

    })

    const star = <button 
      className={starClass}
      key={i}
      onClick={()=> setRating(i)}
      onMouseEnter={() => setHover(i)}
      onMouseLeave={() => setHover(rating)}
      disabled={props.lock}
    > &#9733; </button>

    stars.push(star)
  }
 
  return(
    <div className="starRating">
      {stars}
    </div>
  )
}


StarRating.defaultProps = {
   lock: false
}

export default StarRating;