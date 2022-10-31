/**
 * This file auto-generated by Fern from our API Definition.
 */

import { ClimatiqApi } from "../../..";
import * as core from "../../../core";
import * as serializers from "../..";

export const customActivityRequest: core.schemas.ObjectSchema<
  customActivityRequest.Raw,
  ClimatiqApi.customActivities.customActivityRequest
> = core.schemas.object({
  customActivity: core.schemas.property(
    "custom_activity",
    core.schemas.lazyObject(() => serializers.customActivities.customActivitySelector)
  ),
  parameters: core.schemas.record(core.schemas.string(), core.schemas.unknown()),
});

export declare namespace customActivityRequest {
  interface Raw {
    custom_activity: serializers.customActivities.customActivitySelector.Raw;
    parameters: Record<string, unknown>;
  }
}
