import React from "react";
export default function Experience() {
  const experiences = [
    {
      title: "TheGym Trainee Program",
      desc: "Software training with coding and soft skills.",
    },
    {
      title: "SheCanCode Participant",
      desc: "Advanced programming and teamwork.",
    },
    {
      title: "Gaba Women Leader",
      desc: "Leading women’s initiatives in the community.",
    },
    { title: "Kigali Peace Marathon Medalist", desc: "2024" },
  ];
  return (
    <section id="experience" className="mt-12">
      <h3 className="text-xl font-semibold mb-3">Experience & Achievements</h3>
      <div className="grid sm:grid-cols-2 gap-4">
        {experiences.map((e) => (
          <div key={e.title} className="bg-white p-4 rounded-2xl shadow-sm">
            <h4 className="font-medium">{e.title}</h4>
            <p className="text-sm text-gray-600">{e.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
