/**
 * This file auto-generated by Fern from our API Definition.
 */

export interface CloudProviderMetadata {
  /** The full, human-readable name for the provider */
  providerFullName: string;
  /** The id of the cloud provider. This is the value you must use when specifying provider in the computing endpoints */
  providerId: string;
  /** The different strings you can use for regions in the CPU endpoint for this provider. */
  cpuRegions: string[];
  /** The different strings you can use for regions in the Storage endpoint for this provider. */
  storageRegions: string[];
  /** The different strings you can use for regions in the Memory endpoint for this provider. */
  memoryRegions: string[];
}
