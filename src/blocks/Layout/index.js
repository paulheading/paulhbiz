
import { NavigationBlock, MarqueeBlock, TopbarBlock, DesktopBlock, EmailBlock, FooterBlock } from "blocks";
import { WidthHook, ScrollHook, CountHook, HeroHook } from "hooks";

export default function Layout({ children }) {
  return (
    <div className="component layout">
      <WidthHook />
      <ScrollHook />
      <CountHook />
      <HeroHook />
      <NavigationBlock />
      { children }
      <MarqueeBlock />
      <TopbarBlock />
      <DesktopBlock />
      <EmailBlock />
      <FooterBlock />
    </div>
  );
}
        
        
        