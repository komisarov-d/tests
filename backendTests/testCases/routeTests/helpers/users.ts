export const getValidCreateUserPayload = (email: string) => ({
	firstName: 'first-name',
	lastName: 'last-name',
	email,
	password: 'CreatePassword99',
	repeatPassword: 'CreatePassword99',
	role: 'user'
});
