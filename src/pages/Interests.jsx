// ============================================================
// Interests page: layout only. To change WHAT is shown, edit
// src/data/interests.js (no React knowledge needed).
// ============================================================
import { HOBBIES, MUSIC, PERSONAL_INTERESTS, THINGS_I_LIKE } from "../data/interests";
import { Heading, Card } from "../components/ui";

// One titled block of the page (kanji + title + content).
function InterestSection({ jp, title, children }) {
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

// One card: photo (if `image` is set) or emoji, then title and note.
function InterestCard({ item, index }) {
  return (
    <Card delay={index * 100}>
      {item.image ? (
        <img src={item.image} alt={item.title} className="w-full h-32 object-cover rounded-xl mb-3" />
      ) : (
        <div className="text-5xl mb-3">{item.emoji}</div>
      )}
      <h3 className="font-bold text-lg">{item.title}</h3>
      <p className="opacity-80">{item.note}</p>
    </Card>
  );
}

// A responsive grid of cards built from any array of items.
function CardGrid({ items }) {
  return (
    <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-5">
      {items.map((item, i) => (
        <InterestCard key={item.title} item={item} index={i} />
      ))}
    </div>
  );
}

export default function Interests() {
  return (
    <section>
      <Heading jp="趣味" en="Interests" />

      <InterestSection jp="趣" title="Hobbies"><CardGrid items={HOBBIES} /></InterestSection>
      <InterestSection jp="音" title="Music"><CardGrid items={MUSIC} /></InterestSection>
      <InterestSection jp="心" title="Personal Interests"><CardGrid items={PERSONAL_INTERESTS} /></InterestSection>

      <InterestSection jp="好" title="Things I Like">
        <div className="flex flex-wrap gap-3">
          {THINGS_I_LIKE.map((thing, i) => (
            <span key={thing} style={{ animationDelay: i * 60 + "ms" }} className="rise px-4 py-2 rounded-full bg-red-700 text-white font-medium hover:scale-110 transition">
              {thing}
            </span>
          ))}
        </div>
      </InterestSection>
    </section>
  );
}
