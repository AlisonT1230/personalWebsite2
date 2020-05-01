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

const aboutMeText = "I love learning how things work and using that knowledge in all sorts of weird and fun ways.  My goal is to learn about and work with a wide variety of topics in computer science, like web & mobile development, game design, and machine learning. That being said, I am always excited to explore new concepts in other fields and I never back down from a challenge.  Furthermore, while I enjoy completing tasks independently, I believe collaboration is of utmost importance in a workplace and to date, my best experiences were experienced as part of a team.";
const skillsList = ["Python", "Java",
            "HTML",
            "CSS",
            "JavaScript", 
            "DynamoDB", 
            "S3", 
            "SSM",
            "Lambda",
            "CloudWatch",
            "ECR",
            "ECS",
            "Auth0 (SSO, SAML)",
            "Docker",
            "C", "Haskell", "Racket"];
const experienceText = [
    "Software Engineer Co-op · BlueCat · May 2018 - Aug 2019",
    "       - Worked in an agile team, taking on both collaborative and independent tasks",
    "       - Regularly presented team demos to product organization",
    "       - Contributed to research spikes alongside teammates and architects",
    "       - Participated in product initiatives to improve developer testing experience",
    "",
    "",
    "Software Developer · Dāna Project · May 2017 - Apr 2019",
    "       - Volunteered in development work for a charitable organization",
    "       - Contributed research in tools & technology for use in development"];
const accomplishmentsText = [
    "Led development of a customer-facing Anycast network setup script",
    "Contributed to research & development and helped bridge inter-team communication in efforts to employ SAML capabilities",
    "Helped refactor and standardize codebase, relieving techincal debt to encourage faster development and halve build times",
    "Contributed research & discussion of streamlining between-microservice testing",
    "Accumulated 7 Co-Curricular records",
    "Graduated highschool with awards in computer science and communications technology"];
const educationText = "University of Toronto · Honours Bachelor of Science · Computer Science Specialist";
const additionalText = "My curiosity reaches beyond the realm of computer science and software.  I also enjoy wildlife photography, dabbling in graphic design, and learning 3D modeling.";
const contactText = "Reach me at aj9468@gmail.com.";

ReactDOM.render(
    <Title text="Software Engineer | Developer" altText1="Software Engineer" altText2="Developer" subtext="Alison Tong" linkedin="https://linkedin.com/in/alisont1230" github="https://github.com/AlisonT1230"/>,
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
    <ListPanel title="Skills & Tools" 
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
        boxShade="darkbox"
        alignment="left"/>,
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
    <Panel title="Additional Interests" 
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