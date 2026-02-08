import MemberCard from "../MemberCard.tsx";

export default function DzikraAlguhfroon() {
  return (
    <MemberCard
      name="Dzikra Alguhfroon"
      nim="251524041"
      hobby="Learning"
      description="I am a programmer with a strong passion for learning new things."
      role={{ name: "Backend Dev", color: "bg-emerald-600" }}
      cvDetails={[
        "Expert in php",
        "2+ years in NodeJs development",
      ]}
      profileImg="/images/dzikra.jpg"
    />
  );
}
