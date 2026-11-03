import { useState } from "react";
import { PROFILE } from "../data/profile";
import { Heading } from "../components/ui";

const inputStyle = "w-full rounded-xl border-2 border-stone-900 dark:border-stone-100 bg-white/70 dark:bg-white/5 p-3 focus:outline-none focus:ring-4 ring-red-700/40";

export default function Contact() {
  const [form, setForm] = useState({ name: "", msg: "" });

  // No backend: opens the visitor's email app with the message pre-filled.
  const send = (e) => {
    e.preventDefault();
    window.location.href =
      "mailto:" + PROFILE.email +
      "?subject=" + encodeURIComponent("Hello from " + form.name) +
      "&body=" + encodeURIComponent(form.msg);
  };

  return (
    <section className="max-w-xl">
      <Heading jp="連絡" en="Contact" />
      <p className="mb-6 text-lg">Questions, collaborations, or just a chat about AI and technologies — I'd love to hear from you.</p>
      <form onSubmit={send} className="space-y-4">
        <input className={inputStyle} placeholder="Your name" required value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })} />
        <textarea className={inputStyle} rows="5" placeholder="Your message" required value={form.msg} onChange={(e) => setForm({ ...form, msg: e.target.value })} />
        <button className="px-8 py-3 rounded-full bg-red-700 text-white font-bold hover:scale-105 transition">Send via email</button>
      </form>
      <p className="mt-4 opacity-70">Or write to <span className="font-bold">{PROFILE.email}</span></p>
    </section>
  );
}
