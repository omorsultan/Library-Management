import Header from "@/components/Header";
import {ReactNode} from "react";



const Layout = ({ children }: { children: ReactNode}) =>{
  return  <main className = "root-container">
    <div className = "mx-auto w-full max-w-7xl px-5">
      <Header />
   
    <div className="mt-20 pb-20">{children}</div>
    </div>
  </main>
};

export default Layout;