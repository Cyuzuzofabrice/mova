export type NeedType =
  | "recovery"
  | "mobility"
  | "flexibility"
  | "training"
  | "quick";

export type FocusType =
  | "Full body"
  | "Hips"
  | "Back"
  | "Shoulders";

export type DurationType = "10 min" | "20 min" | "30 min";

export type Exercise = {
  id: string;
  name: string;
  description: string;
  duration: number;
  category: FocusType;
  image: string;
};

export type GeneratedRoutine = {
  title: string;
  description: string;
  level: string;
  need: NeedType;
  duration: DurationType;
  focus: FocusType;
  exercises: Exercise[];
};

const exercises: Exercise[] = [
  {
    id: "cat-cow",
    name: "Cat-Cow",
    description: "Move slowly through spinal flexion and extension.",
    duration: 60,
    category: "Back",
    image:
      "https://images.pexels.com/photos/3822864/pexels-photo-3822864.jpeg",
  },
  {
    id: "child-pose",
    name: "Child's Pose",
    description: "Relax into the position and breathe deeply.",
    duration: 90,
    category: "Full body",
    image:
      "https://images.pexels.com/photos/4056535/pexels-photo-4056535.jpeg",
  },
  {
    id: "hip-flexor",
    name: "Hip Flexor Stretch",
    description: "Open the front of the hips with a controlled stretch.",
    duration: 90,
    category: "Hips",
    image:
      "https://images.pexels.com/photos/4325464/pexels-photo-4325464.jpeg",
  },
  {
    id: "ninety-ninety",
    name: "90/90 Hip Switches",
    description: "Move between internal and external hip rotation.",
    duration: 120,
    category: "Hips",
    image:
      "https://images.pexels.com/photos/4325464/pexels-photo-4325464.jpeg",
  },
  {
    id: "world-greatest",
    name: "World's Greatest Stretch",
    description: "Combine hip, hamstring and upper-body mobility.",
    duration: 120,
    category: "Full body",
    image:
      "https://images.pexels.com/photos/7187806/pexels-photo-7187806.jpeg",
  },
  {
    id: "shoulder-circles",
    name: "Shoulder Circles",
    description: "Move your shoulders through a comfortable range of motion.",
    duration: 60,
    category: "Shoulders",
    image:
      "https://images.pexels.com/photos/3822864/pexels-photo-3822864.jpeg",
  },
  {
    id: "thread-needle",
    name: "Thread the Needle",
    description: "Mobilize the upper back and shoulders.",
    duration: 90,
    category: "Back",
    image:
      "https://images.pexels.com/photos/4056535/pexels-photo-4056535.jpeg",
  },
  {
    id: "deep-squat",
    name: "Deep Squat Hold",
    description: "Build comfortable mobility through the hips and ankles.",
    duration: 90,
    category: "Hips",
    image:
      "https://images.pexels.com/photos/3768916/pexels-photo-3768916.jpeg",
  },
  {
    id: "glute-bridge",
    name: "Glute Bridge",
    description: "Activate the glutes and support hip movement.",
    duration: 90,
    category: "Hips",
    image:
      "https://images.pexels.com/photos/3768916/pexels-photo-3768916.jpeg",
  },
  {
    id: "forward-fold",
    name: "Standing Forward Fold",
    description: "Release tension through the back of the body.",
    duration: 90,
    category: "Full body",
    image:
      "https://images.pexels.com/photos/4056535/pexels-photo-4056535.jpeg",
  },
  {
    id: "arm-reach",
    name: "Overhead Arm Reach",
    description: "Open the shoulders and lengthen through the upper body.",
    duration: 60,
    category: "Shoulders",
    image:
      "https://images.pexels.com/photos/3822864/pexels-photo-3822864.jpeg",
  },
  {
    id: "lunge-rotation",
    name: "Lunge + Rotation",
    description: "Prepare the hips and spine for active movement.",
    duration: 120,
    category: "Full body",
    image:
      "https://images.pexels.com/photos/7187806/pexels-photo-7187806.jpeg",
  },
];

const needDetails: Record<
  NeedType,
  {
    title: string;
    description: string;
    level: string;
  }
> = {
  recovery: {
    title: "Recovery Reset",
    description:
      "Release tension and help your body feel relaxed, mobile and ready for the rest of your day.",
    level: "Easy",
  },
  mobility: {
    title: "Move Better",
    description:
      "Improve your range of motion and build better movement through controlled mobility work.",
    level: "Moderate",
  },
  flexibility: {
    title: "Flexibility Flow",
    description:
      "Build flexibility gradually with slow, controlled movements and longer stretches.",
    level: "Easy",
  },
  training: {
    title: "Training Prep",
    description:
      "Prepare your body for training with dynamic mobility and movement preparation.",
    level: "Active",
  },
  quick: {
    title: "10-Minute Reset",
    description:
      "A focused mobility session designed for days when you only have a few minutes.",
    level: "Easy",
  },
};

const durationSeconds: Record<DurationType, number> = {
  "10 min": 600,
  "20 min": 1200,
  "30 min": 1800,
};

function getCandidateExercises(
  focus: FocusType,
  need: NeedType
): Exercise[] {
  const focused = exercises.filter((exercise) => exercise.category === focus);

  const fullBody = exercises.filter(
    (exercise) => exercise.category === "Full body"
  );

  let candidates = [...focused, ...fullBody];

  if (need === "training") {
    candidates = [
      ...exercises.filter(
        (exercise) =>
          exercise.id === "lunge-rotation" ||
          exercise.id === "deep-squat" ||
          exercise.id === "ninety-ninety" ||
          exercise.id === "world-greatest"
      ),
      ...candidates,
    ];
  }

  if (need === "recovery") {
    candidates = [
      ...exercises.filter(
        (exercise) =>
          exercise.id === "child-pose" ||
          exercise.id === "forward-fold" ||
          exercise.id === "cat-cow"
      ),
      ...candidates,
    ];
  }

  return candidates.filter(
    (exercise, index, array) =>
      array.findIndex((item) => item.id === exercise.id) === index
  );
}

export function generateRoutine(
  need: NeedType,
  duration: DurationType,
  focus: FocusType
): GeneratedRoutine {
  const targetSeconds = durationSeconds[duration];

  const candidates = getCandidateExercises(focus, need);

  const selected: Exercise[] = [];
  let totalSeconds = 0;

  for (const exercise of candidates) {
    if (selected.length >= 8) break;

    if (totalSeconds + exercise.duration <= targetSeconds) {
      selected.push(exercise);
      totalSeconds += exercise.duration;
    }
  }

  if (selected.length < 3) {
    for (const exercise of candidates) {
      if (!selected.some((item) => item.id === exercise.id)) {
        selected.push(exercise);
      }

      if (selected.length >= 3) break;
    }
  }

  return {
    ...needDetails[need],
    need,
    duration,
    focus,
    exercises: selected,
  };
}