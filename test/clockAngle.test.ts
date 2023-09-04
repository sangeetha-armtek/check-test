import { expect, test } from "vitest";
import { angleBetweenMinuteAndHourHand } from "../src/clockAngle";

test("timeAngle", () => {
  expect(angleBetweenMinuteAndHourHand(9, 0)).toEqual(90);
  expect(angleBetweenMinuteAndHourHand(4, 0)).toEqual(120);
  expect(angleBetweenMinuteAndHourHand(8, 15)).toEqual(157);
  expect(angleBetweenMinuteAndHourHand(3, 30)).toEqual(75);
});
