/**
 * This file auto-generated by Fern from our API Definition.
 */

import { ClimatiqApi } from "../../..";
import * as core from "../../../core";
import * as serializers from "../..";

export const EmissionFactor: core.schemas.ObjectSchema<EmissionFactor.Raw, ClimatiqApi.emissionFactor.EmissionFactor> =
  core.schemas.object({
    uuid: core.schemas.string(),
    activityId: core.schemas.property("activity_id", core.schemas.string()),
    id: core.schemas.string(),
    accessType: core.schemas.property("access_type", core.schemas.string()),
    name: core.schemas.string(),
    category: core.schemas.string(),
    sector: core.schemas.string(),
    source: core.schemas.string(),
    sourceLink: core.schemas.property("source_link", core.schemas.string()),
    uncertainty: core.schemas.number().optional(),
    year: core.schemas.string(),
    region: core.schemas.string(),
    regionName: core.schemas.property("region_name", core.schemas.string()),
    description: core.schemas.string(),
    unitType: core.schemas.property("unit_type", core.schemas.list(core.schemas.string())),
    unit: core.schemas.string(),
    lcaActivity: core.schemas.property("lca_activity", core.schemas.string()),
    supportedCalculationMethods: core.schemas.property(
      "supported_calculation_methods",
      core.schemas.list(core.schemas.string())
    ),
    factor: core.schemas.number(),
    factorCalculationMethod: core.schemas.property(
      "factor_calculation_method",
      core.schemas.lazy(() => serializers.estimation.CalculationMethod)
    ),
    factorCalculationOrigin: core.schemas.property(
      "factor_calculation_origin",
      core.schemas.lazy(() => serializers.emissionFactor.FactorCalculationOrigin)
    ),
    constituentGases: core.schemas.property(
      "constituent_gases",
      core.schemas.lazyObject(() => serializers.estimation.ConstituentGases)
    ),
  });

export declare namespace EmissionFactor {
  interface Raw {
    uuid: string;
    activity_id: string;
    id: string;
    access_type: string;
    name: string;
    category: string;
    sector: string;
    source: string;
    source_link: string;
    uncertainty?: number | null;
    year: string;
    region: string;
    region_name: string;
    description: string;
    unit_type: string[];
    unit: string;
    lca_activity: string;
    supported_calculation_methods: string[];
    factor: number;
    factor_calculation_method: serializers.estimation.CalculationMethod.Raw;
    factor_calculation_origin: serializers.emissionFactor.FactorCalculationOrigin.Raw;
    constituent_gases: serializers.estimation.ConstituentGases.Raw;
  }
}
