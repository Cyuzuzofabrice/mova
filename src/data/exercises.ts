export type Exercise = {
  id: string;
  name: string;
  category: string;
  duration: number;
  difficulty: "Beginner" | "Intermediate" | "Advanced";
  description: string;
  image: string;
};

export const exercises: Exercise[] = [
  {
    id: "hip-90-90",
    name: "90/90 Hip Flow",
    category: "Mobility",
    duration: 8,
    difficulty: "Beginner",
    description:
      "A controlled flow designed to improve hip rotation and movement.",
    image: "/images/hip-mobility.jpg",
  },
  {
    id: "thoracic-rotation",
    name: "Thoracic Rotation",
    category: "Mobility",
    duration: 6,
    difficulty: "Beginner",
    description:
      "Open the upper back and improve rotational movement.",
    image: "/images/thoracic-rotation.jpg",
  },
  {
    id: "hamstring-flow",
    name: "Hamstring Flow",
    category: "Flexibility",
    duration: 10,
    difficulty: "Beginner",
    description:
      "A gentle sequence focused on hamstring flexibility.",
    image: "/images/hamstring.jpg",
  },
  {
    id: "full-body-recovery",
    name: "Full Body Recovery",
    category: "Recovery",
    duration: 15,
    difficulty: "Beginner",
    description:
      "Slow movements to help your body recover after training.",
    image: "/images/recovery.jpg",
  },
];