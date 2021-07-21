import supertest from "supertest";
// @ts-ignore
import app from "../../../homework/backend/src/app";

import { ResponseStatusCode } from "../../common/enums/ResponseStatusCode";
import { getApiV1Route } from "../../helpers";
import { CityRoute } from "../../common/enums";

const request = supertest(app);

describe("/cities Endpoint", () => {
  const getCitiesListEndpoint = getApiV1Route(CityRoute.GetAll);

  describe("GET /cities Endpoint", () => {
    test("should return array of cities", async () => {
      const response = await request.get(getCitiesListEndpoint);
      console.log(response.status);

      expect(response.status).toEqual(ResponseStatusCode.Ok);
    });
  });
});
