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
 * The Climatiq API can be queried for emission factors in a number of ways, outlined below.
 */
export class Client {
  constructor(private readonly options: Client.Options) {}

  public async search(
    request: ClimatiqApi.emissionFactor.search.Request
  ): Promise<ClimatiqApi.emissionFactor.search.Response> {
    const queryParameters = new URLSearchParams();
    if (request.query != null) {
      queryParameters.append("query", request.query);
    }

    if (request.uuid != null) {
      queryParameters.append("uuid", request.uuid);
    }

    if (request.activityId != null) {
      queryParameters.append("activity_id", request.activityId);
    }

    if (request.id != null) {
      queryParameters.append("id", request.id);
    }

    if (request.category != null) {
      queryParameters.append("category", request.category);
    }

    if (request.sector != null) {
      queryParameters.append("sector", request.sector);
    }

    if (request.source != null) {
      queryParameters.append("source", request.source);
    }

    if (request.year != null) {
      queryParameters.append("year", request.year);
    }

    if (request.region != null) {
      queryParameters.append("region", request.region);
    }

    if (request.lcaActivity != null) {
      queryParameters.append("lca_activity", request.lcaActivity);
    }

    if (request.unitType != null) {
      queryParameters.append("unit_type", request.unitType);
    }

    if (request.calculationMethod != null) {
      queryParameters.append("calculation_method", request.calculationMethod.value);
    }

    if (request.page != null) {
      queryParameters.append("page", request.page.toString());
    }

    if (request.resultsPerPage != null) {
      queryParameters.append("results_per_page", request.resultsPerPage.toString());
    }

    const response = await core.fetcher({
      url: urlJoin(this.options.environment ?? environments.Environment.Production, "/search"),
      method: "GET",
      headers: {
        Authorization: core.BearerToken.toAuthorizationHeader(await core.Supplier.get(this.options.auth?.token)),
      },
      queryParameters: queryParameters,
    });
    if (response.ok) {
      return {
        ok: true,
        body: serializers.emissionFactor.SearchEmissionFactorsResponse.parse(
          response.body as serializers.emissionFactor.SearchEmissionFactorsResponse.Raw
        ),
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

  public async getYears(
    request: ClimatiqApi.emissionFactor.getYears.Request
  ): Promise<ClimatiqApi.emissionFactor.getYears.Response> {
    const queryParameters = new URLSearchParams();
    if (request.category != null) {
      queryParameters.append("category", request.category);
    }

    if (request.source != null) {
      queryParameters.append("source", request.source);
    }

    if (request.region != null) {
      queryParameters.append("region", request.region);
    }

    if (request.year != null) {
      queryParameters.append("year", request.year);
    }

    if (request.calculationMethod != null) {
      queryParameters.append("calculation_method", request.calculationMethod);
    }

    if (request.lcaActivity != null) {
      queryParameters.append("lca_activity", request.lcaActivity);
    }

    if (request.activityId != null) {
      queryParameters.append("activity_id", request.activityId);
    }

    const response = await core.fetcher({
      url: urlJoin(this.options.environment ?? environments.Environment.Production, "/emission-factors/years"),
      method: "GET",
      headers: {
        Authorization: core.BearerToken.toAuthorizationHeader(await core.Supplier.get(this.options.auth?.token)),
      },
      queryParameters: queryParameters,
    });
    if (response.ok) {
      return {
        ok: true,
        body: serializers.emissionFactor.YearsResponse.parse(
          response.body as serializers.emissionFactor.YearsResponse.Raw
        ),
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

  public async getSources(
    request: ClimatiqApi.emissionFactor.getSources.Request
  ): Promise<ClimatiqApi.emissionFactor.getSources.Response> {
    const queryParameters = new URLSearchParams();
    if (request.sector != null) {
      queryParameters.append("sector", request.sector);
    }

    if (request.category != null) {
      queryParameters.append("category", request.category);
    }

    if (request.source != null) {
      queryParameters.append("source", request.source);
    }

    if (request.region != null) {
      queryParameters.append("region", request.region);
    }

    if (request.year != null) {
      queryParameters.append("year", request.year);
    }

    if (request.calculationMethod != null) {
      queryParameters.append("calculation_method", request.calculationMethod);
    }

    if (request.lcaActivity != null) {
      queryParameters.append("lca_activity", request.lcaActivity);
    }

    if (request.iactivityIdd != null) {
      queryParameters.append("iactivity_idd", request.iactivityIdd);
    }

    const response = await core.fetcher({
      url: urlJoin(this.options.environment ?? environments.Environment.Production, "/emission-factors/sources"),
      method: "GET",
      headers: {
        Authorization: core.BearerToken.toAuthorizationHeader(await core.Supplier.get(this.options.auth?.token)),
      },
      queryParameters: queryParameters,
    });
    if (response.ok) {
      return {
        ok: true,
        body: serializers.emissionFactor.SourcesResponse.parse(
          response.body as serializers.emissionFactor.SourcesResponse.Raw
        ),
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

  public async getRegions(
    request: ClimatiqApi.emissionFactor.getRegions.Request
  ): Promise<ClimatiqApi.emissionFactor.getRegions.Response> {
    const queryParameters = new URLSearchParams();
    if (request.sector != null) {
      queryParameters.append("sector", request.sector);
    }

    if (request.category != null) {
      queryParameters.append("category", request.category);
    }

    if (request.source != null) {
      queryParameters.append("source", request.source);
    }

    if (request.region != null) {
      queryParameters.append("region", request.region);
    }

    if (request.year != null) {
      queryParameters.append("year", request.year);
    }

    if (request.calculationMethod != null) {
      queryParameters.append("calculation_method", request.calculationMethod);
    }

    if (request.lcaActivity != null) {
      queryParameters.append("lca_activity", request.lcaActivity);
    }

    if (request.activityId != null) {
      queryParameters.append("activity_id", request.activityId);
    }

    const response = await core.fetcher({
      url: urlJoin(this.options.environment ?? environments.Environment.Production, "/emission-factors/regions"),
      method: "GET",
      headers: {
        Authorization: core.BearerToken.toAuthorizationHeader(await core.Supplier.get(this.options.auth?.token)),
      },
      queryParameters: queryParameters,
    });
    if (response.ok) {
      return {
        ok: true,
        body: serializers.emissionFactor.RegionsResponse.parse(
          response.body as serializers.emissionFactor.RegionsResponse.Raw
        ),
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

  public async getCategories(
    request: ClimatiqApi.emissionFactor.getCategories.Request
  ): Promise<ClimatiqApi.emissionFactor.getCategories.Response> {
    const queryParameters = new URLSearchParams();
    if (request.sector != null) {
      queryParameters.append("sector", request.sector);
    }

    if (request.category != null) {
      queryParameters.append("category", request.category);
    }

    if (request.source != null) {
      queryParameters.append("source", request.source);
    }

    if (request.region != null) {
      queryParameters.append("region", request.region);
    }

    if (request.year != null) {
      queryParameters.append("year", request.year);
    }

    if (request.calculationMethod != null) {
      queryParameters.append("calculation_method", request.calculationMethod);
    }

    if (request.lcaActivity != null) {
      queryParameters.append("lca_activity", request.lcaActivity);
    }

    if (request.activityId != null) {
      queryParameters.append("activity_id", request.activityId);
    }

    const response = await core.fetcher({
      url: urlJoin(this.options.environment ?? environments.Environment.Production, "/emission-factors/categories"),
      method: "GET",
      headers: {
        Authorization: core.BearerToken.toAuthorizationHeader(await core.Supplier.get(this.options.auth?.token)),
      },
      queryParameters: queryParameters,
    });
    if (response.ok) {
      return {
        ok: true,
        body: serializers.emissionFactor.CategoriesResponse.parse(
          response.body as serializers.emissionFactor.CategoriesResponse.Raw
        ),
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

  public async getSectors(
    request: ClimatiqApi.emissionFactor.getSectors.Request
  ): Promise<ClimatiqApi.emissionFactor.getSectors.Response> {
    const queryParameters = new URLSearchParams();
    if (request.sector != null) {
      queryParameters.append("sector", request.sector);
    }

    if (request.category != null) {
      queryParameters.append("category", request.category);
    }

    if (request.source != null) {
      queryParameters.append("source", request.source);
    }

    if (request.region != null) {
      queryParameters.append("region", request.region);
    }

    if (request.year != null) {
      queryParameters.append("year", request.year);
    }

    if (request.calculationMethod != null) {
      queryParameters.append("calculation_method", request.calculationMethod);
    }

    if (request.lcaActivity != null) {
      queryParameters.append("lca_activity", request.lcaActivity);
    }

    if (request.activityId != null) {
      queryParameters.append("activity_id", request.activityId);
    }

    const response = await core.fetcher({
      url: urlJoin(this.options.environment ?? environments.Environment.Production, "/emission-factors/sectors"),
      method: "GET",
      headers: {
        Authorization: core.BearerToken.toAuthorizationHeader(await core.Supplier.get(this.options.auth?.token)),
      },
      queryParameters: queryParameters,
    });
    if (response.ok) {
      return {
        ok: true,
        body: serializers.emissionFactor.SectorsResponse.parse(
          response.body as serializers.emissionFactor.SectorsResponse.Raw
        ),
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

  public async getLcaActivities(
    request: ClimatiqApi.emissionFactor.getLcaActivities.Request
  ): Promise<ClimatiqApi.emissionFactor.getLcaActivities.Response> {
    const queryParameters = new URLSearchParams();
    if (request.sector != null) {
      queryParameters.append("sector", request.sector);
    }

    if (request.category != null) {
      queryParameters.append("category", request.category);
    }

    if (request.source != null) {
      queryParameters.append("source", request.source);
    }

    if (request.region != null) {
      queryParameters.append("region", request.region);
    }

    if (request.year != null) {
      queryParameters.append("year", request.year);
    }

    if (request.calculationMethod != null) {
      queryParameters.append("calculation_method", request.calculationMethod);
    }

    if (request.lcaActivity != null) {
      queryParameters.append("lca_activity", request.lcaActivity);
    }

    if (request.activityId != null) {
      queryParameters.append("activity_id", request.activityId);
    }

    const response = await core.fetcher({
      url: urlJoin(this.options.environment ?? environments.Environment.Production, "/emission-factors/lca-activities"),
      method: "GET",
      headers: {
        Authorization: core.BearerToken.toAuthorizationHeader(await core.Supplier.get(this.options.auth?.token)),
      },
      queryParameters: queryParameters,
    });
    if (response.ok) {
      return {
        ok: true,
        body: serializers.emissionFactor.LcaActivitiesResponse.parse(
          response.body as serializers.emissionFactor.LcaActivitiesResponse.Raw
        ),
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

  public async getUnitTypes(
    request: ClimatiqApi.emissionFactor.getUnitTypes.Request
  ): Promise<ClimatiqApi.emissionFactor.getUnitTypes.Response> {
    const queryParameters = new URLSearchParams();
    if (request.sector != null) {
      queryParameters.append("sector", request.sector);
    }

    if (request.category != null) {
      queryParameters.append("category", request.category);
    }

    if (request.source != null) {
      queryParameters.append("source", request.source);
    }

    if (request.region != null) {
      queryParameters.append("region", request.region);
    }

    if (request.year != null) {
      queryParameters.append("year", request.year);
    }

    if (request.calculationMethod != null) {
      queryParameters.append("calculation_method", request.calculationMethod);
    }

    if (request.lcaActivity != null) {
      queryParameters.append("lca_activity", request.lcaActivity);
    }

    if (request.activityId != null) {
      queryParameters.append("activity_id", request.activityId);
    }

    const response = await core.fetcher({
      url: urlJoin(this.options.environment ?? environments.Environment.Production, "/emission-factors/"),
      method: "GET",
      headers: {
        Authorization: core.BearerToken.toAuthorizationHeader(await core.Supplier.get(this.options.auth?.token)),
      },
      queryParameters: queryParameters,
    });
    if (response.ok) {
      return {
        ok: true,
        body: serializers.emissionFactor.UnitTypesResponse.parse(
          response.body as serializers.emissionFactor.UnitTypesResponse.Raw
        ),
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