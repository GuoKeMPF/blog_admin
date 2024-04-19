import { DashboardResponseType, UseDashboardReturnType, UseDashboardType } from "@/interface";
import { getDashboard } from "@/services";

import { useState, useEffect } from "react";



export const useDashboard = ({ onSuccess, onError, onFinally, initValue }: UseDashboardType = {}): UseDashboardReturnType => {

  const [data, setData] = useState<DashboardResponseType | undefined>(initValue);
  const [loading, setLoading] = useState<boolean>(false);
  const [isError, setIsError] = useState<boolean>(false);

  const fetchData = async () => {
    setLoading(true);
    try {
      const response = await getDashboard();
      setData(response);
      onSuccess && onSuccess();
    } catch (error) {
      setIsError(true);
      onError && onError(error as Error);
    } finally {
      setLoading(false);
      onFinally && onFinally();
    }
  };

  useEffect(() => {
    if (!initValue) {
      fetchData();
    }
  }, []);




  const reFetch = () => {
    setIsError(false);
    fetchData();
  }



  return {
    data,
    loading,
    isError,
    reFetch
  }
}



