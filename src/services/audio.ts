import { Get, Post, Delete } from './request';
import { audio, audios } from './api';

export async function queryAudios(params: any) {
	const { size = 10, page = 1, ...others } = params ?? {};
	return Get(`${audio}/`, { size, page, ...others });
}

export async function queryAudioByID({ id }: { id: string }) {
	return Get(`${audio}/${id}`);
}

export async function createAudio(data: FormData) {
	return Post(`${audio}/`, data);
}
export async function createAudios(data: FormData) {
	return Post(`${audios}/`, data);
}

export async function deleteAudio({ id }: { id: string }) {
	return Delete(`${audio}/${id}/`);
}
