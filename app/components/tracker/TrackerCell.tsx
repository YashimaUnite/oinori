import React from 'react';

import {CellStyle} from "@/components/tracker/TrackerStyles";

type CellProps = {
	note?: string;
	onCellClick: () => void;
	selected: boolean;
	step: string;
};

const Cell: React.FC<CellProps> = ({ note, onCellClick, selected, step }) => {
	return (
		<CellStyle selected={selected} onClick={onCellClick}>
			<div>{step}</div>
			{note && <div>{note}</div>}
		</CellStyle>
	);
};

type RandomCellProps = {
	note?: string;
	onCellClick: () => void;
	selected: boolean;
};

const RandomCell: React.FC<RandomCellProps> = ({ note, onCellClick, selected }) => {
	const randomValue = React.useMemo(() => randomString(5), []);
	return <Cell step={randomValue} note={note} selected={selected} onCellClick={onCellClick} />;
};

const randomString = (length: number): string => {
	const chars = '+=.*o';
	let result = '';
	for (let i = 0; i < length; i++) {
		result += chars.charAt(Math.floor(Math.random() * chars.length));
	}
	return result;
};

export { Cell, RandomCell };
