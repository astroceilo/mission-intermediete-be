import { faker } from '@faker-js/faker';

export const generateUser = (role = 'student') => {
  return {
    full_name: faker.person.fullName(),
    email: faker.internet.email().toLowerCase(),
    password: faker.internet.password(),
    gender: faker.helpers.arrayElement(['male', 'female', 'other']),
    phone: faker.phone.number(),
    role,
    status: 'active'
  };
};