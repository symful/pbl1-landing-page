import MemberCard from "../MemberCard.tsx";

export default function HafizFauzan() {
  return (
    <MemberCard
      name="Hafiz Fauzan Syafrudin"
      nim="251524049"
      hobby="Experiment"
      description="Saya adalah seorang programmer yang suka bereksperimen dengan teknologi dan hal baru"
      role={{ name: "IoT Developer", color: "bg-blue-600" }}
      cvDetails={[
        "Edge Devices Development",
        "IoT Enthusiast",
        "EmbeddedSystem Designer"
      ]}
    />
  );
}
