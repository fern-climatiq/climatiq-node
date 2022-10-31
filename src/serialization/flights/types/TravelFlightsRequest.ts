/**
 * This file auto-generated by Fern from our API Definition.
 */

import { ClimatiqApi } from "../../..";
import * as core from "../../../core";
import * as serializers from "../..";

export const TravelFlightsRequest: core.schemas.ObjectSchema<
  TravelFlightsRequest.Raw,
  ClimatiqApi.flights.TravelFlightsRequest
> = core.schemas.object({
  legs: core.schemas.list(core.schemas.lazyObject(() => serializers.flights.TravelLeg)),
});

export declare namespace TravelFlightsRequest {
  interface Raw {
    legs: serializers.flights.TravelLeg.Raw[];
  }
}