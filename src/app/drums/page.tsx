import { Metadata } from "next";
import DrumGame from "./components/DrumGame";

export const metadata: Metadata = {
  title: "Drums - Rudiment Trainer",
  description: "Master the 40 PAS International Drum Rudiments with this interactive rhythm game.",
};

export default function DrumsPage() {
  return <DrumGame />;
}
