import { post } from './api';
import { Delete, Get, Post, Put } from './request';

import type { PostType, PaginationType, ID, PostParamsType, EditPostParamsType, DeletePostParamsType } from '@/interface';

export async function queryPosts(params: any): Promise<PaginationType<PostType>> {
	const { size = 10, page = 1, ...others } = params ?? {};
	return Get(`${post}/`, { size: 12, page: 1, ...params });
}

export async function queryPost({ id }: { id: ID }): Promise<PostType> {
	return Get(`${post}/${id}`);
}

export async function createPost(data: PostParamsType) {
	return Post(`${post}/`, data);
}

export async function updatePost(params: EditPostParamsType) {
	const { id, ...data } = params
	return Put(`${post}/${id}`, data);
}

export async function deletePost({ id }: DeletePostParamsType) {
	return Delete(`${post}/${id}`);
}
