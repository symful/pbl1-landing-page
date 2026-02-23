# PBL1 Landing Page - Kata Akhtar Nama Timnya Apa Yah

A premium, high-performance landing page showcasing the members of the PBL1 team. Built with **Deno Fresh**, **Tailwind CSS**, and **TypeScript**.

## Deployment

The project is live at: [https://pbl1.deno.dev/](https://pbl1.deno.dev/) and [https://kataakhtarnamatimnyaapayah.my.id/](https://kataakhtarnamatimnyaapayah.my.id/)

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
  name={{
    fullName: "Your Name",         // Display name
    color: "#e2e8f0"               // Text color (hex)
  }}
  nim="Student ID"                 // NIM
  hobby="Your Hobby"
  description="Brief bio"
  role={{ 
    label: "Position Name",        // e.g. "Backend Dev"
    bg: "#059669",                 // Badge background color (hex)
    text: "#ffffff"                // Badge text color (hex)
  }}
  cv={{
    items: [                       // List of skills/achievements
      "Skill 1",
      "Skill 2"
    ],
    color: "#94a3b8"               // List item text color (hex)
  }}
  theme={{
    primary: "#059669",            // Main accent color (hex)
    secondary: "#10b981",          // Secondary accent color (hex)
    cardBorderHover: "#05966980"   // Border color on hover (hex with alpha)
  }}
  profileImg="/images/image.jpg"   // Optional profile image path
/>
```

### Property Details

| Property | Description | Format |
| :--- | :--- | :--- |
| **name.fullName** | Your display name. | String |
| **name.color** | Name text color. | Hex code (e.g. `"#ffffff"`) |
| **nim** | Student ID. | String |
| **role.label** | Role title. | String |
| **role.bg** | Role badge background. | Hex code |
| **role.text** | Role badge text color. | Hex code |
| **cv.items** | Bullet points. | List of strings |
| **cv.color** | Text color for CV items. | Hex code |
| **theme.primary** | Main glow/accent color. | Hex code |
| **theme.cardBorderHover** | Border color on hover. | Hex code (can include alpha) |

Add your picture to `/static/images` folder.

## Technical Stack

- **Runtime**: Deno 2.x
- **Framework**: Fresh 1.7
- **Styling**: Tailwind CSS 3
- **Icons/Visuals**: Pure CSS & Tailwind utilities

---
Made with technical excellence by **The Squad Laboratory** | 2026
