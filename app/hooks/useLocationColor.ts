import { usePathname } from "next/navigation";
import { getColorForLocation } from "../utilities/utilities";

const useLocationColor = (manualPathname?: string) => {
  const pathname = usePathname();

  return getColorForLocation(manualPathname ? manualPathname : pathname);
};

export default useLocationColor;
