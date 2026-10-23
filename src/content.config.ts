
import { defineCollection } from "astro:content";
import { glob } from "astro/loaders";
import { z } from "astro/zod";
import { services } from "./data/services";

const projects = defineCollection({
  loader: glob({
    base: "./src/content/projects",
    pattern: "**/*.md",
  }),

  schema: z.object({
    title: z.string().min(3),

    summary: z.string().min(10).max(220),

    service: z.string().refine(
      (slug) => services.some((item) => item.slug === slug),
      { message: "O serviço informado não existe." }
    ),

    technologies: z.array(z.string()).min(1),

    status: z.enum([
      "em-desenvolvimento",
      "concluido",
    ]),

    featured: z.boolean().default(false),

    repository: z.string().url().optional(),

    demo: z.string().url().optional(),
  }),
});

export const collections = { projects };
