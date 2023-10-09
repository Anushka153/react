import React, { useState } from 'react'
import { AiOutlineStar, AiTwotoneStar } from "react-icons/ai";

export default function StarRating({ limit }: { limit?: number }) {
  const totalStars = limit || 5
  const [rating, setRating] = useState(0)

  const handleRating = (e) => {
    setRating(+e.target.getAttribute('data'))

  }

  return (
    <div>
      <h1>Star Rating</h1>
      {[... new Array(totalStars).keys()].map((item, index) => (
        <span
          key={item}
          onClick={handleRating}
          data={index + 1}
          className={index < rating ? 'starRated' : 'star'}
        ></span>
      ))}
    </div>
  )
}