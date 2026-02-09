import MemberCard from "../MemberCard.tsx";

export default function DzikraAlguhfroon() {
  return (
    <MemberCard
      name="Dzikra Alguhfroon"
      nim="251524041"
      hobby="Learn"
      description="Mahasiswa."
      role={{ name: "Mahasiswa", color: "bg-emerald-600" }}
      cvDetails={[
        "Rust & Go Background",
        "CI/CD Implementation",
        "Cloud Infrastructure",
      ]}
    />
  );
}
