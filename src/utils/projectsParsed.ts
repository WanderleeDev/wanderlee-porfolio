import products from "../../public/projects.json";
import type { IProject } from "../interfaces/IProject.interface";

export function getProjectsParsed(): IProject[] {
  return JSON.parse(JSON.stringify(products)) as IProject[];
}
