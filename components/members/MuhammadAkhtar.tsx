import MemberCard from "../MemberCard.tsx";

export default function MuhammadAkhtar() {
  return (
    <MemberCard
      name="Muhammad Akhtar Khawarizmi"
      nim="2210002"
      hobby="UI Research"
      description="Bridging the gap between human psychology and digital interfaces with pixel perfection."
      role={{ name: "UI/UX Designer", color: "bg-rose-600" }}
      cvDetails={[
        "Figma Specialist",
        "Visual Interaction Researcher",
        "Experience Design Architect",
      ]}
    />
  );
}
