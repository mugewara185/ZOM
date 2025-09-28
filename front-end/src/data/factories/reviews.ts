import { faker } from "@faker-js/faker";
import type { Review } from "../types";
import { users } from "./users";
import { restaurants } from "./restaurants";

export const generateReviews = (count = 40): Review[] =>
  Array.from({ length: count }).map((_, i) => {
    const user = users[i % users.length];
    const restaurant = restaurants[i % restaurants.length];

    return {
      id: `rev${i + 1}`,
      userId: user.id,
      restaurantId: restaurant.id,
      rating: faker.number.float({ min: 1, max: 5, multipleOf: 0.1 }),
      comment: faker.lorem.sentence(),
      createdAt: faker.date.past().toISOString(),
    };
  });

export const reviews = generateReviews();
