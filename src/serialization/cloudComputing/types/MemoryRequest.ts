/**
 * This file auto-generated by Fern from our API Definition.
 */

import { ClimatiqApi } from "../../..";
import * as core from "../../../core";

export const MemoryRequest: core.schemas.ObjectSchema<MemoryRequest.Raw, ClimatiqApi.cloudComputing.MemoryRequest> =
  core.schemas.object({
    data: core.schemas.number(),
    dataUnit: core.schemas.property("data_unit", core.schemas.string().optional()),
    duration: core.schemas.number(),
  });

export declare namespace MemoryRequest {
  interface Raw {
    data: number;
    data_unit?: string | null;
    duration: number;
  }
}
