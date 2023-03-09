import React, { useState } from "react";

import "./About.css";

const About = () => {
  const [cursorX, setCursorX] = useState();
  const [cursorY, setCursorY] = useState();
  window.addEventListener("mousemove", (e) => {
    setCursorX(e.pageX);
    setCursorY(e.pageY);
  });
  return (
    <>
      {/*  about section start */}
      <div className="about" id="about">
      <div
            className="cursor"
            style={{
              left: cursorX + "px",
              top: cursorY + "px",
            }}
          ></div>
        <div className="ab">
          <h2 className="main_tag">About</h2>
        </div>
        <div className="content">
          <p>
            Most organizations acknowledge that they need to change and unlock
            their potential in order to stay competitive. However, changing an
            organization also requires an understanding of where the puck is
            going in your industry and taking purposeful actions to get there.
            <br />
            <br />
            Transformation is not always about completely re-imagining your
            value proposition or your business model. Rather, it is about
            transforming your core operations using digital tools; and capturing
            new opportunities enabled by digital.
            <br />
            <br />
            Our team enables organizations to identify their potential for
            transformation. We partner with our clients to define a roadmap to
            develop and deliver specific initiatives to enable reinvent their
            products, customer experiences and business models to create new
            value, enable differentiation, improve efficiencies and increase
            revenue with their transformation. We partner with a robust
            ecosystem of specialized firms to deliver the very best capabilities
            to our clients in every aspect of the transformation.
          </p>
        </div>
      </div>
    </>
  );
};

export default About;
