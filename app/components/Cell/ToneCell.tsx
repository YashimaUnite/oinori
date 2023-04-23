import React from 'react';

import Cell, {CellProps} from '@/components/Cell/Cell';

export const tones = [
	'C',
	'C#',
	'D',
	'D#',
	'E',
	'F',
	'F#',
	'G',
	'G#',
	'A',
	'A#',
	'B',
] as const;
export const octaves = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9] as const;
export type Pitch = `${(typeof tones)[number]}${(typeof octaves)[number]}`;

export type ToneCellData = {
	pitch: Pitch;
};

export type ToneCellProps = CellProps<ToneCellData> & {
	pitch: Pitch;
	toneCellData: ToneCellData;
};

const ToneCell: React.FC<ToneCellProps> = ({toneCellData, ...rest}) => {
	const {pitch} = toneCellData;
	return (
		<Cell {...rest}>
			<div>{pitch}</div>
		</Cell>
	);
};

export default ToneCell;
