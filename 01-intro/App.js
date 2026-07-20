import { useState } from "react";

export default function App() {
    const [devName, setDevName] = useState("");
    const [devExperience, setDevExperience] = useState("");
    const [devCoDetails, setDevCoDetails] = useState("");
    const [devSkillsDetails, setDevSkillsDetails] = useState("");

    async function getDevData() {
        setDevName("John");
        setDevExperience("2 years");
        setDevCoDetails("xyz company");
        setDevSkillsDetails("my skills");
    }

    return (        
        <div className="developer-card">
            <button onClick={getDevData}>Load developer details</button>
            <DevName name={devName} />
            <DevExperience experience={ devExperience}/>
            <DevDetails details={ devCoDetails}/>
            <DevDetails details={ devSkillsDetails}/>
        </div>
    );
}

function DevName(params) {
    return (
        <h1>{params.name}</h1>
    );
}

function DevExperience(params) {
    return (<h2>{params.exprience} years</h2>);
}

function DevDetails(params) {
    return (<p>{params.details}</p>);
}