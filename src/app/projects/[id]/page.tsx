import { notFound } from "next/navigation";
import { projects } from "../data";
import ProjectDetail from "./ProjectDetail";

export const dynamicParams = false;

export function generateStaticParams() {
  return projects.map((p) => ({ id: p.id }));
}

export default async function ProjectPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const project = projects.find((p) => p.id === id);

  if (!project) notFound();

  return <ProjectDetail project={project} />;
}
