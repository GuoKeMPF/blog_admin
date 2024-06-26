import { user } from './api';
import { Get, Post } from './request';

import type { LoginParamsType, LoginResponseType } from '@/interface';

export const login = async (data: LoginParamsType): Promise<LoginResponseType> => Post(user.login, data);

export const logout = async () => Post(user.logout);

export const getUserInfo = async () => Get(user.getUserInfo);
