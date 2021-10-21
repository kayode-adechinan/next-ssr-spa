import "../styles/globals.css";
import Spinner from "../components/spinner";
function MyApp({Component, pageProps}) {
  return (
    <>
      <Component {...pageProps} />
      <Spinner />
    </>
  );
}

export default MyApp;
