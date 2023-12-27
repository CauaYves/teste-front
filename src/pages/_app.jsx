import ResetStyle from "@/styles";
import { FileContextProvider } from "@/contexts/fileContext";
import "@/styles/font.css";

export default function App({ Component, pageProps }) {
  return (
    <>
      <FileContextProvider>
        <ResetStyle />
        <Component {...pageProps} />
      </FileContextProvider>
    </>
  );
}
