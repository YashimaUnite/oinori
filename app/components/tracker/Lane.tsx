import React from 'react';
import {z} from 'zod';

import ToneCell from '../Cell/ToneCell';

const laneSchema = z.object({
	laneID: z.number(),
	numCols: z.number(),
	numRows: z.number(),
	pitch: z.string().optional().default(''),
});

type LaneProps = z.infer<typeof laneSchema>;

const Lane: React.FC<LaneProps> = ({laneID, numCols, numRows, pitch}) => {
	const lanes = [];
	for (let i = 1; i <= 8; i++) {
		lanes.push(
			<div key={i} className="Lane" style={{gridColumn: i}}>
				<ToneCell numRows={numRows} numCols={numCols} pitch={pitch} />
			</div>,
		);
	}
	return <React.Fragment>{lanes}</React.Fragment>;
};

export default Lane;
