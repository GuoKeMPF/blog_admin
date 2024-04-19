import { DashboardResponseType } from ".";

export interface UseDashboardType {
  onSuccess?: () => void;
  onError?: (error: Error) => void;
  onFinally?: () => void;
  initValue?: DashboardResponseType;
}


export interface UseDashboardReturnType {
  data: DashboardResponseType | undefined;
  loading: boolean;
  isError: boolean;
  reFetch: () => void;
}
