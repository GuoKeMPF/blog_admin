"use client"

import { uploadImage } from '@/services/upload';

import { Skeleton } from '@/components/ui';

import { FC, Fragment, useState, useRef } from 'react';
import Script from 'next/script'

interface EditorProps {
	onChange?: (value: string) => void;
	value?: string;
}


export const Editor: FC<EditorProps> = ({ onChange, value = '' }) => {
	const [loading, setLoading] = useState<boolean>(true);
	const initValue = useRef<string>(value);
	const change = (v: string) => {
		if (onChange) {
			onChange(v);
		}
	};

	const mounted = () => {
		setLoading(false);
	};

	return (
		<Fragment>
		</Fragment>
	);
};
export default Editor;
