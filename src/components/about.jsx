import React from "react";
import "./about.css";

const About = () => {
    const [name, setName] = React.useState("");

    const handleShowName = () => {
        setName("Savannah Germino");
    };

    return(
        <div className="about">
            <h1>About Me</h1>
            <hr></hr>
            <h3>{name}</h3>

            <button onClick={handleShowName} className="btn btn-sm btn-danger">
                Click me!
            </button>
        </div>
    );
};

export default About;
