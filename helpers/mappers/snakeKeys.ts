import lodash from 'lodash';

export const snakeKeys = (object: object) => lodash.mapKeys(object, (_value, key) => lodash.snakeCase(key));
