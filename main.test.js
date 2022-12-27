import { expect, test } from "vitest";
import { cumulative } from "./cumulative_sum";
import { search } from "./binary_search";
import { lru } from "./least_recently_used";

test("cumulative sum of an array", () => {
  expect(cumulative([1, 3, 5, 7])).toBe(16);
  expect(cumulative([-2, -4, -8])).toBe(-14);
});

test("binary search", () => {
  expect(search([1, 2, 3, 4, 5, 6, 7], 7)).toBe(6);
  expect(search([1, 2, 3, 4], 1)).toBe(0);
  expect(search([1, 2, 3, 4], 10)).toBe(-1); //?
});

test("least recently used", () => {
  const cache = new lru(3);
  cache.putItem("a", 1);
  expect(cache.getItem("a")).toBe(1);
  cache.putItem("a", 2);
  cache.putItem("c", 3);
  cache.putItem("d", 5);
  cache.putItem("e", 6);
});
