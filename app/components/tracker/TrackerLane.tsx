import * as React from 'react';

import { RandomCell } from "./TrackerCell";
import { TrackerLaneStyle } from './TrackerStyles';

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
		<TrackerLaneStyle>
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
		</TrackerLaneStyle>
	);
};

export default TrackerLane;
