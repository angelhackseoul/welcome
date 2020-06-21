import React from "react";
import { NavigationBar } from "sections/NavigationBar";
import { Jumbotron } from "sections/Jumbotron";
import { DDay } from "sections/DDay";
import { Intro } from "sections/Intro";
import { Footer } from "sections/Footer";
import { HowToAttend } from "sections/HowToAttend";
import { Missions } from "sections/Missions";
import "./index.css";

function App() {
    return (
        <>
            <NavigationBar />
            <Jumbotron />
            <DDay />
            <Intro />
            <HowToAttend />
            <Missions />
            <section id="prize">Prizes</section>
            <section id="calendar">Calendar</section>
            <section id="criteria">Criteria</section>
            <section id="mentor">Mentor</section>
            <section id="rule">Rule</section>
            <section id="faq">FAQ</section>
            <section id="sponsors">Sponsors</section>
            <section id="host">Host</section>
            <Footer />
        </>
    );
}

export default App;
