import { RESUME } from "../data/profile";
import { Heading } from "../components/ui";

// A titled timeline (used for Education and Experience)
function Block({ title, items }) {
  return (
    <div className="mb-10">
      <h2 className="font-serif text-2xl font-bold mb-4">{title}</h2>
      <div className="border-l-4 border-red-700 dark:border-red-400 pl-6 space-y-6">
        {items.map((it) => (
          <div key={it.title} className="rise relative">
            <span className="absolute -left-[32px] top-1.5 w-3 h-3 rounded-full bg-red-700 dark:bg-red-400"></span>
            <p className="text-sm opacity-70">{it.when}</p>
            <h3 className="font-bold text-lg">{it.title} <span className="font-normal opacity-70">· {it.place}</span></h3>
            <p className="opacity-80">{it.note}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default function Resume() {
  return (
    <section>
      <Heading jp="履歴書" en="Resume" />
      <Block title="Education" items={RESUME.education} />
      <Block title="Experience" items={RESUME.experience} />
      <h2 className="font-serif text-2xl font-bold mb-4">Skills</h2>
      <div className="flex gap-3 flex-wrap">
        {RESUME.skills.map((s, i) => (
          <span key={s} style={{ animationDelay: i * 60 + "ms" }} className="rise px-4 py-2 rounded-full border-2 border-stone-900 dark:border-stone-100 font-medium">{s}</span>
        ))}
      </div>
    </section>
  );
}
