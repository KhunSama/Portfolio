import profileImg from "../data/images/profile.jpg";

export const PROFILE = {
  name: "Khun Sama",
  picture: profileImg,
  jpName: "チャチャポン シングエーキャン",
  role: "Chatchapol Singhachan · Computer Science Student",
  tagline: "Building small, thoughtful software — while learning new things along the way.",
  email: "chatchapol.sin@gmail.com",
  github: "https://github.com/KhunSama",
  instagram: "https://instagram.com/ch__24s",
  linkedin: "https://www.linkedin.com/in/chatchapol-singhachan-451335430/",
  about: [
    "I'm a Computer Science student who loves turning ideas and problems into working software. My goal is to become an AI engineer who ships useful, human-friendly products.",
    "I enjoy learning about things that interest me, and I believe that the best way to learn is by doing. I like to build small projects that solve real problems, and I try to keep my code clean and maintainable.",
  ],
  // [label, value] pairs shown in the About card
  facts: [
    ["Studying", "Computer Science"],
    ["Dream job", "AI Engineer"],
    ["Level", "Beginner → Intermediate"],
    ["Based in", "Bangkok"],
  ],
};

export const PROJECTS = [
  { kanji: "猫", title: "File Management", tags: ["Python", "Git"], desc: "A simple file management tool built with Python. No more terminal commands!, We now have a interfaces!" },
  { kanji: "書", title: "Study Notes App", tags: ["React", "Tailwind"], desc: "Minimal markdown notes app with tags, search and dark mode." },
  { kanji: "話", title: "Chat Assistant Bot", tags: ["Python", "LLM API"], desc: "Course-FAQ chatbot that answers from lecture notes." },
];

export const RESUME = {
  education: [
    { when: "2025 – Present", title: "B.Sc. Digital Science and Technology", place: "Mahidol University", note: "Relevant: Data Structures, Software Engineering, Database management" },
  ],
  experience: [
    { when: "Summer 2025", title: "Software Intern", place: "Company Name", note: "Built internal dashboard features with React." },
  ],
  skills: ["Python", "JavaScript", "React", "Tailwind CSS", "SQL"],
};
