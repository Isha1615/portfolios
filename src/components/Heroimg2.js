import "./Heroimg2Styles.css";
import React,{ Component} from "react";

const Heroimg2 = ({text,heading}) => {
        return (
            <div className="hero-img">
              <div className="heading">
                <h1>{heading}</h1>
                <p>{text}</p>
              </div>
            </div>
          );
    }

export default Heroimg2
