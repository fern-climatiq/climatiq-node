/**
 * This file auto-generated by Fern from our API Definition.
 */

import { ClimatiqApi } from "../../..";

export interface customActivityRequest {
  /** A selector allowing the use of a custom activity label defined in the activity mapping tab in the Climatiq Dashboard */
  customActivity: ClimatiqApi.customActivities.customActivitySelector;
  /** Emission factor parameters. The parameter object changes depending on the EF selected. */
  parameters: Record<string, unknown>;
}
