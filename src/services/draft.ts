import { Get, Post, Put, Delete } from './request';
import { draft } from './api';

import type { DraftType, PaginationType, ID, RequestPaginationType, DraftParamsType, EditDraftParamsType } from '@/interface';

export async function queryDrafts(params?: RequestPaginationType): Promise<PaginationType<DraftType>> {
	return Get(`${draft}/`, { size: params?.size ?? 10, page: params?.page ?? 1, });
}

export async function queryDraft({ id }: { id: ID }): Promise<DraftType> {
	return Get(`${draft}/${id}`);
}

export async function createDraft(data: DraftParamsType) {
	return Post(`${draft}/`, data);
}

export async function updateDraft(params: EditDraftParamsType) {
	const { id, ...data } = params
	return Put(`${draft}/${id}/`, data);
}

export async function deleteDraft({ id }: { id: ID }) {
	return Delete(`${draft}/${id}/`);
}
