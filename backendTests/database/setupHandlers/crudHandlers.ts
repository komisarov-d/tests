import lodash from 'lodash';

import knex from '../connection';
import { snakeKeys, camelKeys } from '../../helpers';
import { IInsertParams } from '../../common/models';

const insert = async ({ table, data, returning = [] }: IInsertParams) => {
	const toInsert = Array.isArray(data) ? data : [data];

	try {
		const query = knex(table)
			.insert(toInsert.map(snakeKeys))
			.modify((scope: { returning: (arg0: string[]) => any; select: (arg0: string[]) => any }) => {
				if (!returning || !returning.length) {
					return scope.returning(['*']);
				}
				return scope.select(returning.map(lodash.snakeCase));
			});
		const result = await query;
		return result.map(camelKeys);
	} catch (err) {
		throw new Error(err);
	}
};

export { insert };
