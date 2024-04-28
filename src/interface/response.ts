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
	id: ID
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
	id: ID
}


export interface DraftType extends DraftParamsType {
	id: ID
	views: number
}

export type Drafts = DraftType[]
export interface DraftsResponseType extends PaginationType<DraftType> { }

export type PictureType = {
	id: ID
	src: string
	create_time?: string
	name: string
}
export type PictureTypes = PictureType[]

export interface PostType {
	id: ID
	content: string
	title: string
	description: string
	type?: string
	views: boolean
	[key: string]: any
}




export interface PostParamsType {
	content: string
	title: string
	description: string
}

export type Post = {
	id: ID
	content: string
	title: string
	description: string,
	views: number,
	[key: string]: any
}
export type Posts = PostType[]

export interface EditPostParamsType extends PostParamsType {
	id: ID
}




export interface LoginParamsType {
	account: string
	password: string
}

export interface LoginResponseType {
	csrftoken: string
	username: string
}
