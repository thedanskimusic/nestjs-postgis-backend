import { DataSource } from 'typeorm';
import { User } from './src/user.entity';
import dataSource from './data-source';

async function seed() {
  await dataSource.initialize();
  const userRepo = dataSource.getRepository(User);

  const existing = await userRepo.findOneBy({ email: 'admin@example.com' });
  if (!existing) {
    const user = userRepo.create({ email: 'admin@example.com', name: 'Admin User' });
    await userRepo.save(user);
    console.log('Seeded admin user.');
  } else {
    console.log('Admin user already exists.');
  }

  await dataSource.destroy();
}

seed().catch((e) => {
  console.error(e);
  process.exit(1);
});