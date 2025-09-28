import { faker } from "@faker-js/faker";
import type { User } from "../types";

export const generateUsers = (count = 15): User[] =>
  Array.from({ length: count }).map((_, i) => ({
    id: `u${i + 1}`,
    name: faker.person.fullName(),
    email: faker.internet.email(),
    avatar: faker.image.avatar(),
    address: faker.location.streetAddress(),
  }));

export const users = generateUsers();
