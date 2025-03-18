import { poppins, tektur } from "@/Config/fonts";
import "../globals.css";




export default function HomeLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${tektur.className} ${poppins.className} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
