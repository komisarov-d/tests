import { DbTableName } from '../../enums';

export interface IInsertParams {
	table: DbTableName;
	// eslint-disable-next-line @typescript-eslint/ban-types
	data: object | object[];
	returning?: string[];
}
