import React from "react";
import "../styles/components/Languages.scss"

const Languages = ({ languages }) => {
  const languageItems = languages || Array(3).fill(1);
  return (
    <div className="card">
      <div className="Languages">
        <h3>Languages</h3>
        {languageItems.map((item, index) => {
          return (
            <div key={index}>
              <h4>{item.name}</h4>
              <p>{item.percentage}</p>
            </div>
          )
        })}
      </div>
    </div>
  )
}

export default Languages;