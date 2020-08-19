import React from "react";
import "../styles/components/Academic.scss"

const Academic = ({ academics }) => {
  const academicArray = academics || Array(3).fill(1);
  return (
    <div className="card">
      <div className="Academic">
        <h3>Academic</h3>
        {academicArray.map((item, index) => {
          return (
            <div key={index}>
              <h4>{item.degree}</h4>
              <p>{item.description}</p>
            </div>
          )
        })}
      </div>
    </div>
  )
}

export default Academic;