import * as React from 'react';
import {z} from 'zod';

import CharCell, {CharGridProps} from '../Cell/CharCell';

const gridSchema = z.object({
	gridID: z.number(),
	numCols: z.number(),
	numRows: z.number(),
});

export type GridProps = z.infer<typeof gridSchema>;

const Grid: React.FC<GridProps> = ({gridID, numCols, numRows}: GridProps) => {
	const grid = [];
	for (let i = 0; i < numRows; i++) {
		for (let j = 0; j < numCols; j++) {
			const seed = `${gridID}-${i}-${j}`;
			const charCellProps: CharGridProps = {numCols: j, numRows: i, seed};
			grid.push(<CharCell key={seed} {...charCellProps} />);
		}
	}
	return <div className="Grid">{grid}</div>;
};

export default Grid;
