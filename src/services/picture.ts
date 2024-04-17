import { Get, Post, Delete } from './request';
import { picture, pictures } from './api';

import { PictureType, PaginationType } from "@/interface";
export async function queryPictures(params: any): Promise<PaginationType<PictureType>> {
  return Get(`${picture}/`, { size: 12, page: 1, ...params });
}

export async function addPicture(data: FormData) {
  return Post(`${picture}/`, data);
}
export async function addPictures(data: FormData) {
  return Post(`${pictures}/`, data);
}

export async function deletePicture({ id }: { id: string }) {
  return Delete(`${picture}/${id}/`);
}
