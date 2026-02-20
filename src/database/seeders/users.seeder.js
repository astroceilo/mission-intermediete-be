import { createUser, getUserByEmail } from '../../models/users.model.js';

import { generateUser } from '../factories/users.factories.js';

const seedUsers = async () => {
  try {
    // chek if admin user already exists
    const adminExists = await getUserByEmail('admin@test.com');

    if (!adminExists) {
      await createUser({
        full_name: 'Admin',
        email: 'admin@test.com',
        password: '123456',
        role: 'admin',
        status: 'active',
      });
      console.log('✅ Admin User Created!');
    } else {
      console.log('❌ Admin User already exists');
    }

    // instructor
    await Promise.all(
      Array.from({ length: 15 }, () =>
        createUser(generateUser('instructor'))
      )
    );
    console.log('✅ 15 Instructor User Created!');

    // student
    await Promise.all(
      Array.from({ length: 10 }, () =>
        createUser(generateUser('student'))
      )
    );
    console.log('✅ 10 Student User Created!');

    console.log('Seeder selesai');
    process.exit();
  } catch (error) {
    console.error('❌ Error seeding users:', error.message);
  }  
};

seedUsers();