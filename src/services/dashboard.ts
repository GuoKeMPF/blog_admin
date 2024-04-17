import { dashboard } from './api';
import { Get } from './request';

import { DashboardResponseType } from "@/interface";

export const getDashboard = async (): Promise<DashboardResponseType> => Get(dashboard);
