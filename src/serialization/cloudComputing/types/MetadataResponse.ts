/**
 * This file auto-generated by Fern from our API Definition.
 */

import { ClimatiqApi } from "../../..";
import * as core from "../../../core";
import * as serializers from "../..";

export const MetadataResponse: core.schemas.ObjectSchema<
  MetadataResponse.Raw,
  ClimatiqApi.cloudComputing.MetadataResponse
> = core.schemas.object({
  cloudProviders: core.schemas.property(
    "cloud_providers",
    core.schemas.record(
      core.schemas.string(),
      core.schemas.lazyObject(() => serializers.cloudComputing.CloudProviderMetadata)
    )
  ),
});

export declare namespace MetadataResponse {
  interface Raw {
    cloud_providers: Record<
      serializers.cloudComputing.CloudProvider.Raw,
      serializers.cloudComputing.CloudProviderMetadata.Raw
    >;
  }
}
