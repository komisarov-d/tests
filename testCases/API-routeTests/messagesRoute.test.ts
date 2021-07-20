// import supertest from 'supertest';
// import app from '../../../src/app';

// import { ResponseStatusCode } from '../../../src/common/enums';
// import { getApiV1Route } from '../../helpers';
// import { MessageRoute } from '../../common/enums';

// const request = supertest(app);

describe('/messages Endpoint', () => {
	// const getAllMessagesEndpoint = getApiV1Route(MessageRoute.GetAll);

	describe('POST /messages Endpoint', () => {
		test('messages array length 2', async () => {
			// const response = await request.get(getAllMessagesEndpoint);
			// expect(response.status).toEqual(ResponseStatusCode.Ok);
		});
	});
});
