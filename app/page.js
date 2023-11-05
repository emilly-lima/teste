"use client";

import Navbar from "@/app/components/navbar";
import { useRouter } from "next/navigation";
import { Button } from "@mui/material";
import TrendingSlider from "@/app/components/TrendingSlider";
export default function Home() {

  const router = useRouter();

  return (
    <div className="h-screen w-screen flex flex-col">
      <aside>
        <Navbar />
      </aside>
      <div className="m-auto w-full flex flex-col justify-center">
        <TrendingSlider />
        <Button onClick={() => router.push("/test")}>Página de Teste</Button>
      </div>
    </div>
  );
}