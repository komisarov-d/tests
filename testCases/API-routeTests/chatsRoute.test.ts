// import supertest from 'supertest';
// import app from '../../../src/app';

// import { ResponseStatusCode } from '../../../src/common/enums';
// import { getApiV1Route } from '../../helpers';
// import { ChatRoute } from '../../common/enums';

// const request = supertest(app);

describe('/chats Endpoint', () => {
	// const getChatEndpoint = getApiV1Route(ChatRoute.GetAll);

	describe('GET /chats Endpoint', () => {
		test('should return messages array with chat id 1', async () => {
			// const response = await request.get(`${getChatEndpoint}1`);
			// expect(response.status).toEqual(ResponseStatusCode.Ok);
		});
	});
});
