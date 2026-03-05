import React from "react";

const professionalLessons = {
  c7: {
    blocks: [
      {
        title: "1. C'est quoi un adjectif qualificatif ?",
        text: [
          "Un adjectif qualificatif est un mot qui donne une information sur un nom (personne, animal, chose).",
          "Il peut preciser : la couleur, la taille, la qualite ou la forme.",
        ],
        list: [
          "la couleur : une robe rouge",
          "la taille : une maison grande",
          "la qualite : un eleve intelligent",
          "la forme : une table ronde",
        ],
        noteTitle: "Exemples",
        note: "Un chat noir. Une voiture rapide.",
      },
      {
        title: "2. Ou se place l'adjectif ?",
        text: ["L'adjectif peut etre avant ou apres le nom."],
        grid: [
          { title: "Avant le nom", text: "Un petit garcon, une belle fleur." },
          { title: "Apres le nom", text: "Une robe bleue, un exercice facile." },
        ],
      },
      {
        title: "3. L'accord de l'adjectif",
        alert:
          "Regle importante : l'adjectif s'accorde avec le nom en genre (masculin/feminin) et en nombre (singulier/pluriel).",
        subtitles: [
          {
            title: "A. Accord au feminin",
            text: "En general, on ajoute e au masculin.",
            table: {
              headers: ["Masculin", "Feminin"],
              rows: [
                ["petit", "petite"],
                ["grand", "grande"],
                ["noir", "noire"],
              ],
            },
            small: "Cas speciaux : heureux/heureuse, sportif/sportive, bon/bonne.",
          },
          {
            title: "B. Accord au pluriel",
            text: "En general, on ajoute s au singulier.",
            table: {
              headers: ["Singulier", "Pluriel"],
              rows: [
                ["petit", "petits"],
                ["grande", "grandes"],
              ],
            },
            small: "Si le mot finit deja par -s ou -x, on ne change rien.",
          },
        ],
      },
    ],
  },
  c8: {
    blocks: [
      {
        title: "1. C'est quoi un adjectif demonstratif ?",
        text: [
          "Il sert a montrer un nom : ce, cet, cette, ces.",
          "Le choix depend du genre et du nombre du nom.",
        ],
        table: {
          headers: ["Forme", "Usage", "Exemple"],
          rows: [
            ["ce", "masculin singulier", "ce livre"],
            ["cet", "masculin singulier devant voyelle/h muet", "cet arbre"],
            ["cette", "feminin singulier", "cette maison"],
            ["ces", "pluriel", "ces enfants"],
          ],
        },
      },
      {
        title: "2. Points a retenir",
        list: [
          "On n'utilise jamais ce devant une voyelle : on ecrit cet.",
          "Ces s'utilise pour masculin et feminin au pluriel.",
          "L'adjectif demonstratif est toujours place avant le nom.",
        ],
      },
    ],
  },
  c9: {
    blocks: [
      {
        title: "1. C'est quoi un adjectif possessif ?",
        text: [
          "Il indique l'appartenance : mon, ma, mes...",
          "Il s'accorde avec le nom possede, pas avec la personne qui possede.",
        ],
        table: {
          headers: ["Personne", "Masculin", "Feminin", "Pluriel"],
          rows: [
            ["je", "mon", "ma", "mes"],
            ["tu", "ton", "ta", "tes"],
            ["il/elle", "son", "sa", "ses"],
            ["nous", "notre", "-", "nos"],
            ["vous", "votre", "-", "vos"],
            ["ils/elles", "leur", "-", "leurs"],
          ],
        },
      },
      {
        title: "2. Regle utile",
        alert:
          "Devant un nom feminin qui commence par une voyelle, on utilise mon/ton/son : mon amie, ton ecole, son idee.",
      },
    ],
  },
  c10: {
    blocks: [
      {
        title: "1. Les adverbes de temps, maniere et lieu",
        text: [
          "L'adverbe complete souvent un verbe, un adjectif ou une phrase.",
          "Il est invariable : il ne change pas en genre ni en nombre.",
        ],
        table: {
          headers: ["Type", "Question", "Exemples"],
          rows: [
            ["Temps", "Quand ?", "hier, aujourd'hui, demain, maintenant"],
            ["Maniere", "Comment ?", "bien, mal, vite, lentement"],
            ["Lieu", "Ou ?", "ici, la-bas, partout"],
          ],
        },
      },
      {
        title: "2. Exemples",
        list: [
          "Il parle lentement. (maniere)",
          "Nous partons demain. (temps)",
          "Ils habitent ici. (lieu)",
        ],
      },
    ],
  },
  c11: {
    blocks: [
      {
        title: "1. La description physique",
        text: [
          "Pour decrire une personne, on utilise des adjectifs qui s'accordent avec le nom.",
        ],
        table: {
          headers: ["Masculin", "Feminin"],
          rows: [
            ["grand", "grande"],
            ["petit", "petite"],
            ["beau", "belle"],
            ["vieux", "vieille"],
            ["blond", "blonde"],
            ["brun", "brune"],
          ],
        },
      },
      {
        title: "2. Exemples de phrases",
        list: [
          "Mon pere est grand et brun.",
          "Ma soeur est petite et blonde.",
          "Ces filles sont sportives.",
        ],
      },
    ],
  },
};

function ProfessionalLesson({ lesson }) {
  if (!lesson) return null;

  return (
    <div className="lesson-pro">
      {lesson.blocks.map((block, idx) => (
        <section className="lesson-block" key={`block-${idx}`}>
          <h3>{block.title}</h3>

          {block.text &&
            block.text.map((line, i) => (
              <p key={`text-${idx}-${i}`} className={i === block.text.length - 1 ? "mb-2" : ""}>
                {line}
              </p>
            ))}

          {block.list && (
            <ul>
              {block.list.map((item, i) => (
                <li key={`li-${idx}-${i}`}>{item}</li>
              ))}
            </ul>
          )}

          {block.grid && (
            <div className="lesson-grid">
              {block.grid.map((card, i) => (
                <div className="lesson-card" key={`grid-${idx}-${i}`}>
                  <h4>{card.title}</h4>
                  <p className="mb-0">{card.text}</p>
                </div>
              ))}
            </div>
          )}

          {block.alert && <div className="lesson-alert">{block.alert}</div>}

          {block.table && (
            <table className="lesson-table">
              <thead>
                <tr>
                  {block.table.headers.map((header, i) => (
                    <th key={`th-${idx}-${i}`}>{header}</th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {block.table.rows.map((row, i) => (
                  <tr key={`tr-${idx}-${i}`}>
                    {row.map((cell, j) => (
                      <td key={`td-${idx}-${i}-${j}`}>{cell}</td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          )}

          {block.subtitles &&
            block.subtitles.map((subtitle, sidx) => (
              <div key={`subtitle-${idx}-${sidx}`}>
                <h4 className="lesson-subtitle">{subtitle.title}</h4>
                <p>{subtitle.text}</p>
                {subtitle.table && (
                  <table className="lesson-table">
                    <thead>
                      <tr>
                        {subtitle.table.headers.map((header, i) => (
                          <th key={`sth-${idx}-${sidx}-${i}`}>{header}</th>
                        ))}
                      </tr>
                    </thead>
                    <tbody>
                      {subtitle.table.rows.map((row, i) => (
                        <tr key={`str-${idx}-${sidx}-${i}`}>
                          {row.map((cell, j) => (
                            <td key={`std-${idx}-${sidx}-${i}-${j}`}>{cell}</td>
                          ))}
                        </tr>
                      ))}
                    </tbody>
                  </table>
                )}
                {subtitle.small && <p className="lesson-small mb-3">{subtitle.small}</p>}
              </div>
            ))}

          {block.note && (
            <div className="lesson-note">
              {block.noteTitle && <strong>{block.noteTitle}</strong>}
              <p className="mb-0">{block.note}</p>
            </div>
          )}
        </section>
      ))}
    </div>
  );
}

export default function CoursContent({ subsection, onBack, onStartExercise }) {
  if (!subsection) {
    return (
      <div className="course-container empty">
        {onBack && (
          <button className="btn btn-outline-secondary mt-3" onClick={onBack}>
            Retour
          </button>
        )}
      </div>
    );
  }

  return (
    <div className="course-container">
      <div className="mb-4 d-flex gap-2 flex-wrap">
        <button className="btn btn-outline-primary" onClick={onBack}>
          Retour aux sections
        </button>
        <button
          className="btn btn-success"
          onClick={() => onStartExercise && onStartExercise(subsection.sectionId)}
        >
          Faire les exercices
        </button>
      </div>

      <h1 className="course-title">{subsection.title}</h1>

      <div className="course-content shadow-sm rounded p-4 mb-4 bg-light">
        {professionalLessons[subsection.id] ? (
          <ProfessionalLesson lesson={professionalLessons[subsection.id]} />
        ) : (
          <p className="mb-0">{subsection.content}</p>
        )}
      </div>

    </div>
  );
}
