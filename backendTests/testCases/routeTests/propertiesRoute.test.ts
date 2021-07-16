// import supertest from 'supertest';
// import app from '../../../src/app';

// import { ResponseStatusCode } from '../../../src/common/enums';
// import { getApiV1Route } from '../../helpers';
// import { PropertyRoute } from '../../common/enums';

// const request = supertest(app);

describe('/properties Endpoint', () => {
	// const getPropertyListEndpoint = getApiV1Route(PropertyRoute.GetAll);
	// const getPropertyByIdEndpoint = getApiV1Route(PropertyRoute.GetById);

	describe('GET /properties', () => {
		test('should return array of properties', async () => {
			// const response = await request.post(getPropertyListEndpoint);
			// expect(response.status).toEqual(ResponseStatusCode.Ok);
		});
		test('should return property with id 1', async () => {
			// const response = await request.post(`${getPropertyByIdEndpoint}1`);
			// expect(response.status).toEqual(ResponseStatusCode.Ok);
		});
	});
});
