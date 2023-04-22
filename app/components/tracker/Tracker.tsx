'use client';

import {z} from 'zod';

import Grid from './Grid';
import Lane from './Lane';
import TrackerStyle from './TrackerStyle';

const trackerSchema = z.object({
	numCols: z.number(),
	numRows: z.number(),
	songID: z.number(),
});

type TrackerProps = z.infer<typeof trackerSchema>;

const Tracker: React.FC<TrackerProps> = ({numCols, numRows, songID}) => {
	const gridProps = {gridID: songID, numCols, numRows};
	const lanes = [];
	for (let i = 1; i <= 8; i++) {
		const laneProps = {laneID: i, numCols, numRows, pitch: ''};
		lanes.push(<Lane key={i} {...laneProps} />);
	}
	return (
		<TrackerStyle>
			<Grid {...gridProps} />
			{lanes}
		</TrackerStyle>
	);
};

export default Tracker;
