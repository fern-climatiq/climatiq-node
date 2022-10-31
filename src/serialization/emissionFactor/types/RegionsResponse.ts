/**
 * This file auto-generated by Fern from our API Definition.
 */

import { ClimatiqApi } from "../../..";
import * as core from "../../../core";
import * as serializers from "../..";

export const RegionsResponse: core.schemas.ObjectSchema<
  RegionsResponse.Raw,
  ClimatiqApi.emissionFactor.RegionsResponse
> = core.schemas.object({
  results: core.schemas.list(core.schemas.lazyObject(() => serializers.emissionFactor.Region)),
});

export declare namespace RegionsResponse {
  interface Raw {
    results: serializers.emissionFactor.Region.Raw[];
  }
}
