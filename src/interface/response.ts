export interface PaginationType<T> {
  data: T[];
  count: number,
  size: number,
  page: number,
}


export type AudioType = {
  id: string;
  src: string;
  create_time?: string;
  name: string;
  description: string;
  unique_name: string;
};
export type AudiosType = AudioType[];


export interface DashboardResponseType {
  draft: number;
  post: number;
  picture: number;
  audio: number;
}


export interface DraftType {
  id: string;
  content: string;
  title: string;
  description: string;
  views: boolean;
  [key: string]: any;
}


export type Draft = {
  id: string;
  content: string;
  title: string;
  description: string;
  [key: string]: any;
};
export type Drafts = DraftType[];


export type PictureType = {
  id: string;
  src: string;
  create_time?: string;
  name: string;
};
export type PictureTypes = PictureType[];



export interface PostType {
  id: string;
  content: string;
  title: string;
  description: string;
  type?: string;
  views: boolean;
  [key: string]: any;
}

export type Post = {
  id: string;
  content: string;
  title: string;
  description: string;
  [key: string]: any;
};
export type Posts = PostType[];

export interface LoginParamsType {
  account: string;
  password: string;
}


