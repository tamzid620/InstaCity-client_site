import { poppins, tektur } from "@/Config/fonts";
import "../globals.css";
import Navbar from "@/Components/UserShared/Navbar/Navbar";
import Footer from "@/Components/UserShared/Footer/Footer";




export default function HomeLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <div className="border-x-2 lg:max-w-lg md:max-w-md sm: max-w-sm h-screen mx-auto">
        <Navbar/>
        {children}
        <Footer/>
        </div>
      </body>
    </html>
  );
}
