import "../styles/globals.css";
import Header from "../components/Header";

export const metadata = {
  title: "NFT Marketplace",  // Corrected "titl" to "title"
  description: "Buy and sell NFTs easily"
};

export default function RootLayout({children}) {
  return(
    <html lang="en">
      <body>
        <Header />
        <main className="container">{children}</main>
      </body>
    </html>
  )
}
