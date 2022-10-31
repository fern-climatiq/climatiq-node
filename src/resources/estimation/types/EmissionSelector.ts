/**
 * This file auto-generated by Fern from our API Definition.
 */

import { ClimatiqApi } from "../../..";

export interface EmissionSelector {
  activityId: string;
  source?: string;
  region?: string;
  regionFallback?: boolean;
  year?: string;
  lcaActivity?: string;
  calculationMethod?: ClimatiqApi.estimation.CalculationMethod;
}
