import MemberCard from "../MemberCard.tsx";

export default function MuhammadAkhtar() {
  return (
    <MemberCard
      name={{ fullName: "Muhammad Akhtar Khawarizmi", color: "#e2e8f0" }}
      nim="251524055"
      hobby="Capture The Flag Enjoyer 🚩"
      description="Writing a documentation around the software"
      role={{ 
        label: "Technical Writer & Tester", 
        bg: "#e11d48", // rose-600
        text: "#ffffff" 
      }}
      cv={{
        items: [
          "Internship at PT. Bio Farma (Persero) as Back-End Developer",
          "Software Documentation",
          "Capture The Flag Enthusiast",
        ],
        color: "#94a3b8"
      }}
      theme={{
        primary: "#e11d48", // rose-600
        secondary: "#f43f5e", // rose-500
        cardBorderHover: "#e11d4880"
      }}
      profileImg="/images/akhtar.png"
    />
  );
}
