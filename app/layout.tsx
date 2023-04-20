import React from 'react';

type RootLayoutProps = {
	children: React.ReactNode;
};

const metadata = {
	title: 'oinori Tracker',
	description: 'lets pray!',
};

const RootLayout = ({ children }: RootLayoutProps) => {
	return (
		<html lang="ja">
		<head>
			<title>{metadata.title}</title>
			<meta name="description" content={metadata.description} />
		</head>
		<body>
			{children}
		</body>
		</html>
	);
};

export default RootLayout;
