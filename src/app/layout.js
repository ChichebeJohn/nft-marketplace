import "../styles/globals.css";
import Header from "../components/Header";

export const metadata = {
  titl:"NFT Marketplace",
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