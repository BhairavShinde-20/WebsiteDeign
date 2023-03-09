import React from "react";
import "./Section.css";
// import SectionBg from "../img/section-bg.jpg";

const Section = () => {
  return (
    <>
    <div className="main_section" id ="section">
      <div className="section" >
        <div className="con_3">
          <div className="services">
            <h2 className="main_tag">SERVICES</h2>
          </div>
          <div className="company_services">
            <div className="stragety">
              <div>
                <h3 style={{ color: "#f9bb4e" }}>STRAGETY</h3>
                <p className="ser">Digital Transformation</p>
                <p className="ser">Resourcing</p>
                <p className="ser">Enterprise Architecture</p>{" "}
              </div>
              <div>
                <h3 style={{ color: "#f9bb4e" }}>OPERATIONS</h3>
                <p className="ser">Process Optimization</p>
                <p className="ser">Digitization</p>
                <p className="ser">Managed Services</p>
              </div>
              <div>
                <h3 style={{ color: "#f9bb4e" }}>CLOUD APPS</h3>
                <p className="ser">CRM</p>
                <p className="ser">ERP</p>
                <p className="ser">HCM</p>
              </div>
            </div>

            <div className="stragety">
              <div>
                <h3 style={{ color: "#f9bb4e" }}>DIGITAL</h3>
                <p className="ser">Web</p>
                <p className="ser">Mobile</p>
                <p className="ser">eCommerce</p>{" "}
              </div>
              <div>
                <h3 style={{ color: "#f9bb4e" }}>DEVELOPMENT</h3>
                <p className="ser">Apps</p>
                <p className="ser">API</p>
                <p className="ser">Cloud Infrastructure</p>
              </div>
              <div>
                <h3 style={{ color: "#f9bb4e" }}>DATA SCIENCE</h3>
                <p className="ser">Core Data</p>
                <p className="ser">Analytics</p>
                <p className="ser">AI & ML</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      </div>
    </>
  );
};

export default Section;
