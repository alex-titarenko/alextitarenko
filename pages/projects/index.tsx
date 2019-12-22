import React from 'react'
import Link from 'next/link'
import Layout from '../../components/Layout'
import { Project } from '../../models/Project'
import { ProjectRepository } from '../../repositories/ProjectRepository'
import { StringHelper } from '../../utils/stringHelper'

type ProjectPageProps = {
  projects: Project[];
}

export async function unstable_getStaticProps() {
  const projectRepository = new ProjectRepository();
  const projects = projectRepository.getAll();
  return { props: { projects } };
}

export default class ProjectsPage extends React.Component<ProjectPageProps> {
  render () {
    return (
      <Layout
        title="Projects"
        description=""
        pageId="projects">

        <div className="jumbotron page-header">
          <div className="container">
            <h1>Projects <i className="fa fa-laptop"></i></h1>
            <p>Explore my personal projects</p>
          </div>
        </div>

        <div className="container">
          <section id="content">
            {this.props.projects.map((project, index) => (
              <div className={`row row-content ${index % 2 != 0 ? "row-alternate" : ""}`}>
                <div className="col-sm-6 text-content">
                  <h1>
                    <Link href="/projects/[alias]" as={`/projects/${project.alias}`}>
                      <a>{project.name}</a>
                    </Link>
                  </h1>

                  <p>{ StringHelper.cut(StringHelper.extractTextFromHtml(project.description), 300, true) }</p>
                </div>

                <div className="col-sm-6 text-center screenshot-thumb">
                  {project.screenshots.length > 0 &&
                    <img src={`/images/screenshots/${project.alias}/${project.screenshots[0].imageName}`} className="img-responsive" />
                  }
                </div>
              </div>
            ))}
          </section>
        </div>
      </Layout>
    )
  }
}
