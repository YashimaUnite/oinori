'use client';

import React from 'react';

import Tracker from './components/tracker/Tracker';

type HomeProps = {};

const Home: React.FC = () => {
	return (
		<div className="Home">
			<Tracker numCols={80} numRows={200} songID={0} />
		</div>
	);
};

export default Home;
