/**
 * This file auto-generated by Fern from our API Definition.
 */

import { ClimatiqApi } from "../../..";

export interface StorageRequest extends ClimatiqApi.cloudComputing.BaseRequest {
  /** Which type of hard drive the data is stored on. */
  storageType: ClimatiqApi.cloudComputing.StorageType;
  /** How much data is stored. If you use managed services for storage that replicate data across multiple datacenters or hard drives, you might need to take your data amount and multiply it by a replication factor. */
  data: number;
  /** The unit the data value is in. The values accepted here are the same as in the Data unit.	Default is MB */
  dataUnit?: string;
  /** How long the data is stored for. */
  duration: number;
}
