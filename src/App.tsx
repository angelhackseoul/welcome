import React from "react";
import { NavigationBar } from "./components/NavigationBar";
import { DDay } from "./components/DDay";
import { Footer } from "./components/Footer";
import "./index.css";

function App() {
    return (
        <>
            <NavigationBar />
            <section id="jumbotron">Jumbotron</section>
            <DDay />
            <section id="intro">Intro</section>
            <section id="how-to-attend">How to Attend</section>
            <section id="missions">Missions</section>
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
