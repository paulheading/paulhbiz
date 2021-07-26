import { useRouter } from "next/router";
import { Navigation, Marquee, Topbar, Desktop, Email, Footer } from "layouts";
import { WidthHook, CountHook, HeroHook } from "hooks";
import { print } from "scripts/helpers";

export default function Layout({ children }) {
  const path = useRouter().pathname;

  return (
    <div className={`component layout ${print.route(path)}`}>
      <WidthHook />
      <CountHook />
      <HeroHook />
      <Navigation />
      {children}
      <Marquee />
      <Topbar />
      <Desktop />
      <Email />
      <Footer />
    </div>
  );
}
