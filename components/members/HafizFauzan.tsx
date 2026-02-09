import MemberCard from "../MemberCard.tsx";

export default function HafizFauzan() {
  return (
    <MemberCard
      name="Hafiz Fauzan Syafrudin"
      nim="251524049"
      hobby="Experiment"
      description="I am a programmer who loves to experiment with technology and new things."
      role={{ name: "IoT Developer", color: "bg-blue-600" }}
      cvDetails={[
        "Edge Devices Development",
        "IoT Enthusiast",
        "EmbeddedSystem Designer"
      ]}
    />
  );
}
