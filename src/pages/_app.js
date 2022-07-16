import "../../styles/globals.css";
import "remixicon/fonts/remixicon.css";
import MainLayout from "../layout/MainLayout";

function MyApp({ Component, pageProps }) {
  return (
    <MainLayout>
      <Component {...pageProps} />
    </MainLayout>
  );
}

export default MyApp;
