import { useCallback, useEffect } from "react";
const NAME = "INITIAL";

const useInitialRender = () => {
  const getIsInitial = useCallback(() => {
    return window.sessionStorage.getItem("INITIAL") === "false" ? false : true;
  }, []);
  useEffect(() => {
    const initial = window.sessionStorage.getItem("INITIAL");
    if (!initial) {
      window.sessionStorage.setItem(NAME, "true");
    } else {
      window.sessionStorage.setItem(NAME, "false");
    }
  }, []);
  return getIsInitial;
};

export default useInitialRender;
