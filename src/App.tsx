import React from 'react';
import { NavigationBar } from 'sections/NavigationBar';
import { Jumbotron } from 'sections/Jumbotron';
import { DDay } from 'sections/DDay';
import { Intro } from 'sections/Intro';
import { Footer } from 'sections/Footer';
import { HowToAttend } from 'sections/HowToAttend';
import { Missions } from 'sections/Missions';
import { Prizes } from 'sections/Prizes';
import { Calendar } from 'sections/Calendar';
import { Criteria } from 'sections/Criteria';
import { Judges } from 'sections/Judges';
import { Mentors } from 'sections/Mentors';
import { Rules } from 'sections/Rules';
import { FAQ } from 'sections/FAQ';
import { Sponsors } from 'sections/Sponsors';
import { Hosts } from 'sections/Hosts';
import './index.css';

function App() {
	return (
		<>
			<NavigationBar />
			<Jumbotron />
			<DDay />
			<Intro />
			<HowToAttend />
			<Missions />
			<Prizes />
			<Calendar />
			<Criteria />
			<Judges />
			<Mentors />
			<Rules />
			<FAQ />
			<Sponsors />
			{/* <Hosts /> */}
			<Footer />
		</>
	);
}

export default App;
