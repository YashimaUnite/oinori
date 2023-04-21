"use strict";

import * as React from 'react';

import Tracker from './components/tracker/Tracker';

const Home: React.FC = () => {
	return (
		<div>
			<h1>oinori Tracker.</h1>
				<Tracker />
		</div>
	);
};

export default Home;
