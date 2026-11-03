import { PROJECTS } from "../data/profile";
import { Heading, Card } from "../components/ui";

function PortfolioSection({ jp, title, children }) {
  return (
    <div className="mb-14">
      <h2 className="font-serif text-2xl font-bold mb-5">
        <span className="text-red-700 dark:text-red-400 mr-3">{jp}</span>
        {title}
      </h2>
      {children}
    </div>
  );
}

function ProjectCard({ item, index }) {
  return (
    <Card key={item.title} delay={index * 120}>
      <div className="font-serif text-5xl text-red-700 dark:text-red-400 mb-3">{item.kanji}</div>
      <h2 className="font-bold text-xl">{item.title}</h2>
      <p className="my-2 opacity-80">{item.desc}</p>
      <div className="flex gap-2 flex-wrap">
        {item.tags && item.tags.map((t) => (
          <span key={t} className="text-xs font-bold px-2 py-1 rounded-full bg-stone-900 text-white dark:bg-stone-100 dark:text-stone-900">{t}</span>
        ))}
      </div>
    </Card>
  );
}

function ActivitiesCard({ item, index }) {
  return (
    <Card key={item.title} delay={index * 120}>
      <div className="font-serif text-5xl text-red-700 dark:text-red-400 mb-3">{item.kanji}</div>
      <h2 className="font-bold text-xl">{item.title}</h2>
      <p className="my-2 opacity-80">{item.desc}</p>
      <div className="flex gap-2 flex-wrap">
        {item.tags && item.tags.map((t) => (
          <span key={t} className="text-xs font-bold px-2 py-1 rounded-full bg-stone-900 text-white dark:bg-stone-100 dark:text-stone-900">{t}</span>
        ))}
      </div>
    </Card>
  );
}

function CardGrid({ items }) {
  return (
    <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-5">
      {items.map((item, i) => (
        <ProjectCard key={item.title} item={item} index={i} />
      ))}
    </div>
  );
}

export default function Portfolio() {
  return (
    <section>
      <Heading jp="作品" en="Portfolio" />
      <PortfolioSection jp="作" title="Projects"><CardGrid items={PROJECTS}/></PortfolioSection>
      <PortfolioSection jp="経" title="Activities"><CardGrid items={PROJECTS}/></PortfolioSection>
    </section>
  );
}
