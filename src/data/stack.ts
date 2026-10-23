
export type StackArea =
  | "development"
  | "audiovisual";

export interface StackGroup {
  id: string;
  area: StackArea;
  title: string;
  description: string;
  items: string[];
}

export const stackGroups: StackGroup[] = [
  {
    id: "backend",
    area: "development",
    title: "Back-end & Automação",
    description:
      "Desenvolvimento de sistemas, integrações e processos automatizados.",
    items: [
      "Python",
      "PHP",
      "C#",
      ".NET",
      "Node.js",
      "Express"
    ]
  },
  {
    id: "web",
    area: "development",
    title: "Desenvolvimento Web",
    description:
      "Construção e manutenção de aplicações e interfaces web.",
    items: [
      "JavaScript",
      "TypeScript",
      "HTML",
      "CSS",
      "WordPress"
    ]
  },
  {
    id: "infrastructure",
    area: "development",
    title: "Dados & Infraestrutura",
    description:
      "Bancos de dados, versionamento e ferramentas de desenvolvimento.",
    items: [
      "MySQL",
      "PostgreSQL",
      "Docker",
      "Git"
    ]
  },
  {
    id: "audiovisual",
    area: "audiovisual",
    title: "Edição Audiovisual",
    description:
      "Montagem, pós-produção e finalização de conteúdos digitais.",
    items: [
      "Premiere Pro",
      "After Effects",
      "Filmora"
    ]
  }
];
