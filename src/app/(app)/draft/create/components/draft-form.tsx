"use client"

import { DraftType } from "@/interface";
import { Editor } from "@/components/editor";

import React, { Fragment, type FC } from "react";

type DraftFormProps = {
	initValues?: DraftType

};

export const DraftForm: FC<DraftFormProps> = ({ initValues }) => {
	return <Fragment>
		<Editor />
	</Fragment>;
};
export default DraftForm