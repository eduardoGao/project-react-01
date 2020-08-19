import React from "react";
import "../styles/components/Skills.scss"


const Skills = ({ skills }) => {
  const skillArray = skills || Array(3).fill(1);
  return (
    <div className="card">
      <div className="Skills">
        <h3>Skills</h3>
        {skillArray.map((item, index) => {
          return (
            <div key={index}>
              <h4>Tecnologie: {item.name}</h4>
              <p>{item.percentage}</p>
            </div>
          )
        })}
      </div>
    </div>
  )
}

export default Skills;