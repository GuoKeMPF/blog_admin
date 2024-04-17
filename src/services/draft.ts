import { Get, Post, Put, Delete } from './request';
import { draft } from './api';

import type { DraftType, PaginationType } from '@/interface';

export async function queryDrafts(params: any): Promise<PaginationType<DraftType>> {
  return Get(`${draft}/`, { size: 12, page: 1, ...params });
}

export async function queryDraft({ id }: { id: string }): Promise<DraftType> {
  return Get(`${draft}/${id}`);
}

export async function addDraft(data: DraftType) {
  return Post(`${draft}/`, data);
}

export async function updateDraft(data: { id: string; data: DraftType }) {
  return Put(`${draft}/${data.id}/`, data);
}

export async function deleteDraft({ id }: { id: string }) {
  return Delete(`${draft}/${id}/`);
}
