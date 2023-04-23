"use server";

import React from 'react';

export type CellProps<T> = {
	CellComponent: React.ComponentType<T>;
	cellType: 'char' | 'tone';
	children?: React.ReactNode;
	numCols?: number;
	numRows?: number;
	rowIndex?: number;
	uniqueCellData?: T;
};

const Cell = <T extends {}>({
	CellComponent,
	numCols = 0,
	numRows = 0,
	rowIndex = 0,
	uniqueCellData,
}: CellProps<T>) => {
	return (
		<div>
			{uniqueCellData ? (
				<CellComponent
					numCols={numCols}
					numRows={numRows}
					rowIndex={rowIndex}
					{...(uniqueCellData as any)}
				/>
			) : null}
		</div>
	);
};

export default Cell;
