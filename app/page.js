import { React } from "react";
import Games from "./games";
import Search from "@/app/components/search";

export default function Home() {

  return (
    <div>
      <Search />
      <main className="flex justify-around">
        <section className="w-1/3 px-10">
          <h1>Título</h1>
          <br></br>
          <p>
            We know that you, as a bee, have worked your whole life to get to the  point where you can work for your whole life. Honey begins when our valiant Pollen Jocks bring the nectar to the hive. Our top-secret formula is automatically  color-corrected, scent-adjusted and bubble-contoured into this soothing sweet syrup with its distinctive golden glow you know as Honey!

            Most bee jobs are small ones.But bees know that every small job, if it's done well means a lot. But choose carefully because you'll stay in the job you pick for the rest of your life.
          </p>
        </section>

        <section className="w-2/3 h-[65vh] px-10">
          <h2>Critérios:</h2><br></br>
          <div className="flex justify-between">
            <select>
              <option value={0}>Selecione</option>
              <option value={0}>Selecione</option>
              <option value={0}>Selecione</option>
            </select>
            <select>
              <option value={0}>Selecione</option>
              <option value={0}>Selecione</option>
              <option value={0}>Selecione</option>
            </select>
            <select>
              <option value={0}>Selecione</option>
              <option value={0}>Selecione</option>
              <option value={0}>Selecione</option>
            </select>
            <select>
              <option value={0}>Selecione</option>
              <option value={0}>Selecione</option>
              <option value={0}>Selecione</option>
            </select>
            <select>
              <option value={0}>Selecione</option>
              <option value={0}>Selecione</option>
              <option value={0}>Selecione</option>
            </select>
          </div><br></br>
          <aside className="flex">
            <Games />
          </aside>
        </section>
      </main>
    </div>
  );
}