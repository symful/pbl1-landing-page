import MemberCard from "../MemberCard.tsx";

export default function HafizFauzan() {
  return (
    <MemberCard
      name="Hafiz Fauzan"
      nim="2210003"
      hobby="Modern Web Dev"
      description="Passionate about crafting fluid animations and high-performance frontend applications."
      role={{ name: "Frontend Dev", color: "bg-blue-600" }}
      cvDetails={[
        "React & Fresh Specialist",
        "Tailwind CSS Expert",
        "Animation & Motion Design",
      ]}
    />
  );
}
