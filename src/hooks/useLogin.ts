import { login } from "@/services";

import { useState } from "react";

interface UseLoginType {
  onSuccess?: () => void;
  onError?: (error: Error) => void;
  onFinally?: () => void;
}

interface UseLoginReturnType {
  onLogin: (data: any) => void;
  loading: boolean;
}

export const useLogin = ({ onSuccess, onError, onFinally }: UseLoginType): UseLoginReturnType => {

  const [loading, setLoading] = useState<boolean>(false);

  const onLogin = async (data: any) => {
    setLoading(true);
    try {
      const res = await login(data);
      setLoading(false);
      onSuccess && onSuccess();
    } catch (error: any) {
      onError && onError(error as Error);
    } finally {
      onFinally && onFinally();
      setLoading(false);
    }
  }

  return { onLogin, loading }
}
