export type TeamMember = {
  name: string;
  role: string;
  image?: string;
  imageAlt?: string;
  initials: string;
};

/** Order: Ubaid, Atiq, Haider, Hussain, Faseeh, Umer, Rahmat, Ashahad, Maaz. */
export const team: TeamMember[] = [
  {
    name: "Ubaid ur Rehman Khan",
    role: "Founder & CEO",
    image: "/team/ubaid-ur-rehman-khan-founder-ceo.jpg",
    imageAlt: "Ubaid ur Rehman Khan, Founder and CEO of Innoventix Hub",
    initials: "UK",
  },
  {
    name: "Atiq ur Rehman",
    role: "Creative Manager",
    image: "/team/atiq-ur-rehman-creative-manager.jpg",
    imageAlt: "Atiq ur Rehman, Creative Manager",
    initials: "AR",
  },
  {
    name: "Haider",
    role: "AI Content Creator",
    image: "/team/haider-ai-content-creator.jpg",
    imageAlt: "Haider, AI Content Creator",
    initials: "H",
  },
  {
    name: "Hussain",
    role: "Video Editor",
    initials: "HU",
  },
  {
    name: "Faseeh Ur Rehman",
    role: "AI Automation Engineer",
    image: "/team/faseeh-ur-rehman-v2.jpg",
    imageAlt: "Faseeh Ur Rehman, AI Automation Engineer",
    initials: "FR",
  },
  {
    name: "Umer Hashmi",
    role: "Web & Search Growth Lead",
    image: "/team/umer-hashmi-v2.jpg",
    imageAlt: "Umer Hashmi, Web and Search Growth Lead",
    initials: "UH",
  },
  {
    name: "Rahmat Ullah",
    role: "AI Automation Engineer",
    initials: "RU",
  },
  {
    name: "Ashahad Abbasi",
    role: "AI Automation Engineer",
    initials: "AA",
  },
  {
    name: "Maaz Ali",
    role: "AI Automation Engineer",
    initials: "MA",
  },
];
