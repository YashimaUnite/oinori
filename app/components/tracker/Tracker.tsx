"use client";

import React, { createContext, useState } from 'react';

import Grid from './TrackerGrid';

export type TrackerData = {
	steps: string[][];
	titles: string[];
};

export const TrackerDataContext = createContext<TrackerData | null>(null);

const defaultData: TrackerData = {
	steps: [['Step 1', 'Step 2', 'Step 3', "Step 4"],['Step 1', 'Step 2', 'Step 3', "Step 4"],['Step 1', 'Step 2', 'Step 3', "Step 4"],['Step 1', 'Step 2', 'Step 3', "Step 4"],['Step 1', 'Step 2', 'Step 3', "Step 4"],['Step 1', 'Step 2', 'Step 3', "Step 4"],['Step 1', 'Step 2', 'Step 3', "Step 4"],['Step 1', 'Step 2', 'Step 3', "Step 4"],['Step 1', 'Step 2', 'Step 3', "Step 4"],['Step 1', 'Step 2', 'Step 3', "Step 4"]],
	titles: ['Lane 1', 'Lane 2', 'Lane 3', 'Lane 4', 'Lane 5', 'Lane 6', 'Lane 7', 'Lane 8'],
};


const Tracker: React.FC = () => {
	const [data, setData] = useState<TrackerData>(defaultData);

	const handleStepClick = (laneIndex: number, stepIndex: number) => {
		// TrackerDataの更新
		setData((prevData) => {
			const newSteps = [...prevData.steps];
			newSteps[laneIndex][stepIndex] = 'DONE';
			return {
				...prevData,
				steps: newSteps,
			};
		});
	};

	return (
		<TrackerDataContext.Provider value={data}>
			<Grid onStepClick={handleStepClick} steps={data.steps} titles={data.titles} />
		</TrackerDataContext.Provider>
	);
};

export default Tracker;
