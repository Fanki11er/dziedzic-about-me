export const theme = {
  colors: {
    gray: "rgba(173, 173, 173, 1)",
    transparentGray: "rgba(173, 173, 173, 0.5)",
    lightBlue: "rgba(57, 93, 187,1)",
    lighterBlue: "rgba(44, 91, 224, 1)",
    veryLightBlue: "rgba(19,179,242, 1)",
    darkerBlue: "#3B4A84",
    lightGray: "rgba(245, 246,249, 1)",
    dark: "#2E2D40",
    orange: "rgba(249,144,109,1)",
    lightOrange: "rgba(251, 172,57, 1)",
    transparentBlue: "rgba(88, 101, 150, 0.94)",
    turquoise: "rgba(82, 188,203, 1)",
    projects: "#3A2876",
    contact: "#3B1142",
    transparentContact: "rgba(59, 17, 66, 0.8)",
    lightTurquoise: "rgba(66, 233, 197, 1)",
    red: "rgba(217, 72, 99, 1)",
    darkBlue: "#1D2355",
    menuBlue: "rgba(94, 143, 204, 1)",
  },
  minScreen: "320px",
  mainPadding: "6rem",

  fontSizes: {
    XXS: "0.625rem", // 10px
    XS: "0.875rem", // 14px
    S: "1.25rem", // 20px
    M: "1.5625rem", // 25px
    L: "1.875rem", // 30px
    XL: "3.125rem", // 50px
    XXL: "6.25rem", // 100px
  },
};

export type Theme = typeof theme;
export default theme;
