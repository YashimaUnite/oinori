"use server";

import React from 'react';

import CharCell, {
	CharCellData,
	CharCellProps,
} from '@/components/Cell/CharCell';
import ToneCell, {
	ToneCellData,
	ToneCellProps,
} from '@/components/Cell/ToneCell';

type RenderCellProps<T extends CharCellData | ToneCellData> = {
	cellData?: T;
	cellType: 'char' | 'tone';
	children?: React.ReactNode;
	numCols: number;
	numRows: number;
	rowIndex: number;
} & (T extends CharCellData
	? Omit<CharCellProps, 'cellData'> & {charCellData: CharCellData}
	: Omit<ToneCellProps, 'cellData'> & {toneCellData: ToneCellData});

function RenderCell<T extends CharCellData | ToneCellData>({
	cellData,
	cellType,
	children,
	numCols,
	numRows,
	rowIndex,
	...restProps
}: RenderCellProps<T>): JSX.Element {
	const CellComponent = cellType === 'char' ? CharCell : ToneCell;
	return (
		<div {...restProps} >
			<CellComponent
				cellData={cellData}
				numCols={numCols}
				numRows={numRows}
				rowIndex={rowIndex}
				{...(restProps as any)}
			>
				{children}
			</CellComponent>
		</div>
	);
}

export default RenderCell;
