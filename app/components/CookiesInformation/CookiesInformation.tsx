"use client";
import {
  Button,
  ButtonsWrapper,
  CookieImage,
  CookiesInfoContent,
  CookiesInfoDialog,
  CookiesParagraph,
  CookieTextWrapper,
} from "./CookiesInformation.styles";
import cookieImage from "../../assets/images/Cookie.svg";

import { getCookie, setCookie } from "cookies-next/client";
import { useEffect, useRef } from "react";

const COOKIE_NAME = "isCookiesInfoRed";

const CookiesInformation = () => {
  const dialogRef = useRef<HTMLDialogElement | null>(null);

  useEffect(() => {
    const isCookiesInformationRed = getCookie(COOKIE_NAME);
    if (!isCookiesInformationRed) {
      dialogRef.current?.showModal();
    }
  }, []);

  const setCookiesInformationAsRed = () => {
    const date = new Date();
    setCookie(COOKIE_NAME, "true", {
      expires: new Date(date.setDate(date.getDate() + 30)),
    });
    dialogRef.current?.close();
  };

  return (
    <CookiesInfoDialog ref={dialogRef}>
      <CookiesInfoContent>
        <CookieTextWrapper>
          <CookiesParagraph>
            This website needs some cookies to work properly.
          </CookiesParagraph>

          <CookieImage src={cookieImage} alt={"Cookie"} />
        </CookieTextWrapper>
        <ButtonsWrapper>
          <Button onClick={setCookiesInformationAsRed}>OK</Button>
        </ButtonsWrapper>
      </CookiesInfoContent>
    </CookiesInfoDialog>
  );
};

export default CookiesInformation;
