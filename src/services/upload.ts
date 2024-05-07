import { picture } from './api';
import { Upload } from './request';

export const uploadImage = async (
	blobInfo: { blob: () => any },
): Promise<string> => {
	const file = blobInfo.blob(); // 转化为易于理解的file对象
	const formData = new FormData();
	formData.append('file', file);
	const res = await Upload(`${picture}/`, formData);
	const promise: Promise<string> = new Promise((resolve, reject) => {
		if (!res) {
			reject(`Invalid JSON: ${res}`);
			return;
		}
		resolve(res.data.src);
	});
	return promise
};
