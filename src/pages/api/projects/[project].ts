import type { APIRoute } from "astro";
import { getProjectsParsed } from "../../../utils/projectsParsed";

export const GET: APIRoute = async ({ params }) => {
  const { project } = params;
  const productsParsed = getProjectsParsed();

  if (!project) {
    return responseApi({ message: "Project not found" }, 404);
  }

  const projectFind = productsParsed.find(
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
