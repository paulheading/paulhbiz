import { Navigation, Marquee, Topbar, Desktop, Email, Footer } from "layouts";
import { WidthHook, ScrollHook, CountHook, HeroHook } from "hooks";

export default function Layout({ children }) {
  return (
    <div className="component layout">
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
