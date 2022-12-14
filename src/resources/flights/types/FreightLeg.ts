/**
 * This file auto-generated by Fern from our API Definition.
 */

import { ClimatiqApi } from "../../..";

export interface FreightLeg extends ClimatiqApi.flights.BaseLeg {
  /** Weight in the defined unit */
  weight: number;
  /** Unit of weight. Allowed values are kg for metric kilograms, t for tonnes (metric tons) or ton for US short tons.	Default kg */
  weightUnit: string;
  /** This endpoint will automatically pick the highest emission factor which is eligible for the flight. If you want to override the automatic emission factor selection you can provide a selector. You are then fully responsible for emission factor selection. The selector must end up selecting an emission factor that supports the WeightOverDistance unit. */
  emissionFactor: ClimatiqApi.estimation.EmissionSelector;
}
