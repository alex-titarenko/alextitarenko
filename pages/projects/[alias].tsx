import React from 'react'
import { useEffect } from 'react'
import Head from 'next/head'
import Layout from '../../components/Layout'
import { Project } from '../../models/Project'
import { ProjectRepository } from '../../repositories/ProjectRepository'
import { Analytics } from '../../utils/analytics'
import appConfig from '../../app.config.json'
import { Screenshot } from '../../models/Screenshot'
import { VersionInfo } from '../../models/VersionInfo'

const projectRepository = new ProjectRepository();

export async function unstable_getStaticPaths() {
  const allProjects = projectRepository.getAll();
  return allProjects.map(project => ({ params: { alias: project.alias } }));
}

export async function unstable_getStaticProps({ params }) {
  const model = projectRepository.getByAlias(params.alias);
  return { props: model };
}

export default function ProjectPage(props: React.PropsWithChildren<Project>) {
  useEffect(() => {
    Analytics.logEvent('Project', 'View', props.name);
  }, [props.alias]);

  const firstScreenshot = props.screenshots.length > 0 ?
    props.screenshots[0] :
    null;

  const secondScreenshot = props.screenshots.length > 1 ?
    props.screenshots[1] :
    null;

  return (
    <Layout
      title={`${props.name} - Overview`}
      description={`${props.name}. Overview`}
      keywords={props.keywords.join(', ')}
      pageId="projects">
      <Head>
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/blueimp-gallery/2.35.0/css/blueimp-gallery.min.css" integrity="sha256-naDjnon+nzJq+z5LGT5dfwVi+u7YLvkdWwaUsxAgMxE=" crossOrigin="anonymous" />
        <script src="https://cdnjs.cloudflare.com/ajax/libs/blueimp-gallery/2.35.0/js/blueimp-gallery.min.js" integrity="sha256-8z4Nnk0KAWvFFxa3bobPTOOV12tkvAur1Se4UN4Af3g=" crossOrigin="anonymous" defer></script>
      </Head>

      <div className="jumbotron page-header">
        <div className="container">
          <h1>{props.name} {props.stableVersion}</h1>
          <p>{props.subtitle}</p>
          <div>
            {!props.externalUrl ? (
              <a className="btn btn-outline-inverse btn-lg" onClick={ () => trackDownload(props.name) } href={getDownloadUrl(props.downloadUrl)}>download</a>
            ) : (
                <a className="btn btn-outline-inverse btn-lg" onClick={ () => trackDownload(props.name) } target="_blank" rel="noopener" href={props.externalUrl}>
                  {props.externalUrl.includes('microsoft.com/store') ? 'Microsoft Store' : 'Homepage'}
                </a>
              )}
          </div>
        </div>
      </div>

      <div className="container">
        <section id="content" itemScope itemType="http://schema.org/SoftwareApplication">
          <div role="tabpanel">
            {/* Nav tabs */}
            <ul className="nav nav-pills nav-justified" role="tablist">
              <li role="presentation" className="active">
                <a href="#overview" aria-controls="overview" role="tab" data-toggle="tab">Overview</a>
              </li>
              {props.screenshots.length > 0 && (
                <li role="presentation">
                  <a href="#screenshots" aria-controls="screenshots" role="tab" data-toggle="tab">Screenshots</a>
                </li>
              )}
              {props.versionHistory.length > 0 && (
                <li role="presentation">
                  <a href="#history" aria-controls="history" role="tab" data-toggle="tab">History of changes</a>
                </li>
              )}
            </ul>

            {/* Tab panes */}
            <div className="tab-content product-tab-content">
              <div role="tabpanel" className="tab-pane fade in active" id="overview">
                <div className="row row-proj-desc">
                  <div className="col-sm-6">
                    <h2>Description</h2>
                    <div itemProp="description" dangerouslySetInnerHTML={{__html: props.description}} />
                  </div>

                  <div className="col-sm-6 text-center screenshot-thumb">
                    <div className="glance-container">
                      {firstScreenshot && (
                        <React.Fragment>
                          <img className="img-responsive" src={getScreenshotUrl(props.alias, firstScreenshot.imageName)} />
                          <div className="glance-box"></div>
                        </React.Fragment>
                      )}
                    </div>
                  </div>
                </div>

                <div className="row row-proj-desc row-proj-spec">
                  <div className="col-sm-4 text-center">
                    <p title="Platforms"><i className="fa fa-desktop"></i></p>
                    <p itemProp="operatingSystem">{props.supportedPlatforms}</p>
                  </div>

                  <div className="col-sm-4 text-center">
                    <p title="Languages"><i className="fa fa-flag"></i></p>
                    <p>English</p>
                  </div>

                  <div className="col-sm-4 text-center">
                    <p title="System requirements"><i className="fa fa-cogs"></i></p>
                    <p itemProp="requirements">{props.systemRequirements}</p>
                  </div>
                </div>

                <div className="row row-proj-desc">
                  <div className="col-sm-6 hidden-xs text-center screenshot-thumb">
                    <div className="glance-container">
                      {secondScreenshot && (
                        <React.Fragment>
                          <img className="img-responsive" src={getScreenshotUrl(props.alias, secondScreenshot.imageName)} />
                          <div className="glance-box"></div>
                        </React.Fragment>
                      )}
                    </div>
                  </div>
                  <div className="col-sm-6">
                    <h2>Key Features</h2>
                    {props.keyFeatures.length > 0 &&
                      <CheckList items={ props.keyFeatures } />
                    }
                  </div>
                </div>

                <div className="row text-center">
                  <div className="social-links">
                    {props.gitHubPage && (
                      <a href={props.gitHubPage} title="GitHub project page" target="_blank" rel="noopener"><i className="fa fa-github-alt social-btn"></i></a>
                    )}
                    {props.facebookPage && (
                      <a href={props.facebookPage} title="Facebook page" target="_blank" rel="noopener"><i className="fa fa-facebook social-btn"></i></a>
                    )}
                    {props.twitterPage && (
                      <a href={props.twitterPage} title="Twitter page" target="_blank" rel="noopener"><i className="fa fa-twitter social-btn"></i></a>
                    )}
                  </div>
                </div>
              </div>

              <div id="screenshots" className="tab-pane fade">
                <GalleryLightbox />

                {props.screenshots.length > 0 && (
                  <Screenshots projectAlias={ props.alias } screenshots={ props.screenshots } />
                )}
              </div>

              <div id="history" className="tab-pane fade">
                <div className="row">
                  <div className="col-md-12">
                    <h2>History of changes</h2>
                    <div className="changelog">
                      <VersionHistory historyItems={ props.versionHistory } />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <meta itemProp="url" content={`${appConfig.canonicalBaseUrl}projects/${props.alias}`} />
        </section>
      </div>
    </Layout>
  )
}

function CheckList(props: { items: string[] }) {
  const listItems = props.items.map((item, index) => (
    <li key={index}><span className='glyphicon glyphicon-ok'></span><span>{item}</span></li>
  ));

  return (
    <ul className="check-list">
      { listItems }
    </ul>
  );
}

/*
* The Bootstrap Image Gallery lightbox, should be a child element of the document body
*/
function GalleryLightbox() {
  return (
    <div id="blueimp-gallery" className="blueimp-gallery" data-use-bootstrap-modal="false">
      {/* The container for the modal slides */}
      <div className="slides"></div>
      {/* Controls for the borderless lightbox */}
      <h3 className="title"></h3>
      <a className="prev">‹</a>
      <a className="next">›</a>
      <a className="close">×</a>
      <a className="play-pause"></a>
      <ol className="indicator"></ol>
      {/* The modal dialog, which will be used to wrap the lightbox content */}
      <div className="modal fade">
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <button type="button" className="close" aria-hidden="true">&times;</button>
              <h4 className="modal-title"></h4>
            </div>
            <div className="modal-body next"></div>
            <div className="modal-footer">
              <button type="button" className="btn btn-default pull-left prev">
                <i className="glyphicon glyphicon-chevron-left"></i>
                Previous
              </button>
              <button type="button" className="btn btn-primary next">
                Next
                <i className="glyphicon glyphicon-chevron-right"></i>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function Screenshots(props: { projectAlias: string, screenshots: Screenshot[] }) {
  const items = props.screenshots.map(screenshot => (
    <a rel="thumbnail" className="thumbnail scr-thumbnail" href={getScreenshotUrl(props.projectAlias, screenshot.imageName)} title={screenshot.caption} data-gallery>
      <img src={getScreenshotUrl(props.projectAlias, screenshot.imageName)} alt={screenshot.caption} itemProp="image" />
    </a>
  ));

  return (
    <div id="links" onClick={clickScreenshot} className="text-center">
      { items }
    </div>
  )
}

function VersionHistory(props: { historyItems: VersionInfo[] }) {
  const sortedItems = props.historyItems
    .slice()
    .sort((a, b) => new Date(b.releaseDate).getTime() - new Date(a.releaseDate).getTime());

  const historyItems = sortedItems.map(historyItem => (
    <li>
      <strong>v{historyItem.version}</strong> Released: {new Date(historyItem.releaseDate).toLocaleDateString("en-US")}<br />
      {historyItem.description}.
      {historyItem.changes && historyItem.changes.length > 0 && (
        <ul>
          { historyItem.changes.map(change => (<li>{change}.</li>)) }
        </ul>
      )}
    </li>
  ));

  return (
    <ul>
      { historyItems }
    </ul>
  )
}

function clickScreenshot(event: React.MouseEvent<HTMLDivElement, MouseEvent>) {
  event.preventDefault();

  const target = event.target as HTMLInputElement;
  const link = target.src ? target.parentNode : target;

  if (link instanceof HTMLAnchorElement) {
    const options = { index: link, event: event };
    const links = link.parentElement.getElementsByTagName('a');
    window['blueimp'].Gallery(links, options);
  }
}

function getDownloadUrl(downloadUrl: string) {
  return downloadUrl.toLowerCase().startsWith('http') ? downloadUrl : `/downloads/${downloadUrl}`;
}

function getScreenshotUrl(projectAlias: string, imageName: string) {
  return `/images/screenshots/${projectAlias}/${imageName}`;
}

function trackDownload(projectName: string) {
  Analytics.logEvent('Project', 'Download', projectName);
}

