import React, { useState } from "react";
import { exercicesData } from "./ExercicesData";

const normalize = (value) => (value || "").trim().toLowerCase();

function buildExerciseSets(rawData) {
  if (!Array.isArray(rawData) || rawData.length === 0) return [];

  if (rawData[0].questions) {
    return rawData;
  }

  return [
    {
      id: "legacy-1",
      title: "Exercice",
      type: "mcq",
      questions: rawData.map((item) => ({
        id: item.id,
        prompt: item.content,
        options: item.answers.map((answer) => answer.text),
        correctAnswer: item.answers.find((answer) => answer.isCorrect)?.text || "",
      })),
    },
  ];
}

function playFeedbackSound(isCorrect) {
  const AudioCtx = window.AudioContext || window.webkitAudioContext;
  if (!AudioCtx) return;

  const ctx = new AudioCtx();
  const osc = ctx.createOscillator();
  const gain = ctx.createGain();

  osc.type = isCorrect ? "triangle" : "sine";
  osc.frequency.setValueAtTime(isCorrect ? 740 : 280, ctx.currentTime);
  gain.gain.setValueAtTime(0.0001, ctx.currentTime);
  gain.gain.exponentialRampToValueAtTime(0.05, ctx.currentTime + 0.01);
  gain.gain.exponentialRampToValueAtTime(0.0001, ctx.currentTime + 0.16);

  osc.connect(gain);
  gain.connect(ctx.destination);
  osc.start();
  osc.stop(ctx.currentTime + 0.16);
  osc.onended = () => ctx.close();
}

export default function Quiz({ sectionId, onBack }) {
  const exerciseSets = buildExerciseSets(exercicesData[sectionId] || []);
  const [currentExerciseIndex, setCurrentExerciseIndex] = useState(0);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [selectedOption, setSelectedOption] = useState("");
  const [textAnswer, setTextAnswer] = useState("");
  const [isAnswered, setIsAnswered] = useState(false);
  const [isCurrentCorrect, setIsCurrentCorrect] = useState(null);
  const [correctCount, setCorrectCount] = useState(0);
  const [isFinished, setIsFinished] = useState(false);
  const [finalScore, setFinalScore] = useState(0);
  const [exerciseScores, setExerciseScores] = useState({});

  if (exerciseSets.length === 0) {
    return <div>Aucun exercice disponible.</div>;
  }

  const currentExercise = exerciseSets[currentExerciseIndex];
  const currentQuestion = currentExercise.questions[currentQuestionIndex];
  const isMcq = currentExercise.type === "mcq";
  const questionCount = currentExercise.questions.length;

  const resetCurrentExercise = () => {
    setCurrentQuestionIndex(0);
    setSelectedOption("");
    setTextAnswer("");
    setIsAnswered(false);
    setIsCurrentCorrect(null);
    setCorrectCount(0);
    setFinalScore(0);
    setIsFinished(false);
  };

  const goToNextExercise = () => {
    if (currentExerciseIndex < exerciseSets.length - 1) {
      setCurrentExerciseIndex(currentExerciseIndex + 1);
      setCurrentQuestionIndex(0);
      setSelectedOption("");
      setTextAnswer("");
      setIsAnswered(false);
      setIsCurrentCorrect(null);
      setCorrectCount(0);
      setFinalScore(0);
      setIsFinished(false);
    } else if (onBack) {
      onBack();
    }
  };

  const checkCorrect = () => {
    if (isMcq) {
      return normalize(selectedOption) === normalize(currentQuestion.correctAnswer);
    }
    return normalize(textAnswer) === normalize(currentQuestion.correctAnswer);
  };

  const handleSubmit = () => {
    if (isMcq && !selectedOption) return;
    if (!isMcq && !normalize(textAnswer)) return;

    const currentResult = checkCorrect();
    setCorrectCount((prev) => prev + (currentResult ? 1 : 0));
    setIsCurrentCorrect(currentResult);
    setIsAnswered(true);
    playFeedbackSound(currentResult);
  };

  const handleGoNext = () => {
    if (currentQuestionIndex < questionCount - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
      setSelectedOption("");
      setTextAnswer("");
      setIsAnswered(false);
      setIsCurrentCorrect(null);
      return;
    }

    const score = Math.round((correctCount / questionCount) * 100);
    setFinalScore(score);
    setExerciseScores((prev) => ({
      ...prev,
      [currentExercise.id]: {
        title: currentExercise.title,
        score,
        correctCount,
        questionCount,
      },
    }));
    setIsFinished(true);
  };

  if (isFinished) {
    const isSuccessScore = finalScore > 60;
    return (
      <div className="exercice-container p-4">
        <h2 className="exercice-title">Resultat: {currentExercise.title}</h2>

        <div className="score-cell-wrap">
          <div className={`score-cell ${isSuccessScore ? "score-ok" : "score-ko"}`}>
            <p className="score-label mb-1">Votre score</p>
            <p className="score-value mb-1">{finalScore}%</p>
            <p className="score-detail mb-0">
              Bonnes reponses: <strong>{correctCount}/{questionCount}</strong>
            </p>
          </div>
        </div>

        {Object.keys(exerciseScores).length > 0 && (
          <div className="mt-3 scores-summary">
            <h6>Scores des exercices</h6>
            <ul className="mb-0">
              {Object.entries(exerciseScores).map(([exerciseId, item]) => (
                <li key={exerciseId}>
                  {item.title}: {item.score}% ({item.correctCount}/{item.questionCount})
                </li>
              ))}
            </ul>
          </div>
        )}

        <div className="result-action-wrap">
          {isSuccessScore ? (
            <button className="btn btn-success mt-3" onClick={goToNextExercise}>
              {currentExerciseIndex < exerciseSets.length - 1 ? "Suivant" : "Terminer"}
            </button>
          ) : (
            <button className="btn btn-danger mt-3" onClick={resetCurrentExercise}>
              Reessayer l'exercice
            </button>
          )}
        </div>
      </div>
    );
  }

  return (
    <div className="exercice-container p-4">
      <div className="mb-3">
        <button className="btn btn-outline-success" onClick={onBack}>
          Retour aux exercices
        </button>
      </div>

      <h2 className="exercice-title">{currentExercise.title}</h2>
      <p className="text-muted mb-1">
        Exercice {currentExerciseIndex + 1}/{exerciseSets.length}
      </p>
      <p className="text-muted mb-2">
        Question {currentQuestionIndex + 1}/{questionCount}
      </p>

      <div className="exercice-content shadow rounded p-3 mt-3 bg-light">
        <p>{currentQuestion.prompt}</p>
      </div>

      {isMcq ? (
        <div className="mt-4">
          {currentQuestion.options.map((option) => {
            const isSelected = selectedOption === option;
            const isCorrectOption = normalize(option) === normalize(currentQuestion.correctAnswer);
            const optionClass = isAnswered
              ? isCorrectOption
                ? "bg-success text-white"
                : isSelected
                ? "bg-danger text-white"
                : "bg-white"
              : isSelected
              ? "bg-primary text-white"
              : "bg-white";

            return (
              <button
                key={`${currentQuestion.id}-${option}`}
                className={`d-block w-100 mb-2 p-2 rounded border ${optionClass}`}
                onClick={() => setSelectedOption(option)}
                disabled={isAnswered}
              >
                {option}
              </button>
            );
          })}
          {isAnswered && (
            <p className={`mt-2 ${isCurrentCorrect ? "text-success" : "text-danger"}`}>
              {isCurrentCorrect ? "Correct. " : "Incorrect. "}
              Bonne reponse: {currentQuestion.correctAnswer}
            </p>
          )}
        </div>
      ) : (
        <div className="mt-4">
          <input
            type="text"
            className="form-control"
            placeholder="Ecris ta reponse ici..."
            value={textAnswer}
            onChange={(e) => setTextAnswer(e.target.value)}
            disabled={isAnswered}
          />
          {isAnswered && (
            <p className={`mt-2 ${isCurrentCorrect ? "text-success" : "text-danger"}`}>
              {isCurrentCorrect ? "Correct. " : "Incorrect. "}
              Bonne reponse: {currentQuestion.correctAnswer}
            </p>
          )}
        </div>
      )}

      <button
        className="btn btn-primary mt-3"
        onClick={isAnswered ? handleGoNext : handleSubmit}
      >
        {!isAnswered
          ? "Verifier"
          : currentQuestionIndex < questionCount - 1
          ? "Question suivante"
          : "Terminer"}
      </button>
    </div>
  );
}
