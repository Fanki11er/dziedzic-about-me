import useLocationColor from "../hooks/useLocationColor";
import { BackgroundSvg } from "./FooterBackground.styles";

const FooterBackground = () => {
  const backgroundColor = useLocationColor();

  return (
    <BackgroundSvg
      width="1920"
      height="329.69"
      viewBox="0 0 1920 329.69"
      preserveAspectRatio="xMidYMid slice"
    >
      <defs>
        <linearGradient
          id="FooterLg1"
          x1="0.015"
          y1="0.5"
          x2="1"
          y2="0.5"
          gradientUnits="objectBoundingBox"
        >
          <stop offset="0" stopColor="#f9d377" />
          <stop offset="1" stopColor="#f86e68" />
        </linearGradient>
        <linearGradient
          id="FooterLg2"
          y1="0.5"
          x2="1"
          y2="0.5"
          gradientUnits="objectBoundingBox"
        >
          <stop offset="0" stopColor="#e498f1" />
          <stop offset="1" stopColor="#7d98fb" />
        </linearGradient>
        <linearGradient
          id="FooterLg4"
          x1="0.987"
          y1="0.5"
          x2="0.032"
          y2="0.5"
          gradientUnits="objectBoundingBox"
        >
          <stop offset="0" stopColor="#52becc" />
          <stop offset="1" stopColor="#5682b4" />
        </linearGradient>
        <linearGradient
          id="FooterLg5"
          y1="0.5"
          x2="0.984"
          y2="0.5"
          gradientUnits="objectBoundingBox"
        >
          <stop offset="0" stopColor="#5e8ccc" />
          <stop offset="1" stopColor="#41ecc5" />
        </linearGradient>
      </defs>
      <g id="FooterBackground" transform="translate(0 -955.31)">
        <path
          id="FooterWrapper"
          d="M0,131.461s485.639,34.983,790.6,37.671,416.492-4.5,500.91-86.4c193.657-173.1,97.375,33.826,331.815,15.175S1920,0,1920,0V329.69H0Z"
          transform="translate(0 955.31)"
          fill={backgroundColor}
        />
        <g id="Lines">
          <g
            id="Rectangle_103"
            data-name="Rectangle 103"
            transform="translate(103 1163)"
            stroke="transparent"
            strokeWidth="1"
          >
            <rect width="206" height="24" rx="12" stroke="none" />
            <rect
              x="0.5"
              y="0.5"
              width="205"
              height="23"
              rx="11.5"
              fill="url(#FooterLg1)"
            />
          </g>
          <g
            id="Rectangle_104"
            data-name="Rectangle 104"
            transform="translate(271 1226)"
            stroke="transparent"
            strokeWidth="1"
            fill="url(#FooterLg2)"
          >
            <rect width="190" height="24" rx="12" stroke="none" />
            <rect
              x="0.5"
              y="0.5"
              width="189"
              height="23"
              rx="11.5"
              fill="url(#FooterLg2)"
            />
          </g>
          <g
            id="Rectangle_106"
            data-name="Rectangle 106"
            transform="translate(1239 1224)"
            stroke="transparent"
            strokeWidth="1"
            fill="url(#FooterLg1)"
          >
            <rect width="347" height="24" rx="12" stroke="none" />
            <rect
              x="0.5"
              y="0.5"
              width="346"
              height="23"
              rx="11.5"
              fill="url('#FooterLg1')"
            />
          </g>
          <g
            id="Rectangle_108"
            data-name="Rectangle 108"
            transform="translate(1413 1096)"
            fill="#adadad"
            stroke="transparent"
            strokeWidth="1"
          >
            <rect width="202" height="24" rx="12" stroke="none" />
            <rect
              x="0.5"
              y="0.5"
              width="201"
              height="23"
              rx="11.5"
              fill="#adadad"
            />
          </g>
          <rect
            id="Rectangle_109"
            data-name="Rectangle 109"
            width="100"
            height="24"
            rx="12"
            transform="translate(1348 1038)"
            fill="url(#FooterLg4)"
          />
          <g
            id="Rectangle_110"
            data-name="Rectangle 110"
            transform="translate(332 1163)"
            fill="#adadad"
            stroke="transparent"
            strokeWidth="1"
          >
            <rect width="22" height="24" rx="11" stroke="none" />
            <rect
              x="0.5"
              y="0.5"
              width="21"
              height="23"
              rx="10.5"
              fill="#adadad"
            />
          </g>
          <g
            id="Rectangle_122"
            data-name="Rectangle 122"
            transform="translate(968 1162)"
            stroke="transparent"
            strokeWidth="1"
            fill="url(#FooterLg5)"
          >
            <rect width="380" height="24" rx="12" stroke="none" />
            <rect
              x="0.5"
              y="0.5"
              width="379"
              height="23"
              rx="11.5"
              fill="url(#FooterLg5)"
            />
          </g>
        </g>
      </g>
    </BackgroundSvg>
  );
};
export default FooterBackground;
