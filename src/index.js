import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Title from './components/title/title';
import Panel from './components/panel/panel';
import ListPanel from './components/panel/listpanel';

let aboutMeText = "Li Europan lingues es membres del sam familie. Lor separat existentie es un myth. Por scientie, musica, sport etc, litot Europa usa li sam vocabular. Li lingues differe solmen in li grammatica, li pronunciation e li plu commun vocabules. Omnicos directe al desirabilite de un nov lingua franca: On refusa continuar payar custosi traductores. At solmen va esser necessi far uniform grammatica, pronunciation e plu sommun paroles.";
let skillsList = ["Java", "Python", "JavaScript",
            "HTML", "CSS", "C", "Haskell", "Racket", "PostgreSQL"];
let experienceText = "Occaecat incididunt for commodo omnis autem voluptatem and aspernatur. Et dolores nesciunt dolorem. Corporis quae illo eum. Exercitationem incididunt but ad, so quaerat tempora amet. Id ut yet illo magna dolore, or fugit. Non consequat for aut sit or eaque yet sunt.";
let accomplishmentsText = "Consequatur totam natus vitae but fugiat. Eum eu exercitationem. Et eius yet sed, officia est. Ab sunt for exercitationem commodi iste but illum fugit.";
let educationText = "U of T";
let additionalText = "Omnis sed so eu, so magnam, magnam, exercitation. Consequuntur id cillum rem ad and perspiciatis. Velit non for commodi but esse incidunt ipsum or inventore. Tempor consequuntur yet voluptatem. Tempora eiusmod, and incidunt so numquam, for eos quis or aliqua.";
let contactText = "Esse incididunt and non exercitationem. Inventore eius qui, yet exercitationem yet eum. Vel. Tempor do, yet aperiam but ut but amet. Sequi anim or officia autem. Nulla tempor or amet quaerat. Incididunt illo, nostrud so commodo. Sit voluptatem aliquid for sequi illum. Dolor anim yet laborum for nisi ut.";

let panels = [ 'aboutMe', 'skills', 'experience', 'accomplishments', 'education', 'additional', 'contact' ];

ReactDOM.render(
    <Title text="Software Engineer | Developer" subtext="Alison Tong" linkedin="https://linkedin.com/in/alisont1230" github="https://github.com/AlisonT1230"/>,
    document.getElementById('title')
);

ReactDOM.render(
    <Panel title="About Me" backgroundColor="#E1FDCE" text={aboutMeText} fa="user"/>,
    document.getElementById('aboutMe')
);

ReactDOM.render(
    <ListPanel title="Skills" backgroundColor="whitesmoke" items={skillsList} fa="code"/>,
    document.getElementById('skills')
);

ReactDOM.render(
    <Panel title="Experience" backgroundColor="#E0FDCE" text={experienceText} fa="briefcase"/>,
    document.getElementById('experience')
);

ReactDOM.render(
    <Panel title="Accomplishments" backgroundColor="whitesmoke" text={accomplishmentsText} fa="trophy"/>,
    document.getElementById('accomplishments')
);

ReactDOM.render(
    <Panel title="Education" backgroundColor="#D1FCB6" text={educationText} fa="graduation-cap"/>,
    document.getElementById('education')
);

ReactDOM.render(
    <Panel title="Additional" backgroundColor="whitesmoke" text={additionalText} fa="info-circle"/>,
    document.getElementById('additional')
);

ReactDOM.render(
    <Panel title="Contact" backgroundColor="#D1FCB6" text={contactText} fa="envelope"/>,
    document.getElementById('contact')
);

ReactDOM.render(
    <Panel backgroundColor="#282828" text="  "/>,
    document.getElementById('endBlock')
);

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