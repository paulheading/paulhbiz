import { Provider } from "react-redux";
import { useStore } from "store";
import { Main } from "layouts";

import "focus-visible/dist/focus-visible.min.js";
import "styles/main.scss";

export default function App({ Component, pageProps }) {
  const store = useStore(pageProps.initialReduxState);

  return (
    <Provider store={store}>
      <Main>
        <Component {...pageProps} />
      </Main>
    </Provider>
  );
}