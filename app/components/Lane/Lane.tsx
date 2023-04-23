import React from 'react';

import RenderCell from '@/components/Cell/RenderCell';
import {ToneCellData} from '@/components/Cell/ToneCell';

const Lane: React.FC = () => {
	const cellWidth = 50; // 1セルの横幅
	const cellHeight = 50; // 1セルの縦幅
	const numCols = 4; // レーンの横幅(セル数)
	const numRows = 16; // レーンの縦幅(セル数)
	const laneWidth = numCols * cellWidth; // レーンの横幅(px)
	const laneHeight = numRows * cellHeight; // レーンの縦幅(px)
	const cells = [];

	for (let i = 0; i < numRows; i++) {
		for (let j = 0; j < numCols; j++) {
			cells.push(
				<RenderCell<ToneCellData>
					CellComponent={() => <div>test</div>}
					cellType={'tone'}
					key={`${i}-${j}`}
					numCols={numCols}
					numRows={numRows}
					rowIndex={i}
					toneCellData={{pitch: 'A3'}}
					pitch="A3"
				/>,
			);
		}
	}

	return (
		<div style={{height: laneHeight, position: 'relative', width: laneWidth}}>
			{cells}
		</div>
	);
};

export default Lane;
