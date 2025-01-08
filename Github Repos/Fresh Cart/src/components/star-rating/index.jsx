import React, { useState } from "react";
import "./styles.css"
import {Star} from '@mui/icons-material'
// import StarBorderIcon from '@mui/icons-material/StarBorder';
function StarRating({ noOfStars = 5 }) {
  const [rating, setrating] = useState(0);
  const [hover, setHover] = useState(0);

  function handleClick(currentIndex) {
    setrating(currentIndex)
  }
  function handleMouseEnter(currentIndex) {
    setHover(currentIndex)
  }
  function handleMouseLeave() {
    setHover(rating)
  }
  return (
    <div>
      {[...Array(noOfStars)].map((_, index) => {
        index += 1
        return (
          <Star sx={{ fontSize: 20 }} 
            key={index}
            className={index <= (hover || rating) ? 'active' : 'inactive' }
            onClick={() => handleClick(index)}
            onMouseMove={() => handleMouseEnter(index)}
            onMouseLeave={() => handleMouseLeave}
          />
        );
      })}
    </div>
  );
}

export default StarRating;
