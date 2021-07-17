import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { width } from "store/actions";

export default function WidthHook() {
  const write = useDispatch();
  useEffect(() => {
    let resize;
    write(width(window.innerWidth));
    window.addEventListener("resize", () => {
      clearTimeout(resize);
      resize = setTimeout(() => write(width(window.innerWidth)), 0);
    });
  }, [write]);

  return null;
};