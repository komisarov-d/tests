import supertest from "supertest";
// @ts-ignore
import app from "../../../homework/backend/src/app";

import { ResponseStatusCode } from "../../common/enums/ResponseStatusCode";
import { getApiV1Route } from "../../helpers";
import { AuthRoute } from "../../common/enums";

import { getValidCreateUserPayload } from "./helpers";

const request = supertest(app);

describe("/auth Endpoint", () => {
  // const loginEndpoint = getApiV1Route(AuthRoute.Login);
  const registerEndpoint = getApiV1Route(AuthRoute.Register);
  // const userEndpoint = getApiV1Route(AuthRoute.User);
  // const tokenEndpoint = getApiV1Route(AuthRoute.Token);

  describe("POST /auth/register Endpoint", () => {
    test("should return a new User", async () => {
      const payload = getValidCreateUserPayload("testMail@gmail.com");
      const response = await request.post(registerEndpoint).send(payload);
      expect(response.status).toEqual(ResponseStatusCode.Ok);
    });
    test('should return error "such email exists in db" ', async () => {
      // let payload = getValidCreateUserPayload('testMail@gmail.com');
      // const response = await request.post(registerEndpoint).send(payload);
      // expect(response.status).toEqual(ResponseStatusCode.BadRequest);
      // expect(response.body).toMatchObject({
      // 	message: expect.any(String)
      // });
    });
  });

  describe("POST /auth/login Endpoint", () => {
    test("should return token", async () => {
      // const { repeatPassword, ...user } = getValidCreateUserPayload('testMail@gmail.com');
      // const response = await request.post(loginEndpoint).send({ email: user.email, password: repeatPassword });
      // expect(response.status).toEqual(ResponseStatusCode.Ok);
      // expect(response.body).toMatchObject({
      // 	refreshToken: expect.any(String),
      // 	token: expect.any(String)
      // });
    });
    test('should return error "Email dont not exist"', async () => {
      // const { repeatPassword, ...user } = getValidCreateUserPayload('testMail1@gmail.com');
      // const response = await request.post(loginEndpoint).send({ email: user.email, password: repeatPassword });
      // expect(response.status).toEqual(ResponseStatusCode.Unauthorized);
      // expect(response.body).toMatchObject({
      // 	message: expect.any(String)
      // });
    });
    test('should return error "Wrong password"', async () => {
      // const { repeatPassword, ...user } = getValidCreateUserPayload('testMail@gmail.com');
      // const response = await request
      // 	.post(loginEndpoint)
      // 	.send({ email: user.email, password: `${repeatPassword}234567` });
      // expect(response.status).toEqual(ResponseStatusCode.Unauthorized);
      // expect(response.body).toMatchObject({
      // 	message: expect.any(String)
      // });
    });
    test('should return error "No such user"', async () => {
      // const { repeatPassword, ...user } = getValidCreateUserPayload('testMail34@gmail.com');
      // const response = await request
      // 	.post(loginEndpoint)
      // 	.send({ email: user.email, password: `${repeatPassword}` });
      // expect(response.status).toEqual(ResponseStatusCode.Unauthorized);
      // expect(response.body).toMatchObject({
      // 	message: expect.any(String)
      // });
    });
  });

  describe("GET /auth/user Endpoint", () => {
    test("should return user data", async () => {
      // const { repeatPassword, ...user } = getValidCreateUserPayload('testMail@gmail.com');
      // const loginResponse = await request
      // 	.post(loginEndpoint)
      // 	.send({ email: user.email, password: repeatPassword });
      // const response = await request
      // 	.get(userEndpoint)
      // 	.set('authorization', `Bearer ${loginResponse.body.token}`)
      // 	.send({ id: 1 });
      // expect(response.status).toEqual(ResponseStatusCode.Ok);
      // expect(response.body).toMatchObject({
      // 	firstName: expect.any(String),
      // 	lastName: expect.any(String),
      // 	email: expect.any(String),
      // 	role: expect.any(String)
      // });
    });

    test('should return error "Not valid token"', async () => {
      // const response = await request.get(userEndpoint).set('authorization', `Bearer hjkl;lkjhb`).send({ id: 1 });
      // expect(response.status).toEqual(ResponseStatusCode.Unauthorized);
    });
  });

  describe("POST /refresh-token Endpoint", () => {
    test("should return new token", async () => {
      // 	const { repeatPassword, ...user } = getValidCreateUserPayload('testMail@gmail.com');
      // 	const loginResponse = await request
      // 		.post(loginEndpoint)
      // 		.send({ email: user.email, password: repeatPassword });
      // 	const response = await request.post(tokenEndpoint).send({
      // 		id: 1,
      // 		authorization: `${loginResponse.body.token}`,
      // 		refreshToken: `${loginResponse.body.refreshToken}`
      // 	});
      // 	expect(response.status).toEqual(ResponseStatusCode.Ok);
      // 	expect(response.body).toMatchObject({
      // 		token: expect.any(String)
      // 	});
      // 	expect(response.body.token).not.toBe(loginResponse.body.token);
      // });
    });

    test("should return error", async () => {
      // const { repeatPassword, ...user } = getValidCreateUserPayload('testMail@gmail.com');
      // const loginResponse = await request.post(loginEndpoint).send({ email: user.email, password: repeatPassword });
      // const response = await request.post(tokenEndpoint).send({
      // 	id: 1,
      // 	authorization: `${loginResponse.body.token}`,
      // 	refreshToken: 'xcvbghjklkjhgfdsdfghjkl'
      // });
      // expect(response.status).toEqual(ResponseStatusCode.Unauthorized);
      // expect(response.body).toMatchObject({
      // 	message: expect.any(String)
      // });
      // });
    });
  });
});
