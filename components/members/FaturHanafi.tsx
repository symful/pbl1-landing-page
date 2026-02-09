import MemberCard from "../MemberCard.tsx";

export default function FaturHanafi() {
  return (
    <MemberCard
      name="Fatur Hanafi"
      nim="2210005"
      hobby="Product Strategy"
      description="Creating narrative-driven digital content that resonates with the target audience."
      role={{ name: "Content Creator", color: "bg-amber-600" }}
      cvDetails={[
        "Strategic Storytelling",
        "Market Research Analyst",
        "Visual Branding",
      ]}
    />
  );
}
