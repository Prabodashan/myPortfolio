import { useState } from "react";
import { skillsHave } from "../data/skill";

const Skills = () => {
  return (
    <>
      <section class="skills">
        <h1>My Skills</h1>
        <div class="content">
          <div class="skills-details">
            <div class="text">
              <div class="topic">Frontend</div>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minus
                natus tenetur tempora? Quasi, rem quas omnis. Porro rem
                aspernatur reiciendis ut praesentium minima ad, quos, officia!
                Illo libero, et, distinctio repellat sed nesciunt est modi
                quaerat placeat. Quod molestiae, alias?
              </p>
            </div>
            <div class="boxes">
              <div class="box">
                <div class="topic">HTML</div>
                <div class="per">
                  <img src="./images/logos/html.png" alt="" />
                </div>
              </div>
              <div class="box">
                <div class="topic">CSS</div>
                <div class="per">
                  <img src="./images/logos/css.png" alt="" />
                </div>
              </div>
              <div class="box">
                <div class="topic">JavScript</div>
                <div class="per">
                  <img src="./images/logos/javascript.png" alt="" />
                </div>
              </div>
              <div class="box">
                <div class="topic">Bootstrap</div>
                <div class="per">
                  <img src="./images/logos/bootstrap.png" alt="" />
                </div>
              </div>
              <div class="box">
                <div class="topic">React</div>
                <div class="per">
                  <img src="./images/logos/react.png" alt="" />
                </div>
              </div>
              <div class="box">
                <div class="topic">Angular</div>
                <div class="per">
                  <img src="./images/logos/angular.png" alt="" />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="content">
          <div class="skills-details">
            <div class="text">
              <div class="topic">Backend</div>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minus
                natus tenetur tempora? Quasi, rem quas omnis. Porro rem
                aspernatur reiciendis ut praesentium minima ad, quos, officia!
                Illo libero, et, distinctio repellat sed nesciunt est modi
                quaerat placeat. Quod molestiae, alias?
              </p>
            </div>
            <div class="boxes">
              <div class="box">
                <div class="topic">Node</div>
                <div class="per">
                  <img src="./images/logos/node.png" alt="" />
                </div>
              </div>
              <div class="box">
                <div class="topic">PHP</div>
                <div class="per">
                  <img src="./images/logos/php.png" alt="" />
                </div>
              </div>
              <div class="box">
                <div class="topic">Laravel</div>
                <div class="per">
                  <img src="./images/logos/laravel.png" alt="" />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="content">
          <div class="skills-details">
            <div class="text">
              <div class="topic">Database</div>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minus
                natus tenetur tempora? Quasi, rem quas omnis. Porro rem
                aspernatur reiciendis ut praesentium minima ad, quos, officia!
                Illo libero, et, distinctio repellat sed nesciunt est modi
                quaerat placeat. Quod molestiae, alias?
              </p>
            </div>
            <div class="boxes">
              <div class="box">
                <div class="topic">mongoDB</div>
                <div class="per">
                  <img src="./images/logos/mongo.png" alt="" />
                </div>
              </div>
              <div class="box">
                <div class="topic">Firebase</div>
                <div class="per">
                  <img src="./images/logos/firebase.png" alt="" />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="content">
          <div class="skills-details">
            <div class="text">
              <div class="topic">Devops</div>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minus
                natus tenetur tempora? Quasi, rem quas omnis. Porro rem
                aspernatur reiciendis ut praesentium minima ad, quos, officia!
                Illo libero, et, distinctio repellat sed nesciunt est modi
                quaerat placeat. Quod molestiae, alias?
              </p>
            </div>
            <div class="boxes">
              <div class="box ski">
                <div class="topic">Git</div>
                <div class="per">
                  <img src="./images/logos/git.png" alt="" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Skills;
