// import supertest from 'supertest';
// import app from '../../../src/app';

// import { ResponseStatusCode } from '../../../src/common/enums';
// import { getApiV1Route } from '../../helpers';
// import { ReviewRoute } from '../../common/enums';

// const request = supertest(app);

describe('/properties Endpoint', () => {
	// const getReviewListEndpoint = getApiV1Route(ReviewRoute.GetAll);
	// const getReviewByIdEndpoint = getApiV1Route(ReviewRoute.GetById);

	describe('GET /properties', () => {
		test('should return array of properties', async () => {
			// const response = await request.post(getReviewListEndpoint);
			// expect(response.status).toEqual(ResponseStatusCode.Ok);
		});
		test('should return property with id 1', async () => {
			// const response = await request.post(`${getReviewByIdEndpoint}1`);
			// expect(response.status).toEqual(ResponseStatusCode.Ok);
		});
	});
});
