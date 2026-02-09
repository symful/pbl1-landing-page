# PBL1 Landing Page - The Squad Laboratory

A premium, high-performance landing page showcasing the members of the PBL1 team. Built with **Deno Fresh**, **Tailwind CSS**, and **TypeScript**.

## Deployment

The project is live at: [https://pbl1.deno.dev/](https://pbl1.deno.dev/)

## Local Development

1. **Install Deno**: Ensure you have [Deno](https://deno.com/) installed on your machine.
2. **Clone the repository**:
   ```bash
   git clone https://github.com/symful/pbl1-landing-page.git
   cd pbl1-landing-page
   ```
3. **Start the development server**:
   ```bash
   deno task start
   ```
4. **Open in browser**: Navigate to [http://localhost:8000/](http://localhost:8000/)

## Managing Member Profiles

Each team member's information is stored in their own file within `components/members/`.

### How to Edit Your Profile

Locate your personal file (e.g., `KemalArdian.tsx`) and update the properties within the `MemberCard` component. Here is a guide on what each property does:

```tsx
<MemberCard
  name="Full Name"           // Your complete name as it should appear on the card
  nim="Student ID"          // Your official student identification number (NIM)
  hobby="Your Hobby"         // A short mention of what you enjoy doing
  description="Summary"      // A brief 1-2 sentence introduction about yourself
  role={{ 
    name: "Position",       // Your title (e.g., Project Lead, UI Designer)
    color: "bg-blue-600"    // Background color for your role badge (Tailwind class)
  }}
  cvDetails={[               // A list of items for your mini-CV section
    "Key Skill or Achievement 1",
    "Key Skill or Achievement 2",
    "Professional Experience or Group Contribution",
  ]}
/>
```

### Property Details

| Property | Description | Format |
| :--- | :--- | :--- |
| **name** | Your display name. | Use double quotes: `"John Doe"` |
| **nim** | Your student ID number. | Use double quotes: `"2210001"` |
| **hobby** | A brief interest. | Use double quotes: `"UI Research"` |
| **description** | A short bio or intro. | Use double quotes. Keep it concise. |
| **role.name** | Your official role. | Use double quotes: `"Backend Developer"` |
| **role.color** | The badge color. | A Tailwind class like `"bg-red-600"` (see [Tailwind Colors](https://tailwindcss.com/docs/customizing-colors)). |
| **cvDetails** | Bullet points. | A list inside brackets: `["Point 1", "Point 2"]`. |

## Technical Stack

- **Runtime**: Deno 2.x
- **Framework**: Fresh 1.7
- **Styling**: Tailwind CSS 3
- **Icons/Visuals**: Pure CSS & Tailwind utilities

---
Made with technical excellence by **The Squad Laboratory** | 2026