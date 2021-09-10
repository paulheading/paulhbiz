import { useEffect } from "react";
import { useDispatch } from "react-redux";
import get from "scripts/getters";
import { npm, gem, spotify, trello, medium } from "store/actions";

export default function DesktopHook() {

  const write = useDispatch();

  useEffect(() => {
    (async () => {
      const data = {
        npm: await get.Npm(),
        gem: await get.Gem(),
        spotify: await get.Spotify(),
        trello: await get.Trello(),
        medium: await get.Medium(),
      }
      if (data.npm) { write(npm(data.npm)); }
      if (data.gem) { write(gem(data.gem)); }
      if (data.spotify) { write(spotify(data.spotify)); }
      if (data.trello) { write(trello(data.trello)); }
      if (data.medium) { write(medium(data.medium)); }
    })();
  }, [write]);

  return null;
}