import { getSSRHeaders } from "./";

import { dashboard } from './api';
import { Get, SSRGet } from './request';

import { DashboardResponseType } from "@/interface";


export const getDashboard = async (): Promise<DashboardResponseType> => Get(dashboard);

export const SSRGetDashboard = (): Promise<DashboardResponseType> => {
  return SSRGet(dashboard)
};
