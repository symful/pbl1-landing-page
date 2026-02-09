import MemberCard from "../MemberCard.tsx";

export default function FaturHanafi() {
  return (
    <MemberCard
      name={{ fullName: "Fatur Hanafi", color: "#e2e8f0" }}
      nim="251524043"
      hobby="Product Strategy"
      description="Visionary leader focused on building scalable systems and elegant code structures."
      role={{ 
        label: "Project Lead", 
        bg: "#d97706", // amber-600
        text: "#ffffff" 
      }}
      cv={{
        items: [
          "Strategic Storytelling",
          "Market Research Analyst",
          "Visual Branding",
        ],
        color: "#94a3b8"
      }}
      theme={{
        primary: "#d97706", // amber-600
        secondary: "#f59e0b", // amber-500
        cardBorderHover: "#d9770680"
      }}
      profileImg="/images/Fatur.jpeg"
    />
  );
}
