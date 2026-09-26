"use client";

import resume from "../../src/resume";

export default function ResumePage() {
  return <main className="bg-gray-100 pt-32 pb-20 min-h-screen overflow-auto">
    <div className="max-w-4xl m-auto px-4">
      <div className="mb-5 flex gap-3">
        <a href="/" className="px-4 py-2 border-green-400 border bg-green-200 hover:bg-green-300 text-gray-700 font-mono font-bold"><i className="fas fa-arrow-left mr-3" />Back</a>
        <button onClick={() => window.print()} className="px-4 py-1 font-bold font-mono text-gray-700 border-indigo-400 border bg-indigo-200 hover:bg-indigo-300"><i className="fas fa-print mr-3" />Print</button>
      </div>
      <article className="resume bg-white shadow-xl p-8 text-gray-700 space-y-6">
        <header>
          <h1 className="text-3xl font-extrabold">{resume.name}</h1>
          <ul className="mt-1 text-gray-600 flex flex-wrap gap-x-5 gap-y-1 text-sm">
            <li><a href={resume.website.url} target="_blank" rel="noreferrer"><i className="fas fa-globe mr-2" />{resume.website.label}</a></li>
            <li><a href={`mailto:${resume.email.url}`}><i className="fas fa-envelope mr-2" />{resume.email.label}</a></li>
            <li><a href={resume.linkedIn.url} target="_blank" rel="noreferrer"><i className="fab fa-linkedin mr-2" />{resume.linkedIn.label}</a></li>
            <li><a href={resume.github.url} target="_blank" rel="noreferrer"><i className="fab fa-github mr-2" />{resume.github.label}</a></li>
            <li><i className="fas fa-phone mr-2" />{resume.phoneNumber}</li>
            <li><i className="fas fa-map-marker-alt mr-2" />{resume.location}</li>
          </ul>
        </header>
        <ResumeSection title="Technical Skills"><div className="grid grid-cols-[auto_1fr] gap-x-2 text-xs">{Object.entries(resume.skills).map(([label, values]) => <ReactSkill key={label} label={label} values={values} />)}</div></ResumeSection>
        <ResumeSection title="Work Experience"><ul className="space-y-3">{resume.experiences.map((experience) => <li key={`${experience.company}-${experience.timeline}`}><div className="flex flex-wrap items-baseline gap-2"><strong>{experience.company}</strong><em>{experience.position}</em><span className="text-gray-400">{experience.location} | {experience.timeline}</span></div><ul className="list-square pl-4 text-sm">{experience.points.map((point) => <li key={point}>{point}</li>)}</ul></li>)}</ul></ResumeSection>
        <ResumeSection title="Education"><div className="flex justify-between"><strong>{resume.education.school}</strong><span>{resume.education.timeline}</span></div><div className="flex justify-between text-sm"><span>{resume.education.description}</span><strong>{resume.education.cgpa}</strong></div></ResumeSection>
        <ResumeSection title="Projects"><ul className="space-y-3">{resume.projects.map((project) => <li key={project.name}><div className="flex justify-between"><strong>{project.name}</strong><span>{project.github.map((item) => <a key={item.url} className="ml-3" href={item.url} target="_blank" rel="noreferrer"><i className="fab fa-github mr-1" />{item.repo}</a>)}</span></div><ul className="list-square pl-4 text-sm">{project.points.map((point) => <li key={point}>{point}</li>)}</ul></li>)}</ul></ResumeSection>
      </article>
    </div>
  </main>;
}

function ResumeSection({ title, children }) {
  return <section><h2 className="w-full text-teal-700 bg-teal-50 border-teal-700 pl-2 py-1 border-l-2 font-bold text-sm mb-2">{title}</h2>{children}</section>;
}

function ReactSkill({ label, values }) {
  return <><strong className="capitalize">{label}:</strong><span>{values.join(", ")}</span></>;
}