import { React } from "react";
import Games from "./games";
import Navbar from "@/app/components/navbar";
import Mesa from "@/app/components/mesa";

export default function Home() {

  return (
    <div className="h-screen w-screen flex flex-row">
      <aside>
        <Navbar />
      </aside>
      <div className="mt-[100px] mb-[20px] w-full flex justify-center">
        <Mesa />
      </div>
    </div>
  );
}