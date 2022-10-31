/**
 * This file auto-generated by Fern from our API Definition.
 */

import { ClimatiqApi } from "../../..";

export interface CpuRequest extends ClimatiqApi.cloudComputing.BaseRequest {
  /** The number of virtual cores you are calculating for. */
  cpuCount: number;
  /** The average load across all of your vCPU's specified as a float between 0 and 1. */
  cpuLoad: number;
  /** How long the vCPUs are running for. Default is h */
  duration: number;
}