import React from "react";
import "../styles/components/Interest.scss"

const Interest = ({ interests }) => {
  const interestItems = interests || Array(3).fill(1);
  return (
    <div className="gradient2">
      <div className="container">
        <section className="Interest">
          {interestItems.map((item, index) => {
            return (
              <div key={index} className="Interest__items">
                {item}
              </div>
            )
          })}

        </section>
      </div>

    </div>
  )
}

export default Interest;