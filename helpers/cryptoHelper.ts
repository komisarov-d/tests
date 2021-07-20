const bcrypt = require('bcrypt');

const SALT_ROUND = 10;

export const encrypt = (data: string) => bcrypt.hash(data, SALT_ROUND);

export const encryptSync = (data: string) => bcrypt.hashSync(data, SALT_ROUND);

export const compare = (data: string, encrypted: string) => bcrypt.compare(data, encrypted);
