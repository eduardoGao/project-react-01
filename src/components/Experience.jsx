import React from "react";
import "../styles/components/Experience.scss"


const Experience = ({ experiences }) => {
  const experienceArray = experiences || Array(3).fill(1);
  return (
    <div className="card">

      <div className="Experience">
        <h3>Experience</h3>
        {experienceArray.map((item, index) => {
          return (
            <div key={index}>
              <h4>Company: {item.company}</h4>
              <p>Job: {item.jobTitle}</p>
              <p>Description: {item.jobDescription}</p>
            </div>
          )
        })}
      </div>

    </div>
  )
}

export default Experience;