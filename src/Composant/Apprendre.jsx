import React, { useState } from "react";
import CoursContent from "./CoursContent";
import ExerciceContent from "./ExerciceContent";
import Menu from "./Menu";

import { sections } from "./Sections";
import { coursData } from "./CoursData";
import { exercicesData } from "./ExercicesData";

import { FaBookOpen, FaClipboardList } from "react-icons/fa";

export default function Apprende() {
  const [selectedSub, setSelectedSub] = useState(null);
  const [selectedExSectionId, setSelectedExSectionId] = useState(null);
  const [openSectionId, setOpenSectionId] = useState(null);
  const [searchTerm, setSearchTerm] = useState("");

  const handleSubClick = (subsection) => setSelectedSub(subsection);
  const handleExClick = (sectionId) => setSelectedExSectionId(sectionId);

  if (selectedExSectionId) {
    return (
      <ExerciceContent
        sectionId={selectedExSectionId}
        onBack={() => setSelectedExSectionId(null)}
      />
    );
  }

  if (selectedSub) {
    return (
      <CoursContent
        subsection={selectedSub}
        onBack={() => setSelectedSub(null)}
        onStartExercise={(sectionId) => setSelectedExSectionId(sectionId)}
      />
    );
  }

  return (
    <>
      <Menu showSearch searchTerm={searchTerm} onSearchChange={setSearchTerm} />
      <div className="container mt-5 px-3">
        <h2 className="programme-title">Programme de Formation</h2>

        {sections.map((section) => (
          <Section
            key={section.id}
            section={section}
            onSubClick={handleSubClick}
            onExClick={handleExClick}
            openSectionId={openSectionId}
            setOpenSectionId={setOpenSectionId}
            searchTerm={searchTerm}
          />
        ))}
      </div>
    </>
  );
}

function Section({ section, onSubClick, onExClick, openSectionId, setOpenSectionId, searchTerm }) {
  const [activeTab, setActiveTab] = useState("cours");
  const normalizedSearch = searchTerm.trim().toLowerCase();
  const isSearching = normalizedSearch.length > 0;

  const isOpen = isSearching || openSectionId === section.id;
  const currentTab = isSearching ? "cours" : activeTab;

  const getList = () =>
    currentTab === "cours" ? coursData[section.id] || [] : exercicesData[section.id] || [];

  const handleClick = (item) =>
    currentTab === "cours"
      ? onSubClick({ ...item, sectionId: section.id })
      : onExClick(section.id);

  const list = getList();
  const filteredList =
    currentTab === "cours" && isSearching
      ? list.filter((item) => item.title.toLowerCase().includes(normalizedSearch))
      : list;

  if (isSearching && filteredList.length === 0) {
    return null;
  }

  return (
    <div className="section-card">
      <div className="section-header" onClick={() => setOpenSectionId(isOpen ? null : section.id)}>
        <span>{section.title}</span>
        <span>{isOpen ? "^" : "v"}</span>
      </div>

      {isOpen && (
        <div className="section-content">
          {!isSearching && (
            <div className="tabs">
              <button
                onClick={() => setActiveTab("cours")}
                className={`tab-btn ${activeTab === "cours" ? "active" : ""}`}
              >
                Cours
              </button>
              <button
                onClick={() => setActiveTab("exercices")}
                className={`tab-btn ${activeTab === "exercices" ? "active" : ""}`}
              >
                Exercices
              </button>
            </div>
          )}

          {filteredList.length === 0 ? (
            <div className="subsection-item text-muted">Aucun cours trouve.</div>
          ) : (
            filteredList.map((item) => (
              <div key={item.id} className="subsection-item" onClick={() => handleClick(item)}>
                <span>
                  {currentTab === "cours" ? <FaBookOpen /> : <FaClipboardList />} {item.title}
                </span>
                <span>{">"}</span>
              </div>
            ))
          )}
        </div>
      )}
    </div>
  );
}
