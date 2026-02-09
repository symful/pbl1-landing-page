import MemberCard from "../MemberCard.tsx";

export default function KemalArdian() {
  return (
    <MemberCard
      name="Kemal Ardian"
      nim="2210001"
      hobby="System Architecture"
      description="Visionary leader focused on building scalable systems and elegant code structures."
      role={{ name: "Project Lead", color: "bg-indigo-600" }}
      cvDetails={[
        "3+ years in PHP development",
        "Expert in Laravel & Deno",
        "PBL1 Team Coordinator",
      ]}
    />
  );
}
