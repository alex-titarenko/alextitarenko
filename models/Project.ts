import { Screenshot } from './Screenshot'
import { VersionInfo } from './VersionInfo'

export interface Project {
  id: string;
  alias: string;
  name: string;
  stableVersion?: string;
  subtitle: string;
  releaseDate?: string;
  iconImageUrl: string;
  padCategory: string;
  supportedPlatforms: string;
  display: boolean;
  externalUrl?: string;
  downloadUrl?: string;
  facebookPage?: string;
  twitterPage?: string;
  gitHubPage?: string;
  description: string;
  descriptionPad45: string;
  descriptionPad80: string;
  descriptionPad250: string;
  descriptionPad450: string;
  descriptionPad2000: string;
  keyFeatures: string[];
  versionHistory: VersionInfo[];
  systemRequirements: string;
  keywords: string[];
  screenshots: Screenshot[]
}
