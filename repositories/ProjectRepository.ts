import { Project } from '@models/Project'
import projects from '@data/projects'

export class ProjectRepository {
  getAll(): Project[] {
    return projects.filter(x => x.display);
  }

  getByAlias(alias: string): Project {
    return projects.filter(x => x.alias.toLowerCase() == alias.toLowerCase())[0];
  }
}
