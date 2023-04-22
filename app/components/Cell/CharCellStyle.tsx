import styled from 'styled-components';

import {CharGridProps} from './CharCell';

export const CharCellStyle = styled.div<CharGridProps>`
	display: flex;
	align-items: center;
	justify-content: center;
	font-size: 24px;
	width: 30px;
	height: 30px;
	background-color: #f5f5f5;
	border: 1px solid #ccc;
	color: #666;
	position: absolute;
	left: ${({numCols}) => numCols * 30}px;
	top: ${({numRows}) => numRows * 30}px;
`;
