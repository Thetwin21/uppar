import Wrapper from "@/comps/Wrapper";
import "./globals.css";
import Sidebar from "@/comps/Sidebar";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

export const metadata = {
  title: "uppa",
  description: "defi app",
};
import { Open_Sans, Roboto_Mono } from 'next/font/google'

const openSans = Open_Sans({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-opensans',
})

const robotoMono = Roboto_Mono({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-roboto-mono',
})

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${openSans.variable} ${robotoMono.variable} `}>
      <body className="w-full font-mono">
        <div className="flex min-h-screen h-full w-screen ">
          <Sidebar />
          <main className="flex-1">
            <Wrapper>
              <div className="pl-9 pt-7">{children}</div>
            </Wrapper>
          </main>
        </div>
      </body>
    </html>
  );
}
