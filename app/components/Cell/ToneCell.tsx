import {z} from 'zod';

const tones = ['C', 'C#', 'D', 'D#', 'E', 'F', 'F#', 'G', 'G#', 'A', 'A#', 'B'];
const octaves = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];

export type Pitch = `${(typeof tones)[number]}${(typeof octaves)[number]}`;

const toneGridPropsSchema = z.object({
	numCols: z.number(),
	numRows: z.number(),
	pitch: z
		.string()
		.refine(
			s =>
				tones.includes(s.slice(0, -1)) && octaves.includes(Number(s.slice(-1))),
			{
				message: 'Invalid pitch',
			},
		),
});

export type ToneGridProps = z.infer<typeof toneGridPropsSchema>;

const ToneCell: React.FC<ToneGridProps> = ({
	numCols,
	numRows,
	pitch,
}: ToneGridProps) => {
	return (
		<div className="ToneCell" style={{gridColumn: numCols, gridRow: numRows}}>
			<span>{pitch}</span>
		</div>
	);
};

export default ToneCell;
