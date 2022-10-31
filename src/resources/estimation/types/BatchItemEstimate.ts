/**
 * This file auto-generated by Fern from our API Definition.
 */

import { ClimatiqApi } from "../../..";

export type BatchItemEstimate = BatchItemEstimate.Response | BatchItemEstimate.Error | BatchItemEstimate._Unknown;

export declare namespace BatchItemEstimate {
  interface Response extends ClimatiqApi.estimation.EstimateResponse, _Utils {
    type: "response";
  }

  interface Error extends ClimatiqApi.estimation.EstimateError, _Utils {
    type: "error";
  }

  interface _Unknown extends _Utils {
    type: void;
  }

  interface _Utils {
    _visit: <Result>(visitor: BatchItemEstimate._Visitor<Result>) => Result;
  }

  interface _Visitor<Result> {
    response: (value: ClimatiqApi.estimation.EstimateResponse) => Result;
    error: (value: ClimatiqApi.estimation.EstimateError) => Result;
    _other: (value: { type: string }) => Result;
  }
}

export const BatchItemEstimate = {
  response: (value: ClimatiqApi.estimation.EstimateResponse): BatchItemEstimate.Response => {
    const valueWithoutVisit: Omit<BatchItemEstimate.Response, "_visit"> = {
      ...value,
      type: "response",
    };
    Object.defineProperty(valueWithoutVisit, "_visit", {
      enumerable: false,
      writable: true,
    });
    const castedValue = valueWithoutVisit as BatchItemEstimate.Response;
    castedValue._visit = (visitor) => visitor.response(value);
    return castedValue;
  },

  error: (value: ClimatiqApi.estimation.EstimateError): BatchItemEstimate.Error => {
    const valueWithoutVisit: Omit<BatchItemEstimate.Error, "_visit"> = {
      ...value,
      type: "error",
    };
    Object.defineProperty(valueWithoutVisit, "_visit", {
      enumerable: false,
      writable: true,
    });
    const castedValue = valueWithoutVisit as BatchItemEstimate.Error;
    castedValue._visit = (visitor) => visitor.error(value);
    return castedValue;
  },
} as const;
