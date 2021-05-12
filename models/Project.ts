import { Screenshot } from './Screenshot'
import { VersionInfo } from './VersionInfo'

export interface Project {
  id: string;
  alias: string;
  name: string;
  stableVersion?: string;
  subtitle: string;
  releaseDate?: string;
  supportedPlatforms: string;
  display: boolean;
  externalUrl?: string;
  downloadUrl?: string;
  facebookPage?: string;
  twitterPage?: string;
  gitHubPage?: string;
  description: string;
  keyFeatures: string[];
  versionHistory: VersionInfo[];
  systemRequirements: string;
  keywords: string[];
  screenshots: Screenshot[]
}
