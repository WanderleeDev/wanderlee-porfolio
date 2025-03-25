import products from "../../public/projects.json";
import type { Project } from "../modules/projects/interfaces/Project.interface";

export function getProjectsParsed(): Project[] {
  return JSON.parse(JSON.stringify(products)) as Project[];
}
