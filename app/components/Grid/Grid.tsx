import React from 'react';

import RenderCell from '@/components/Cell/RenderCell';

const Grid: React.FC = () => {
	const cellWidth = 50; // 1セルの横幅
	const cellHeight = 50; // 1セルの縦幅
	const numCols = 40; // グリッドの横幅(セル数)
	const numRows = 21; // グリッドの縦幅(セル数)
	const gridWidth = numCols * cellWidth; // グリッドの横幅(px)
	const gridHeight = numRows * cellHeight; // グリッドの縦幅(px)
	const centerX = window.innerWidth / 2; // アプリウィンドウの中心x座標
	const centerY = window.innerHeight / 2; // アプリウィンドウの中心y座標
	const gridLeft = centerX - gridWidth / 2; // グリッドの左端x座標
	const gridTop = centerY - gridHeight / 2; // グリッドの上端y座標
	const cells = [];

	for (let i = 0; i < numRows; i++) {
		for (let j = 0; j < numCols; j++) {
			cells.push(
				<RenderCell
					CellComponent={() => <div>test</div>}
					cellType={'char'}
					key={`${i}-${j}`}
					numCols={numCols}
					numRows={numRows}
					rowIndex={i}
					charCellData={{seed: `${i}-${j}`}}
				/>
			);
		}
	}

	return (
		<div style={{height: gridHeight, position: 'relative', width: gridWidth}}>
			{cells}
		</div>
	);
};

export default Grid;
