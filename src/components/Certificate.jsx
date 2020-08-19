import React from "react";
import '../styles/components/Certificate.scss';

const Certificate = ({ certificates }) => {
  const certificateItems = certificates || Array(3).fill(1);
  return (
    <div className="gradient">
      <section className="container">
        {certificateItems.map((item, index) => {
          return (
            <div key={index} className="Certificate">
              <h2>{item.name}</h2>
              <p>{item.description}</p>
              <p>
                {`${item.institution} ${item.date}`}
              </p>
            </div>
          )
        })}
      </section>

    </div>
  )
}

export default Certificate;