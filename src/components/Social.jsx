import React from "react";
import "../styles/components/Social.scss"

const Social = ({ social }) => {
  const socialItems = social || Array(3).fill(1);
  return (
    <div className="container">
      <section className="Social">
        {socialItems.map((item, index) => {
          return (
            <div key={index}>
              <h4>{item.name}</h4>
            </div>
          )
        })}
      </section>
    </div>
  )
}

export default Social;