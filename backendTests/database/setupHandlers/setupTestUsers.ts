import { encrypt } from '../../helpers';
import { insert } from './crudHandlers';
import { DbTableName } from '../../common/enums';

const setupTestUsers = async () => {
	const defaultPassword = await encrypt('111111');
	const user = {
		email: 'test999@test.com',
		password: defaultPassword,
		first_name: 'test-name',
		last_name: 'test-last',
		role: 'user'
	};
	await insert({
		table: DbTableName.users,
		data: user
	});
};

export { setupTestUsers };
