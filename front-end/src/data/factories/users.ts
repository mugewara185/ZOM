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

export const users: User[] = [
  {
    id: "u1",
    name: "Admin",
    email: "admin@",
    password: "admin",
    role: "admin",
    avatar: "/src/assets/avatars/admin.jpg",
    address: "Zom HQ, Chennai, India",
  },
  {
    id: "u2",
    name: "John Customer",
    email: "john@example.com",
    password: "john123",
    role: "customer",
    avatar: "/src/assets/avatars/customer1.jpg",
    address: "No. 23, Residency Road, Bangalore",
  },
  {
    id: "u3",
    name: "Priya Foodie",
    email: "priya@example.com",
    password: "priya123",
    role: "customer",
    avatar: "/src/assets/avatars/customer2.jpg",
    address: "Plot 77, Anna Nagar, Chennai",
  },
];