export type PaginationTotalType = number
export type ID = string

export interface RequestPaginationType {
	page?: number
	size?: number
}


export interface LoginParamsType {
	account: string
	password: string
}

export interface LoginResponseType {
	csrftoken: string
	username: string
}


export interface UserInfoType {
	username: string
	email: string
	avatar: string,
	first_name: string,
	last_name: string,
	is_staff: boolean,
	is_active: boolean,
	date_joined: string,
	last_login: string,
	groups: string[],
	user_permissions: string[],
	is_superuser: boolean
}


export interface PaginationType<T> {
	data: T[]
	count: PaginationTotalType
	size: number
	page: number
}


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

export interface DeleteDraftParamsType {
	id: ID
}

export interface DraftType extends DraftParamsType {
	id: ID
	views: number
}

export type Drafts = DraftType[]
export interface DraftsResponseType extends PaginationType<DraftType> { }

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

export interface DeletePostParamsType {
	id: ID
}



export type PictureType = {
	id: ID
	src: string
	create_time?: string
	name: string,
	description: string
	unique_name: string
}
export type PictureTypes = PictureType[]

export interface PictureParamsType {
	description: string
	file?: readonly string[]
}

export interface DeletePictureParamsType {
	id: ID
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

export interface AudioParamsType {
	description: string
	file?: readonly string[]
}

export interface EditAudioParamsType extends AudioParamsType {
	id: ID
}

export interface DeleteAudioParamsType {
	id: ID
}