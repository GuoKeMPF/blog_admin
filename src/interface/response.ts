export type PaginationTotalType = number
export type ID = string

export interface RequestPaginationType {
	page?: number
	size?: number
}

export interface PaginationType<T> {
	data: T[]
	count: PaginationTotalType
	size: number
	page: number
}

export type AudioType = {
	id: string
	src: string
	create_time?: string
	name: string
	description: string
	unique_name: string
}
export type AudiosType = AudioType[]

export interface DashboardResponseType {
	draft: number
	post: number
	picture: number
	audio: number
}

export interface DraftParamsType {
	content: string
	title: string
	description: string
}

export interface EditDraftParamsType extends DraftParamsType {
	id: string
}


export interface DraftType extends DraftParamsType {
	id: string
	views: number
}

export type Drafts = DraftType[]
export interface DraftsResponseType extends PaginationType<DraftType> {}

export type PictureType = {
	id: string
	src: string
	create_time?: string
	name: string
}
export type PictureTypes = PictureType[]

export interface PostType {
	id: string
	content: string
	title: string
	description: string
	type?: string
	views: boolean
	[key: string]: any
}

export type Post = {
	id: string
	content: string
	title: string
	description: string
	[key: string]: any
}
export type Posts = PostType[]

export interface LoginParamsType {
	account: string
	password: string
}

export interface LoginResponseType {
	csrftoken: string
	username: string
}
