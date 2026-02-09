import MemberCard from "../MemberCard.tsx";

export default function KemalArdian() {
  return (
    <MemberCard
      name={{ fullName: "Kemal Ardian", color: "#e2e8f0" }}
      nim="251524053"
      hobby="System Architecture"
      description="A passionate engineer that loves to make new modern system architecture every Sunday"
      role={{ 
        label: "All-Role Engineer", 
        bg: "#4f46e5", // indigo-600
        text: "#ffffff" 
      }}
      cv={{
        items: [
          "3+ years in PHP development",
          "Expert in Laravel, Flutter, Go & Deno",
          "5+ years Freelancer",
        ],
        color: "#94a3b8"
      }}
      theme={{
        primary: "#4f46e5", // indigo-600
        secondary: "#6366f1", // indigo-500
        cardBorderHover: "#4f46e580"
      }}
      profileImg="/images/kemal.jpg"
    />
  );
}
