import MemberCard from "../MemberCard.tsx";

export default function KemalArdian() {
  return (
    <MemberCard
      name="Kemal Ardian"
      nim="251524053"
      hobby="System Architecture"
      description="All-role engineer"
      role={{ name: "All-Role Engineer", color: "bg-indigo-600" }}
      cvDetails={[
        "3+ years in PHP development",
        "Expert in Laravel & Deno",
        "PBL1 Team Coordinator",
      ]}
    />
  );
}
