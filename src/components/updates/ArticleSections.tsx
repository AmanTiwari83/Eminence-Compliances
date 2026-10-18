import type { ContentSection } from "../../types/content-types";
import { slugify } from "./utils";

export default function ArticleSections({ sections }: { sections: ContentSection[] }) {
  return (
    <div className="space-y-12">
      {sections.map((section) => (
        <section key={section.heading} id={slugify(section.heading)} className="scroll-mt-28">
          <h2 className="text-2xl font-semibold tracking-tight text-slate-900">
            {section.heading}
          </h2>
          <div className="mt-4 space-y-4 text-[1.0625rem] leading-8 text-slate-700">
            {section.paragraphs.map((p) => (
              <p key={p}>{p}</p>
            ))}
          </div>
          {section.points && (
            <ul className="mt-5 space-y-3 border-l-2 border-teal-700 pl-5 text-slate-800">
              {section.points.map((point) => (
                <li key={point} className="leading-7">
                  {point}
                </li>
              ))}
            </ul>
          )}
        </section>
      ))}
    </div>
  );
}