import "../globals.css";
import Navbar from "@/Components/UserShared/Navbar/Navbar";
import Footer from "@/Components/UserShared/Footer/Footer";




export default function HomeLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <div className=" lg:max-w-lg md:max-w-md sm: max-w-sm h-screen mx-auto">
          <Navbar />
          <main >{children}</main>
          <Footer />
        </div>

      </body>
    </html>
  );
}
