/**
 * This file auto-generated by Fern from our API Definition.
 */

import * as environments from "../../../environments";
import * as core from "../../../core";
import { ClimatiqApi } from "../../..";
import urlJoin from "url-join";
import * as serializers from "../../../serialization";

export declare namespace Client {
  interface Options {
    environment?: environments.Environment | string;
    auth?: {
      token?: core.Supplier<core.BearerToken>;
    };
  }
}

/**
 * In addition to direct calculation of emissions per passenger-kilometer, passenger-mile, tonne-kilometer or ton-mile, Climatiq makes endpoints available for calculating emissions based on departure and arrival airports. The API will automatically select an emission factor, currently based on choosing the highest available CO2e value; a specific ID can be selected to override this.
 */
export class Client {
  constructor(private readonly options: Client.Options) {}

  public async travelFlights(
    request: ClimatiqApi.flights.TravelFlightsRequest
  ): Promise<ClimatiqApi.flights.travelFlights.Response> {
    const response = await core.fetcher({
      url: urlJoin(this.options.environment ?? environments.Environment.Production, "/travel/flights"),
      method: "POST",
      headers: {
        Authorization: core.BearerToken.toAuthorizationHeader(await core.Supplier.get(this.options.auth?.token)),
      },
      body: serializers.flights.TravelFlightsRequest.json(request),
    });
    if (response.ok) {
      return {
        ok: true,
        body: serializers.flights.TripEmissions.parse(response.body as serializers.flights.TripEmissions.Raw),
      };
    }

    return {
      ok: false,
      error: {
        errorName: undefined,
        content: response.error,
        _visit: (visitor) => visitor._other(response.error),
      },
    };
  }

  public async freightFlights(
    request: ClimatiqApi.flights.FreightFlightsRequest
  ): Promise<ClimatiqApi.flights.freightFlights.Response> {
    const response = await core.fetcher({
      url: urlJoin(this.options.environment ?? environments.Environment.Production, "/freight/flights"),
      method: "POST",
      headers: {
        Authorization: core.BearerToken.toAuthorizationHeader(await core.Supplier.get(this.options.auth?.token)),
      },
      body: serializers.flights.FreightFlightsRequest.json(request),
    });
    if (response.ok) {
      return {
        ok: true,
        body: serializers.flights.TripEmissions.parse(response.body as serializers.flights.TripEmissions.Raw),
      };
    }

    return {
      ok: false,
      error: {
        errorName: undefined,
        content: response.error,
        _visit: (visitor) => visitor._other(response.error),
      },
    };
  }
}