import MemberCard from "../MemberCard.tsx";

export default function MuhammadAkhtar() {
  return (
    <MemberCard
      name="Muhammad Akhtar Khawarizmi"
      nim="251524055"
      hobby="Capture The Flag Enjoyer 🚩"
      description="Writing a documentation around the software"
      role={{ name: "Technical Writer & Software Tester", color: "bg-rose-600" }}
      cvDetails={[
        "Internship at PT. Bio Farma (Persero) as Back-End Developer",
        "Software Documentation",
        "Capture The Flag Enthusiast",
      ]}
      profileImg="/images/akhtar.png"
    />
  );
}
