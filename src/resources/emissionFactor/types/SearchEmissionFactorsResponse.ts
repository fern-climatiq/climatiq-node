/**
 * This file auto-generated by Fern from our API Definition.
 */

import { ClimatiqApi } from "../../..";

export interface SearchEmissionFactorsResponse {
  /** A list of emission factors for this page. */
  results: ClimatiqApi.emissionFactor.EmissionFactor[];
  /** The current page you have retrieved */
  currentPage: number;
  /** The last page that there are results for. */
  lastPage: number;
  /** How many results there are in total across all pages. */
  totalResults: number;
  /** A list of potential filters you can use to further narrow down your query. This will specify which sources, years etc. your current data contains. */
  possibleFilters: ClimatiqApi.emissionFactor.PossibleEmissionFactorFilters;
}
