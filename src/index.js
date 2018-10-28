import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Title from './components/title/title';
import Panel from './components/panel/panel';
import ListPanel from './components/panel/listpanel';
import background1 from './images/background1.png';
import background2 from './images/background2.png';
import background3 from './images/background3.png';
import background4 from './images/background4.png';
import me from './images/me.png';

let aboutMeText = "As a student, employee and overall curious human being, I love learning how things work and using that knowledge in all sorts of weird and fun ways. I am also a part of the Dāna Project developer team where I volunteer some of my time on a weekly basis to contribute to the efforts to help alleviate poverty. Over time, I would like to learn about and work with a wide variety of topics in computer science.  A few items on that list would include web & mobile development, game design, and machine learning. That being said, I am always excited to explore new concepts in other fields and I never back down from a challenge.";
let skillsList = ["Java", "Python", "JavaScript",
            "HTML", "CSS", "C", "Haskell", "Racket"];
let experienceText = [
    "Software Engineer Co-op · BlueCat · May 2018 - Present",
    "Software Developer · Dāna Project · May 2017 - Present"];
let accomplishmentsText = [
    "Built Java + JavaFX MVP in a team of 7", 
    "Graduated highschool with awards in computer science and communications technology",
    "Aided in full stack development of mobile application",
    "Accumulated 7 Co-Curricular records"];
let educationText = "University of Toronto · Computer Science Specialist";
let additionalText = "Outside of academics, I play intramural basketball, sing in a small, close-knit choir, snap photos of wildlife at the park, dabble in graphic design and work on personal projects to expand my skillset beyond what university offers.";
let contactText = "Reach me at alison.tong@mail.utoronto.ca.";

let panels = [ 'aboutMe', 'skills', 'experience', 'accomplishments', 'education', 'additional', 'contact' ];

ReactDOM.render(
    <Title text="Software Engineer | Developer" subtext="Alison Tong" linkedin="https://linkedin.com/in/alisont1230" github="https://github.com/AlisonT1230"/>,
    document.getElementById('title')
);

ReactDOM.render(
    <Panel title="About Me" 
        backgroundImage={background1} 
        text={aboutMeText} 
        headingColor="#FF72B4" textColor="white" 
        image={me} alt="A picture of me!"
        boxShade="darkbox"/>,
    document.getElementById('aboutMe')
);

ReactDOM.render(
    <ListPanel title="Skills" 
        backgroundColor="whitesmoke" 
        items={skillsList} 
        headingColor="#764B93" textColor="#2C2C3D" 
        fa="code" faColor="#FF72B4"/>,
    document.getElementById('skills')
);

ReactDOM.render(
    <ListPanel title="Experience" 
        backgroundImage={background2} 
        items={experienceText} 
        headingColor="#FF72B4" textColor="white" 
        fa="briefcase" faColor="#B8DDD4" 
        boxShade="darkbox"/>,
    document.getElementById('experience')
);

ReactDOM.render(
    <ListPanel title="Accomplishments" 
        backgroundColor="whitesmoke" 
        items={accomplishmentsText} 
        headingColor="#FF72B4" textColor="#2C2C3D" 
        fa="trophy" faColor="#764B93"/>,
    document.getElementById('accomplishments')
);

ReactDOM.render(
    <Panel title="Education" 
        backgroundImage={background3} 
        text={educationText} 
        headingColor="#FF72B4" textColor="white" 
        fa="graduation-cap" faColor="#B8DDD4" 
        boxShade="darkbox"/>,
    document.getElementById('education')
);

ReactDOM.render(
    <Panel title="Additional" 
        backgroundColor="whitesmoke" 
        text={additionalText} 
        headingColor="#764B93" textColor="#2C2C3D" 
        fa="info-circle" faColor="#FF72B4"/>,
    document.getElementById('additional')
);

ReactDOM.render(
    <Panel title="Contact" 
        backgroundImage={background4} 
        text={contactText}
        headingColor="#FF72B4" textColor="white" 
        fa="envelope" faColor="#B8DDD4" 
        boxShade="darkbox"/>,
    document.getElementById('contact')
);

ReactDOM.render(
    <Panel backgroundColor="#282828" 
        text="Thanks for your time." 
        textColor="white"
        fa="smile-o" faColor="#FF72B4"/>,
    document.getElementById('endBlock')
);

// Panel animation logic

window.addEventListener('scroll', () => {
    for(let i = 0; i < panels.length; i++) {
        let elem = document.getElementById(panels[i]);
        if(!elem.classList.contains('appear')) {
            let elemRect = elem.getBoundingClientRect();
            if(elemRect.bottom > 0 && elemRect.top < window.outerHeight) {
                elem.classList.remove('hidden');
                elem.classList.add('appear');
            }
        }
    }
});