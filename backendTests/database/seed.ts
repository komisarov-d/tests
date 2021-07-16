// import { DbTableName } from '../common/enums/DBTableName';
// import faker from 'faker';
// import { random } from 'lodash';
// import { insert } from './setupHandlers/crudHandlers';
// import { Knex } from '.';
// export const seed = async () => {
// 	await Knex(DbTableName.attachments).insert(
// 		Array(5)
// 			.fill(null)
// 			.map(() => ({ name: faker.address.country() }))
// 	);
// 	const countries: any = await Knex('countries').select('id', 'name');

// 	let cities: any = [];

// 	countries.forEach((country: any) => {
// 		Array(10)
// 			.fill(null)
// 			.forEach(() => {
// 				cities = cities.concat({ name: faker.address.city(), country_id: country.id });
// 			});
// 	});

// 	faker.locale = 'en';

// 	await Knex(DbTableName.cities).insert(cities);

// 	const users = Array(100)
// 		.fill(null)
// 		.map(() => ({
// 			first_name: faker.name.firstName(),
// 			last_name: faker.name.lastName(),
// 			email: faker.internet.email(),
// 			password: faker.internet.password(),
// 			role: 'user'
// 		}));

// 	await Knex(DbTableName.users).insert(users);
// 	/////
// 	for (let i = 0; i < random(20); i++) {
// 		await insert({
// 			table: DbTableName.booking,
// 			data: {
// 				user_id: 1,
// 				property_id: 1,
// 				city_id: 1,
// 				first_name: faker.name.firstName(),
// 				last_name: faker.name.lastName(),
// 				email: faker.internet.email(),
// 				phone: faker.phone.phoneNumber(),
// 				travell_for_work: faker.datatype.boolean(),
// 				booking_for_me: faker.datatype.boolean(),
// 				rent_car: faker.datatype.boolean(),
// 				airport_shuttle: faker.datatype.boolean(),
// 				private_taxi: faker.datatype.boolean(),
// 				paperless_confirmation: faker.datatype.boolean(),
// 				send_promotions: faker.datatype.boolean(),
// 				price: random(10000),
// 				is_active: 'Finished'
// 			}
// 		});
// 	}
// };
