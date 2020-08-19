import React from "react";
import "../styles/components/Carousel.scss"

const Carousel = ({ children }) => {
  return (
    <div className="container">
      <section className="Carousel">
        {children}
      </section>

    </div>
  )
}

export default Carousel;