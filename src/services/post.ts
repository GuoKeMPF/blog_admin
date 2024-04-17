import { post } from './api';
import { Delete, Get, Post, Put } from './request';

import type { PostType, PaginationType } from '@/interface';

export async function queryPosts(params: any): Promise<PaginationType<PostType>> {
  return Get(`${post}/`, { size: 12, page: 1, ...params });
}

export async function queryPost({ id }: { id: string }): Promise<PostType> {
  return Get(`${post}/${id}`);
}

export async function addPost(data: PostType) {
  return Post(`${post}/`, data);
}

export async function updatePost(data: { id: string; data: PostType }) {
  return Put(`${post}/${data.id}`, data);
}

export async function deletePost({ id }: { id: string }) {
  return Delete(`${post}/${id}`);
}
