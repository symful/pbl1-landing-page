import MemberCard from "../MemberCard.tsx";

export default function DzikraAlguhfroon() {
  return (
    <MemberCard
      name="Dzikra Alguhfroon"
      nim="251524041"
      hobby="belajar"
      description="Mahasiswa."
      role={{ name: "Backend Dev", color: "bg-emerald-600" }}
      cvDetails={[
        "Rust & Go Background",
        "CI/CD Implementation",
        "Cloud Infrastructure",
      ]}
      profileImg="/images/dzikra.jpg"
    />
  );
}
