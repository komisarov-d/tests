import { setupTestUsers } from './database';

const databaseSetup = async () => {
	await setupTestUsers();
};

export { databaseSetup };
