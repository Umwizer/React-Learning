import React from "react";
export default function Contact() {
  return (
    <section id="contact" className="mt-12 bg-white p-6 rounded-2xl shadow-sm">
      <h3 className="text-xl font-semibold mb-3">Contact Me</h3>
      <p className="text-gray-700 mb-3">
        Feel free to reach out via email or visit my GitHub/LinkedIn profiles.
      </p>
      <ul className="space-y-2 text-gray-600">
        <li>Email: your.email@example.com</li>
        <li>
          GitHub:{" "}
          <a href="https://github.com/Umwizer" className="text-indigo-600">
            github.com/Umwizer
          </a>
        </li>
        <li>
          LinkedIn:{" "}
          <a
            href="https://www.linkedin.com/in/umwizerwa-ruth-292aa92b6"
            className="text-indigo-600"
          >
            linkedin.com/in/umwizerwa-ruth-292aa92b6
          </a>
        </li>
      </ul>
    </section>
  );
}
