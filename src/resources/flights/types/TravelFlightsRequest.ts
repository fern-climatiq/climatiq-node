/**
 * This file auto-generated by Fern from our API Definition.
 */

import { ClimatiqApi } from "../../..";

export interface TravelFlightsRequest {
  /** An array of one or more legs in a flight */
  legs: ClimatiqApi.flights.TravelLeg[];
}
