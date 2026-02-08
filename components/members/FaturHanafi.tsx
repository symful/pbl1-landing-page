import MemberCard from "../MemberCard.tsx";

export default function FaturHanafi() {
  return (
    <MemberCard
      name="Fatur Hanafi"
      nim="251524043"
      hobby="Product Strategy"
      description="Visionary leader focused on building scalable systems and elegant code structures."
      role={{ name: "Project Lead", color: "bg-amber-600" }}
      cvDetails={[
        "Strategic Storytelling",
        "Market Research Analyst",
        "Visual Branding",
      ]}
      profileImg="/images/Fatur.jpeg"
    />
  );
}
