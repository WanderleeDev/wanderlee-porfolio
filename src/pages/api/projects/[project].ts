import type { APIRoute } from "astro";
import { myProjects } from "../../../data/myProjects";

export const GET: APIRoute = async ({ params }) => {
  const { project } = params;

  if (!project) {
    return responseApi({ message: "Project not found" }, 404); 
  }

  const projectFind = myProjects.find(
    (p) =>
      p.title.toLocaleLowerCase() ===
      project.replaceAll("-", " ").toLocaleLowerCase()
  );

  if (!project) {
    return responseApi({ message: "Project not found" }, 404); 
  }

  return responseApi(projectFind, 200);
};

function responseApi(body: unknown, statusCode: number, statusText?: string) {
  return new Response(JSON.stringify(body), {
    status: statusCode,
    statusText,
    headers: {
      "Content-Type": "application/json",
    },
  });
}
