import { Inter } from "next/font/google";

import type { Metadata } from "next";
import "./globals.css";

const inter = Inter({
	subsets: ["latin"],
	display: 'swap',
});




export const metadata: Metadata = {
	title: "数据中心",
	description: "数据中心",
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en" className={`${inter.className}`}>
			
			<body>{children}</body>
		</html>
	);
}
