"use client";
import { useCallback } from "react";

type Props = {
  name: string;
};

const useStorage = ({ name }: Props) => {
  const setCookie = useCallback(
    (value: string) => {
      window.sessionStorage.setItem(name, value);
    },
    [name]
  );

  const getCookie = useCallback(() => {
    return window.sessionStorage.getItem(name);
  }, [name]);

  return {
    setCookie,
    getCookie,
  };
};

export default useStorage;
