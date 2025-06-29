import React from "react";
import {
  Music,
  Brush,
  Game,
  People,
  Microphone,
  Code,
  Mask,
  Activity,
} from "iconsax-react";

const categories = [
  { name: "Music", icon: <Music color="#845EC2" size={32} /> },
  { name: "Art", icon: <Brush color="#D65DB1" size={32} /> },
  { name: "Gaming", icon: <Game color="#0081CF" size={32} /> },
  { name: "Community", icon: <People color="#2cb67d" size={32} /> },
  { name: "Talks", icon: <Microphone color="#FF6F91" size={32} /> },
  { name: "Tech", icon: <Code color="#FFC75F" size={32} /> },
  { name: "Theater", icon: <Mask color="#F9F871" size={32} /> },
  { name: "Sports", icon: <Activity color="#00C9A7" size={32} /> },
];

const CategoriesSection = () => (
  <section className="w-full flex flex-col items-center py-20">
    <h2 className="text-3xl md:text-4xl font-extrabold text-white mb-10">
      Categories
    </h2>
    <div className="flex overflow-auto gap-8 w-full max-w-5xl no-scrollbar">
      {categories.map((cat, i) => (
        <div key={i} className="flex flex-col items-center justify-center gap-2 py-2">
          <div className="flex flex-col items-center justify-center bg-white/10 backdrop-blur-lg p-8 border border-white/10 shadow-lg hover:scale-105 transition-transform cursor-pointer group rounded-full w-fit">
            {cat.icon}
          </div>
          <span className="text-lg font-semibold text-white group-hover:text-[#845EC2] transition-colors text-center">
            {cat.name}
          </span>
        </div>
      ))}
    </div>
  </section>
);

export default CategoriesSection;
