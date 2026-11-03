import Scene from "../components/Scene";

export default function Home() {
  return (
    <section 
      className="
        min-h-[65vh] 
        flex flex-col 
        md:flex-row 
        items-center 
        justify-center 
        gap-20 
        text-center 
        md:text-left
      ">
      <Scene />
    </section>
  );
}
