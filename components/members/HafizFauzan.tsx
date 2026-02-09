import MemberCard from "../MemberCard.tsx";

export default function HafizFauzan() {
  return (
    <MemberCard
      name={{ fullName: "Hafiz Fauzan Syafrudin", color: "#e2e8f0" }}
      nim="251524049"
      hobby="Experiment"
      description="I am a programmer who loves to experiment with technology and new things."
      role={{ 
        label: "IoT Developer", 
        bg: "#2563eb", // blue-600
        text: "#ffffff" 
      }}
      cv={{
        items: [
          "Edge Devices Development",
          "IoT Enthusiast",
          "EmbeddedSystem Designer"
        ],
        color: "#94a3b8"
      }}
      theme={{
        primary: "#2563eb", // blue-600
        secondary: "#3b82f6", // blue-500
        cardBorderHover: "#2563eb80"
      }}
      profileImg="/images/hafiz.jpeg"
    />
  );
}
