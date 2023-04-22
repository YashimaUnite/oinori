import styled from 'styled-components';

export const CHARACTER_WIDTH = 35;
export const CHARACTER_HEIGHT = 35;

export const LaneStyle = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	width: 100%;
	height: 100%;
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
