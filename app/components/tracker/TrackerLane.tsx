import * as React from 'react';

import { RandomCell } from "./TrackerCell";
import { LaneStyle } from './TrackerStyles';

export type TrackerLaneProps = {
	title: string;
	handleCellClick: (index: number) => void;
	onCellClick: (index: number) => void;
	steps: string[];
};

const TrackerLane: React.FC<TrackerLaneProps> = ({ title, handleCellClick: onHandleCellClick, onCellClick, steps }) => {
	const [selectedCells, setSelectedCells] = React.useState<number[]>([]);

	const handleCellClick = (index: number) => {
		if (selectedCells.includes(index)) {
			setSelectedCells(selectedCells.filter((cellIndex) => cellIndex !== index));
		} else {
			setSelectedCells([...selectedCells, index]);
		}
		onHandleCellClick(index);
	};

	return (
		<LaneStyle>
			<div className="title">{title}</div>
			<div className="steps">
				{steps.map((step, index) => (
					<RandomCell
						key={index}
						onCellClick={() => handleCellClick(index)}
						selected={selectedCells.includes(index)}
					/>
				))}
			</div>
		</LaneStyle>
	);
};

export default TrackerLane;
