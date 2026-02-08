import MemberCard from "../MemberCard.tsx";

export default function KemalArdian() {
  return (
    <MemberCard
      name="Kemal Ardian"
      nim="251524053"
      hobby="System Architecture"
      description="A passionate engineer that loves to make new modern system architecture every Sunday"
      role={{ name: "All-Role Engineer", color: "bg-indigo-600" }}
      cvDetails={[
        "3+ years in PHP development",
        "Expert in Laravel, Flutter & Deno",
        "5+ years Freelancer",
      ]}
      profileImg="/images/kemal.jpg"
    />
  );
}
