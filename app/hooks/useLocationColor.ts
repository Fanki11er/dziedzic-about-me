import { usePathname } from "next/navigation";
import { getColorForLocation } from "../utilities/utilities";

const useLocationColor = () => {
  const pathname = usePathname();

  return getColorForLocation(pathname);
};

export default useLocationColor;
