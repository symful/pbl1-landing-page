import MemberCard from "../MemberCard.tsx";

export default function DzikraAlguhfroon() {
  return (
    <MemberCard
      name={{ fullName: "Dzikra Alguhfroon", color: "#e2e8f0" }} // whitish text
      nim="251524041"
      hobby="Learning"
      description="I am a programmer with a strong passion for learning new things."
      role={{ 
        label: "Backend Dev", 
        bg: "#059669", // emerald-600
        text: "#ffffff"
      }}
      cv={{
        items: [
          "Expert in php",
          "2+ years in NodeJs development",
        ],
        color: "#94a3b8" // slate-400
      }}
      theme={{
        primary: "#059669", // emerald-600
        secondary: "#10b981", // emerald-500
        cardBorderHover: "#05966980" // emerald-600 with 50% opacity
      }}
      profileImg="/images/dzikra.jpg"
    />
  );
}
