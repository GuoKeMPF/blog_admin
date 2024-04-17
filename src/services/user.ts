import { user } from './api';
import { Post } from './request';

import type { LoginParamsType } from '@/interface';

export const login = async (data: LoginParamsType) => Post(user.login, data);

export const logout = async () => Post(user.logout);
