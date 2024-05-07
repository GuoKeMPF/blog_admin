import { Get, Post, Delete } from './request';
import { picture, pictures } from './api';

import { PictureType, PaginationType, RequestPaginationType, ID } from "@/interface";
export async function queryPictures(params?: RequestPaginationType): Promise<PaginationType<PictureType>> {
	const { size = 12, page = 1, ...others } = params ?? {};
	return Get(`${picture}/`, { size, page, ...others });
}

export async function queryPicture({ id }: { id: ID }): Promise<PictureType> {
	return Get(`${picture}/${id}`);
}

export async function createPicture(data: FormData) {
	return Post(`${picture}/`, data);
}
export async function createPictures(data: FormData) {
	return Post(`${pictures}/`, data);
}

export async function deletePicture({ id }: { id: string }) {
	return Delete(`${picture}/${id}/`);
}
