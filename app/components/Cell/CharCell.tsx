import React from 'react';
import seedrandom from 'seedrandom';
import {z} from 'zod';

import {CharCellStyle} from './CharCellStyle';

const chars = ['♡', '+', '=', '.', '@', '*', 'o', 'i'] as const;
const charCellSchema = z.enum(chars);

type CharChars = z.infer<typeof charCellSchema>;

const CharGridPropsSchema = z.object({
	numCols: z.number(),
	numRows: z.number(),
	seed: z.string(),
});

export type CharGridProps = z.infer<typeof CharGridPropsSchema>;

const CharCell: React.FC<CharGridProps> = ({
	numCols,
	numRows,
	seed,
}: CharGridProps) => {
	const renderCharType = genRandomSymbol(seed);
	return (
		<CharCellStyle numRows={numRows} numCols={numCols} seed={seed}>
			<div className="CharCell" style={{gridColumn: numCols, gridRow: numRows}}>
				<span>{renderCharType}</span>
			</div>
		</CharCellStyle>
	);
};

const genRandomSymbol = (seed: string): string => {
	const rng = seedrandom(seed);
	const randomIndex = Math.floor(rng() * chars.length);
	return chars[randomIndex];
};

export default CharCell;
