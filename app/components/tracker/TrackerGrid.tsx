import * as React from 'react';

import TrackerLane from './TrackerLane';
import { GridStyle } from './TrackerStyles';

type GridProps = {
	onStepClick: (lane: number, index: number) => void;
	steps: string[][];
	titles: string[];
};

const Grid: React.FC<GridProps> = ({ onStepClick, steps, titles }) => {
	return (
		<GridStyle className="grid">
			{titles.map((title, index) => (
				<TrackerLane
					key={`lane-${index}`}
					title={title}
					onCellClick={(cellIndex) => onStepClick(index, cellIndex)}
					steps={steps[index]}
					handleCellClick={(cellIndex) => onStepClick(index, cellIndex)}
				/>
			))}
		</GridStyle>
	);
};

export default Grid;
