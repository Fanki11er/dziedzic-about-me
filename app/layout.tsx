import StyledComponentsRegistry from "./lib/registry";
import Providers from "./providers/Providers";
import { Roboto, Montserrat } from "next/font/google";
import Navigation from "./components/Navigation/Navigation";
import Footer from "./components/Footer/Footer";
import AnimatedMobileNavigation from "./components/AnimatedMobileNavigation/AnimatedMobileNavigation";
import CookiesInformation from "./components/CookiesInformation/CookiesInformation";
import { getGlobalMetadata } from "./utilities/seo";

const roboto = Roboto({
  style: ["normal"],
  subsets: ["latin"],
  weight: "500",
});

export const montserrat = Montserrat({
  style: ["normal"],
  subsets: ["latin"],
  weight: ["400", "700"],
});

export const generateMetadata = () => getGlobalMetadata();

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <Providers>
      <html lang="en" className={roboto.className}>
        <body>
          <CookiesInformation />
          <AnimatedMobileNavigation />
          <Navigation />
          <StyledComponentsRegistry>{children}</StyledComponentsRegistry>
          <Footer />
        </body>
      </html>
    </Providers>
  );
}
