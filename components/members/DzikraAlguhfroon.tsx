import MemberCard from "../MemberCard.tsx";

export default function DzikraAlguhfroon() {
  return (
    <MemberCard
      name="Dzikra Alguhfroon"
      nim="2210004"
      hobby="DevOps & Security"
      description="Deep diving into distributed systems and ensuring infrastructure stability and security."
      role={{ name: "Backend Dev", color: "bg-emerald-600" }}
      cvDetails={[
        "Rust & Go Background",
        "CI/CD Implementation",
        "Cloud Infrastructure",
      ]}
    />
  );
}
