"use client";

import { ThemeProvider } from "styled-components";
import theme from "../styles/theme";
import GlobalStyles from "../styles/GlobalStyles";

const Providers = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  return (
    <>
      <GlobalStyles />
      <ThemeProvider theme={theme}>{children}</ThemeProvider>
    </>
  );
};

export default Providers;
