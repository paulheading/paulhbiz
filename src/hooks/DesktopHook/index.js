import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { getNpmData, getGemData, getSpotifyData, getTrelloData } from "modules";
import { npm, gem, spotify, trello } from "store/actions";

export default function DesktopHook() {

  const write = useDispatch();

  useEffect(() => {
    (async () => {
      const data = {
        npm: await getNpmData(),
        gem: await getGemData(),
        spotify: await getSpotifyData(),
        trello: await getTrelloData(),
      }
      if (data.npm) { write(npm(data.npm)); }
      if (data.gem) { write(gem(data.gem)); }
      if (data.spotify) { write(spotify(data.spotify)); }
      if (data.trello) { write(trello(data.trello)); }
    })();
  }, [write]);

  return null;
}