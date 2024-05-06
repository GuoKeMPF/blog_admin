import styles from "./index.module.css";

import { Input, InputProps, Label } from "@/components/ui";

import { cn } from "@/lib";

import React, { useId, Fragment, forwardRef, type FC, ForwardRefExoticComponent, useState, useMemo } from "react";



interface UploadDragOwnProps extends InputProps {

}

// 使用forwardRef创建一个转发ref的组件
export const UploadDrag: ForwardRefExoticComponent<UploadDragOwnProps &
	React.RefAttributes<HTMLInputElement>> = forwardRef(({ onChange, id, className, value, ...others }, ref) => {

		const use_id = useId();

		const htmlForId = useMemo(() => id || use_id, [id, use_id])

		const files = useMemo((): File[] => {
			if (value instanceof File) {
				return [value];
			}
			if (value instanceof FileList) {
				return Array.from(value);
			}
			if (value instanceof Array) {
				return value as File[];
			}
			return [];
		}, [value]);

		const onFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
			onChange?.(Array.from(e.target.files || []));
		};

		const onDrop = (e: React.DragEvent<HTMLLabelElement>) => {
			e.preventDefault();
			e.stopPropagation();
			onChange?.(Array.from(e.dataTransfer.files || []));
		};

		const onDragEnter = (e: React.DragEvent<HTMLLabelElement>) => {
			e.preventDefault();
			e.stopPropagation();
		}

		const onDragOver = (e: React.DragEvent<HTMLLabelElement>) => {
			e.preventDefault();
			e.stopPropagation();
		}


		// 确保ref被传递给Input组件
		return (
			<Fragment>
				<Input {...others} id={htmlForId} type="file" onChange={onFileChange} ref={ref}
					className={styles.visually_hidden}
				/>
				<Label
					htmlFor={htmlForId}
					className={cn(className, `w-full min-h-24 flex flex-col justify-center items-center
					text-muted-foreground
					rounded-md border border-input bg-transparent px-3 py-1 text-sm shadow-sm transition-colors file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50`)}
					onDragEnter={onDragEnter}
					onDragOver={onDragOver}
					onDrop={onDrop}
				>Click or drag file to this area to upload</Label>
				{
					files?.map((file, index) => {
						return <div className="text-sm text-muted-foreground" key={index}>{file.name}</div>
					})
				}
			</Fragment>
		);
	});

UploadDrag.displayName = 'UploadDrag';

export default UploadDrag;