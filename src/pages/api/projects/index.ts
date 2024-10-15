import type { APIRoute } from "astro";
import products from '../../../../public/projects.json'; 

export const GET: APIRoute = async (): Promise<Response> => {
  return new Response(JSON.stringify(products), {
    status: 200,
    headers: {
      "Content-Type": "application/json",
    },
  });
}