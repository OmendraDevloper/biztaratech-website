import React from "react";
import { syllabus } from "../syllabus-mulesoft-ai";

const SyllabusPage = () => (
  <section className="max-w-2xl mx-auto py-12 pt-32">
    <h1 className="text-3xl font-bold mb-6">MuleSoft with AI – Syllabus</h1>
    <ol className="space-y-6">
      {syllabus.map((mod, idx) => (
        <li key={idx} className="bg-white rounded-lg shadow p-6">
          <h2 className="text-xl font-semibold mb-2">{mod.module}</h2>
          <ul className="list-disc ml-6 text-gray-700">
            {mod.topics.map((topic, i) => (
              <li key={i}>{topic}</li>
            ))}
          </ul>
        </li>
      ))}
    </ol>
  </section>
);

export default SyllabusPage;
