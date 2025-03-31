import useLocationColor from "@/app/hooks/useLocationColor";
import { PropsWithChildren } from "react";
import { ListElement, MenuLabel } from "./LinksListElement.styles";
import Link from "next/link";
import { usePathname } from "next/navigation";

export type ListElementProps = PropsWithChildren & {
  linkToPage: string;
  label: string;
  newWindow?: boolean;
  externalLink?: boolean;
};

const LinksListElement = ({
  linkToPage,
  label,
  children,
  externalLink,
}: ListElementProps) => {
  const color = useLocationColor();
  const pathname = usePathname();
  return (
    <ListElement>
      <Link
        className={pathname === linkToPage ? "isActive" : ""}
        color={color}
        passHref={externalLink ? true : false}
        href={linkToPage}
        target={externalLink ? "_blank" : ""}
      >
        {children}
        <MenuLabel>{label}</MenuLabel>
      </Link>
    </ListElement>
  );
};

export default LinksListElement;
