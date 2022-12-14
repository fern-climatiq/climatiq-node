/**
 * This file auto-generated by Fern from our API Definition.
 */

import { ClimatiqApi } from "../../..";
import * as core from "../../../core";

export const LcaActivitiesResponse: core.schemas.ObjectSchema<
  LcaActivitiesResponse.Raw,
  ClimatiqApi.emissionFactor.LcaActivitiesResponse
> = core.schemas.object({
  results: core.schemas.list(core.schemas.string()),
});

export declare namespace LcaActivitiesResponse {
  interface Raw {
    results: string[];
  }
}
