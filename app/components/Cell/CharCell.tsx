import React from 'react';
import seedrandom from 'seedrandom';

import Cell, { CellProps } from "@/components/Cell/Cell";

export const chars = ['♡', '+', '=', '.', '@', '*', 'o', 'i'] as const;
type CharCellType = typeof chars[number];

export type CharCellData = {
	seed: string;
};

export type CharCellProps = CellProps<CharCellData> & {
	charCellData: CharCellData;
};

const genRandomSymbol = (seed: string): CharCellType => {
	const rng = seedrandom(seed);
	const randomIndex = Math.floor(rng() * chars.length);
	return chars[randomIndex];
};

const CharCell: React.FC<CharCellProps> = ({ charCellData, ...rest }) => {
	const { seed } = charCellData;
	const char = genRandomSymbol(seed);
	return (
		<Cell
			{...rest}
		>
			<div>{char}</div>
		</Cell>
	);
}

export default CharCell;
