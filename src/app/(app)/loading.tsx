import styles from "./loading.module.css";

import React, { type FC } from "react";



type LoadingProps = {

};

export const Loading: FC<LoadingProps> = ({ }) => {
	return <div className="w-full h-full min-h-[360px] flex flex-col justify-center items-center">
		<div className={styles.loader}></div>
	</div>;
};
export default Loading

