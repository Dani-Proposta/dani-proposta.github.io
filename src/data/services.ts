
export interface Service {
  slug: string;
  title: string;
  summary: string;
  description: string;
  deliverables: string[];
}

export const services: Service[] = [
  {
    slug: "programacao",
    title: "Desenvolvimento de Software",
    summary: "Back-end, APIs, automações e sistemas web.",
    description:
      "Desenvolvimento e manutenção de soluções digitais, " +
      "com foco em funcionalidade, segurança e desempenho.",
    deliverables: [
      "Desenvolvimento back-end e APIs",
      "Automações e scripts",
      "Correção de bugs e manutenção",
      "Autenticação e validação de dados",
      "Integração entre sistemas"
    ]
  },
  {
    slug: "edicao-video",
    title: "Edição de Vídeo",
    summary: "Edição, cortes, legendas e pós-produção.",
    description:
      "Edição de conteúdos audiovisuais para plataformas " +
      "digitais, respeitando a proposta e identidade do projeto.",
    deliverables: [
      "Edição de vídeos curtos",
      "Cortes e organização de cenas",
      "Legendas e elementos gráficos",
      "Trilhas e ajustes de áudio",
      "Tratamento visual e finalização"
    ]
  }
];
