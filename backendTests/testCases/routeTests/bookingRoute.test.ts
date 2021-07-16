// import supertest from "supertest";
// import app from "../../../../homework/backend/src/app";

// import { ResponseStatusCode } from "../../common/enums/ResponseStatusCode";
// import { getApiV1Route } from "../../helpers";
// import { BookingRoute } from "../../common/enums";

// const request = supertest(app);

describe("/booking Endpoint", () => {
  // const getBookingListEndpoint = getApiV1Route(BookingRoute.GetAll);
  // const getBookingByIdEndpoint = getApiV1Route(BookingRoute.GetById);

  describe("GET /booking Endpoint", () => {
    test("should return array", () => {
      // const response = await request.get(getBookingListEndpoint);
      // console.log(response.body);
      // expect(response.status).toEqual(ResponseStatusCode.Ok);
    });
    test("should return booking item", async () => {
      // const response = await request.get(`${getBookingByIdEndpoint}1`);
      // expect(response.status).toEqual(ResponseStatusCode.Ok);
    });
  });
});
