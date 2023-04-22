import styled from 'styled-components';

import {ToneGridProps} from './ToneCell';

export const ToneCellStyle = styled.div<ToneGridProps>`
	display: flex;
	justify-content: center;
	align-items: center;
	width: 50px;
	height: 50px;
	color: darkgrey;
	opacity: 0.3;
	font-size: 2rem;
	font-weight: bold;
	border: 1px solid #bdbdbd;
	border-radius: 5px;
	background-color: #f5f5f5;
	transition: all 0.3s ease-in-out;
	cursor: pointer;
`;
