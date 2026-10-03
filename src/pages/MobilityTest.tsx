import {
  ArrowLeft,
  ArrowRight,
  Check,
  RotateCcw,
  Sparkles,
} from "lucide-react";
import { Link } from "react-router-dom";
import { useMemo, useState } from "react";

type Answer = {
  label: string;
  score: number;
};

type Question = {
  id: number;
  area: string;
  question: string;
  description: string;
  answers: Answer[];
};

const questions: Question[] = [
  {
    id: 1,
    area: "Hips",
    question: "How comfortable is a deep squat?",
    description:
      "Think about how comfortably you can lower your body while keeping your heels grounded.",
    answers: [
      { label: "Very comfortable", score: 4 },
      { label: "Mostly comfortable", score: 3 },
      { label: "A little restricted", score: 2 },
      { label: "Very restricted", score: 1 },
    ],
  },
  {
    id: 2,
    area: "Shoulders",
    question: "How easily can you reach overhead?",
    description:
      "Raise both arms overhead and notice whether the movement feels smooth and comfortable.",
    answers: [
      { label: "Very easy", score: 4 },
      { label: "Mostly easy", score: 3 },
      { label: "Some restriction", score: 2 },
      { label: "Very restricted", score: 1 },
    ],
  },
  {
    id: 3,
    area: "Back",
    question: "How does your upper back feel when rotating?",
    description:
      "Slowly rotate your upper body from side to side without forcing the movement.",
    answers: [
      { label: "Free and easy", score: 4 },
      { label: "Mostly comfortable", score: 3 },
      { label: "A little stiff", score: 2 },
      { label: "Very stiff", score: 1 },
    ],
  },
  {
    id: 4,
    area: "Hamstrings",
    question: "How comfortable is a forward fold?",
    description:
      "Stand tall and slowly fold forward. Notice the sensation through the back of your legs.",
    answers: [
      { label: "Very comfortable", score: 4 },
      { label: "Comfortable", score: 3 },
      { label: "Quite tight", score: 2 },
      { label: "Very tight", score: 1 },
    ],
  },
  {
    id: 5,
    area: "Overall",
    question: "How does your body feel today?",
    description:
      "Think about your overall sense of movement, stiffness and readiness.",
    answers: [
      { label: "Loose and ready", score: 4 },
      { label: "Pretty good", score: 3 },
      { label: "A little stiff", score: 2 },
      { label: "Tight and restricted", score: 1 },
    ],
  },
];

function getResult(score: number) {
  if (score >= 18) {
    return {
      title: "Move Freely",
      description:
        "Your answers suggest you currently feel comfortable with a broad range of movement. Keep building consistency and control.",
      level: "Strong mobility",
      focus: "Full body",
      need: "mobility",
      duration: "20 min",
    };
  }

  if (score >= 13) {
    return {
      title: "Build Your Range",
      description:
        "You have a solid movement foundation, with some areas that could benefit from more consistent mobility work.",
      level: "Developing mobility",
      focus: "Hips",
      need: "mobility",
      duration: "20 min",
    };
  }

  return {
    title: "Start With Space",
    description:
      "Your answers suggest that slower, consistent mobility work could help you explore more comfortable movement.",
    level: "Mobility foundation",
    focus: "Full body",
    need: "recovery",
    duration: "20 min",
  };
}

export default function MobilityTest() {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answers, setAnswers] = useState<number[]>([]);
  const [finished, setFinished] = useState(false);

  const question = questions[currentQuestion];

  const score = useMemo(
    () => answers.reduce((total, value) => total + value, 0),
    [answers]
  );

  const result = getResult(score);

  const handleAnswer = (answerScore: number) => {
    const nextAnswers = [...answers];

    nextAnswers[currentQuestion] = answerScore;
    setAnswers(nextAnswers);

    if (currentQuestion === questions.length - 1) {
      setFinished(true);
      return;
    }

    setCurrentQuestion((index) => index + 1);
  };

  const restart = () => {
    setCurrentQuestion(0);
    setAnswers([]);
    setFinished(false);
  };

  if (finished) {
    return (
      <main className="min-h-screen bg-neutral-950 px-6 py-12 text-white sm:px-8 lg:px-12">
        <div className="mx-auto flex min-h-[calc(100vh-96px)] max-w-[1100px] items-center">
          <div className="grid w-full gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:items-center">
            {/* SCORE */}
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.25em] text-white/35">
                Your MOVA result
              </p>

              <div className="mt-8 flex h-52 w-52 items-center justify-center rounded-full border border-white/10 bg-white/5">
                <div className="text-center">
                  <p className="text-6xl font-light tracking-[-0.06em]">
                    {score}
                  </p>
                  <p className="mt-1 text-xs text-white/30">
                    out of {questions.length * 4}
                  </p>
                </div>
              </div>
            </div>

            {/* RESULT */}
            <div>
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-white text-black">
                <Sparkles size={19} />
              </div>

              <p className="mt-8 text-[10px] font-semibold uppercase tracking-[0.25em] text-white/35">
                {result.level}
              </p>

              <h1 className="mt-4 text-6xl font-medium leading-[0.9] tracking-[-0.06em] sm:text-7xl">
                {result.title}
              </h1>

              <p className="mt-6 max-w-xl text-base leading-7 text-white/50">
                {result.description}
              </p>

              <div className="mt-8 grid max-w-xl grid-cols-2 gap-2">
                <div className="rounded-2xl bg-white/5 p-5">
                  <p className="text-[10px] uppercase tracking-[0.2em] text-white/30">
                    Recommended focus
                  </p>
                  <p className="mt-3 text-lg">{result.focus}</p>
                </div>

                <div className="rounded-2xl bg-white/5 p-5">
                  <p className="text-[10px] uppercase tracking-[0.2em] text-white/30">
                    Session
                  </p>
                  <p className="mt-3 text-lg">{result.duration}</p>
                </div>
              </div>

              <div className="mt-8 flex flex-wrap gap-3">
                <Link
                  to={`/routine?need=${result.need}&duration=${encodeURIComponent(
                    result.duration
                  )}&focus=${encodeURIComponent(result.focus)}`}
                  className="flex items-center gap-2 rounded-full bg-white px-6 py-3.5 text-sm font-semibold text-black transition hover:bg-neutral-200"
                >
                  Start recommended routine
                  <ArrowRight size={16} />
                </Link>

                <button
                  type="button"
                  onClick={restart}
                  className="flex items-center gap-2 rounded-full border border-white/15 px-6 py-3.5 text-sm font-semibold text-white transition hover:bg-white/10"
                >
                  <RotateCcw size={15} />
                  Retake test
                </button>
              </div>

              <Link
                to="/"
                className="mt-7 inline-flex items-center gap-2 text-sm text-white/35 transition hover:text-white"
              >
                <ArrowLeft size={15} />
                Back to MOVA
              </Link>
            </div>
          </div>
        </div>
      </main>
    );
  }

  const progress = ((currentQuestion + 1) / questions.length) * 100;

  return (
    <main className="min-h-screen bg-[#f5f5f2]">
      {/* TOP */}
      <header className="flex items-center justify-between px-6 py-6 sm:px-8 lg:px-12">
        <Link
          to="/"
          className="flex items-center gap-2 text-sm text-black/45 transition hover:text-black"
        >
          <ArrowLeft size={16} />
          Exit test
        </Link>

        <p className="text-xl font-bold tracking-[-0.06em]">MOVA</p>

        <span className="text-xs text-black/35">
          {String(currentQuestion + 1).padStart(2, "0")} /{" "}
          {String(questions.length).padStart(2, "0")}
        </span>
      </header>

      {/* PROGRESS */}
      <div className="px-6 sm:px-8 lg:px-12">
        <div className="mx-auto max-w-[1100px]">
          <div className="h-[2px] bg-black/10">
            <div
              className="h-full bg-black transition-all duration-500"
              style={{ width: `${progress}%` }}
            />
          </div>
        </div>
      </div>

      {/* CONTENT */}
      <section className="mx-auto flex min-h-[calc(100vh-110px)] max-w-[1100px] items-center px-6 py-16 sm:px-8 lg:px-12">
        <div className="grid w-full gap-12 lg:grid-cols-[0.7fr_1.3fr] lg:gap-20">
          {/* LEFT */}
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.25em] text-black/35">
              Mobility check
            </p>

            <div className="mt-8 text-[7rem] font-light leading-none tracking-[-0.08em] text-black/10 sm:text-[9rem]">
              {String(currentQuestion + 1).padStart(2, "0")}
            </div>

            <p className="mt-5 text-sm font-medium text-black/40">
              {question.area}
            </p>
          </div>

          {/* QUESTION */}
          <div>
            <h1 className="max-w-3xl text-5xl font-medium leading-[0.93] tracking-[-0.055em] sm:text-6xl md:text-7xl">
              {question.question}
            </h1>

            <p className="mt-6 max-w-xl text-base leading-7 text-black/45">
              {question.description}
            </p>

            <div className="mt-10 space-y-2">
              {question.answers.map((answer) => (
                <button
                  key={answer.label}
                  type="button"
                  onClick={() => handleAnswer(answer.score)}
                  className="group flex w-full items-center justify-between rounded-2xl border border-black/10 bg-white px-5 py-5 text-left transition hover:border-black hover:bg-black hover:text-white sm:px-6"
                >
                  <span className="text-base font-medium">
                    {answer.label}
                  </span>

                  <span className="flex h-9 w-9 items-center justify-center rounded-full bg-black/5 text-black/30 transition group-hover:bg-white/10 group-hover:text-white">
                    <ArrowRight size={16} />
                  </span>
                </button>
              ))}
            </div>

            {/* BACK */}
            {currentQuestion > 0 && (
              <button
                type="button"
                onClick={() =>
                  setCurrentQuestion((index) => index - 1)
                }
                className="mt-7 flex items-center gap-2 text-sm text-black/35 transition hover:text-black"
              >
                <ArrowLeft size={15} />
                Previous question
              </button>
            )}
          </div>
        </div>
      </section>
    </main>
  );
}