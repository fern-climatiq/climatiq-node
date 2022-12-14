/**
 * This file auto-generated by Fern from our API Definition.
 */

import { ClimatiqApi } from "../../..";
import * as core from "../../../core";
import * as serializers from "../..";

export const CpuRequest: core.schemas.ObjectSchema<CpuRequest.Raw, ClimatiqApi.cloudComputing.CpuRequest> = core.schemas
  .object({
    cpuCount: core.schemas.property("cpu_count", core.schemas.number()),
    cpuLoad: core.schemas.property("cpu_load", core.schemas.number()),
    duration: core.schemas.number(),
  })
  .extend(core.schemas.lazyObject(() => serializers.cloudComputing.BaseRequest));

export declare namespace CpuRequest {
  interface Raw extends serializers.cloudComputing.BaseRequest.Raw {
    cpu_count: number;
    cpu_load: number;
    duration: number;
  }
}
