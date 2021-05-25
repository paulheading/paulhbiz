import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { siteWidth } from "actions";

export default function CalcWidth() {
  const write = useDispatch();
  useEffect(() => {
    let resize;
    write(siteWidth(window.innerWidth));
    window.addEventListener("resize", () => {
      clearTimeout(resize);
      resize = setTimeout(() => write(siteWidth(window.innerWidth)), 0);
    });
  }, [write]);

  return null;
};