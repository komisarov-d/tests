import knex from 'knex';

import knexConfig from '../../knexfile';
import { AppEnvironment } from '../../src/common/enums';

const connection = knex(knexConfig[AppEnvironment.TEST]);

export default connection;
