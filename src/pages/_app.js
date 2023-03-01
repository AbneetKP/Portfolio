import "@/styles/globals.css";

export default function App({ Component, pageProps }) {
  return (
    <div className="bg-gradient-to-r from-cyan-800 to-blue-800 min-h-screen">
      <Component {...pageProps} />{" "}
    </div>
  );
}
