/**
 * This file auto-generated by Fern from our API Definition.
 */

import { ClimatiqApi } from "../../..";
import * as core from "../../../core";

export const SourcesResponse: core.schemas.ObjectSchema<
  SourcesResponse.Raw,
  ClimatiqApi.emissionFactor.SourcesResponse
> = core.schemas.object({
  results: core.schemas.list(core.schemas.string()),
});

export declare namespace SourcesResponse {
  interface Raw {
    results: string[];
  }
}
