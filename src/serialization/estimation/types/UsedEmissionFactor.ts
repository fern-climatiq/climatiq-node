/**
 * This file auto-generated by Fern from our API Definition.
 */

import { ClimatiqApi } from "../../..";
import * as core from "../../../core";

export const UsedEmissionFactor: core.schemas.ObjectSchema<
  UsedEmissionFactor.Raw,
  ClimatiqApi.estimation.UsedEmissionFactor
> = core.schemas.object({
  activityId: core.schemas.property("activity_id", core.schemas.string()),
  source: core.schemas.string(),
  year: core.schemas.string(),
  region: core.schemas.string(),
  category: core.schemas.string(),
  lcaActivity: core.schemas.property("lca_activity", core.schemas.string()),
});

export declare namespace UsedEmissionFactor {
  interface Raw {
    activity_id: string;
    source: string;
    year: string;
    region: string;
    category: string;
    lca_activity: string;
  }
}