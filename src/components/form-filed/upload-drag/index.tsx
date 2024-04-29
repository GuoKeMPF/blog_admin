import { Input, InputProps } from "@/components/ui";

import React, { Fragment, forwardRef, type FC, ForwardRefExoticComponent, useState } from "react";

interface UploadDragOwnProps extends InputProps {

}

// 使用forwardRef创建一个转发ref的组件
export const UploadDrag: ForwardRefExoticComponent<UploadDragOwnProps &
	React.RefAttributes<HTMLInputElement>> = forwardRef(({ onChange, ...others }, ref) => {
		const [files, setFiles] = useState<FileList | null>(null);
		const onFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
			console.log(e.target.files);
			if (e.target.files) {
				setFiles(e.target.files);
			}
			onChange?.(e);
		};

		// 确保ref被传递给Input组件
		return (
			<Fragment>
				<Input {...others} type="file" onChange={onFileChange} ref={ref} />
			</Fragment>
		);
	});

UploadDrag.displayName = 'UploadDrag';

export default UploadDrag;