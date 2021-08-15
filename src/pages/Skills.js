import { useState } from "react";
import { skillsHave } from "../data/skill";

const Skills = () => {
  const [skills] = useState(skillsHave);

  return (
    <>
      <section className="skill-page">
        <h1>My skillS</h1>
        <div className="row frontend">
          {skills.map((skill) => {
            const { id, name, type, image } = skill;
            if (type === "Frontend") {
              return (
                <div className="myskil" key={id}>
                  <img src={image} alt={name} />
                  <p>{name}</p>
                </div>
              );
            }
          })}
        </div>

        <div className="row backend">
          {skills.map((skill) => {
            const { id, name, type, image } = skill;
            if (type === "Backend") {
              return (
                <div className="myskil" key={id}>
                  <img src={image} alt={name} />
                  <p>{name}</p>
                </div>
              );
            }
          })}
        </div>

        <div className="row database">
          {skills.map((skill) => {
            const { id, name, type, image } = skill;
            if (type === "Database") {
              return (
                <div className="myskil" key={id}>
                  <img src={image} alt={name} />
                  <p>{name}</p>
                </div>
              );
            }
          })}
        </div>

        <div className="row devops">
          {skills.map((skill) => {
            const { id, name, type, image } = skill;
            if (type === "Devops") {
              return (
                <div className="myskil" key={id}>
                  <img src={image} alt={name} />
                  <p>{name}</p>
                </div>
              );
            }
          })}
        </div>
      </section>
    </>
  );
};

export default Skills;
