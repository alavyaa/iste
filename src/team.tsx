interface Member {
  name: string;
  role: string;
  image: string;
}

interface Department {
  title: string;
  members: Member[];
}

const departments: Department[] = [
  {
    title: "Leadership",
    members: [
      {
        name: "Hritik",
        role: "President",
        image: "/team/hritik.jpg",
      },
      {
        name: "Pranjal",
        role: "Vice President",
        image: "/team/pranjal.jpg",
      },
    ],
  },

  {
    title: "Technical Guild",
    members: [
      {
        name: "Shaurya",
        role: "Developer",
        image: "/team/shaurya.jpg",
      },
      {
        name: "Hamza",
        role: "Developer",
        image: "/team/hamza.jpg",
      },
    ],
  },
];