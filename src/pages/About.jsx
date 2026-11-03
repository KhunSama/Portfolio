import { PROFILE } from "../data/profile";
import { Heading, Card } from "../components/ui";
import frame from "../data/images/Avatar.png";

export default function About({ go }) {
  return (
    <section>
      <Heading jp="私について" en="About" />
        <section 
          className="
            min-h-[50vh] 
            flex flex-col 
            md:flex-row 
            items-center 
            justify-center 
            gap-20 
            text-center 
            md:text-left
          ">

          {/* Wrapper: the float animation moves from <img> to here so both layers float together */}
          <div className="float relative shrink-0 w-56 h-56 md:w-60 md:h-60">
            {/* Layer 1: profile photo */}
            <img
              src={PROFILE.picture}
              alt={PROFILE.name}
              className="
                w-full h-full
                rounded-full
                object-cover
                shadow-xl
              "
            />

            {/* Layer 2: decorative frame overlay */}
            <img
              src={frame}
              alt=""
              aria-hidden="true"
              className="
                absolute
                top-1/2 left-1/2
                -translate-x-1/2 -translate-y-1/2
                w-[125%] max-w-none
                pointer-events-none
                select-none
              "
            />
          </div>

          <div className="rise">
            <p 
              className="
                font-serif 
                tracking-widest 
                text-red-700 
                dark:text-red-400
              ">
                {PROFILE.jpName}
              </p>
            <h1 
              className="
                font-serif 
                text-5xl 
                md:text-7xl 
                font-bold my-2
              ">
                {PROFILE.name}
            </h1>
            <p className="text-lg font-medium">{PROFILE.role}</p>
            <p className="mt-3 max-w-md opacity-80">{PROFILE.tagline}</p>
            <div 
              className="
                mt-6 mb-6
                flex 
                gap-3 
                justify-center 
                md:justify-start 
                flex-wrap
              ">
              <button onClick={() => go("portfolio")} 
                className="
                  px-6 
                  py-3 
                  rounded-full 
                  bg-stone-900 
                  text-white 
                  dark:bg-stone-100 
                  dark:text-stone-900 
                  font-bold 
                  hover:scale-105 
                  transition
                ">
                  See my work
                </button>
              <button onClick={() => go("contact")} 
                className="
                  px-6 py-3 
                  rounded-full 
                  border-2 
                  border-stone-900
                  dark:border-stone-100 
                  font-bold
                  hover:scale-105 
                  transition
                ">
                  Say hello
                </button>
            </div>
          </div>
        </section>
      <div className="grid md:grid-cols-5 gap-8">
        <div className="md:col-span-3 space-y-4 text-lg leading-relaxed">
          {PROFILE.about.map((p, i) => <p key={i}>{p}</p>)}
        </div>
        <Card className="md:col-span-2" delay={150}>
          <dl className="space-y-3">
            {PROFILE.facts.map(([k, v]) => (
              <div key={k} className="flex justify-between gap-4 border-b border-stone-400/40 pb-2">
                <dt className="opacity-70">{k}</dt>
                <dd className="font-bold text-right">{v}</dd>
              </div>
            ))}
          </dl>
        </Card>
      </div>
    </section>
  );
}
