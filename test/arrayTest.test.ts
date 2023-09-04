import { expect, test } from "vitest";
import {
  findFirstUniqueChar,
  sortByAgeAndGrade,
  sortByGrade,
} from "../src/arrayTest";
import { students, studentsWithAge } from "../src/data/studentsList";

test("sortByGrade", () => {
  expect(sortByGrade(students)).toEqual([
    { name: "Devlin", grade: 12 },
    { name: "Eagle", grade: 13 },
    { name: "Sam", grade: 14 },
    { name: "Alex", grade: 15 },
  ]);
});

test("uniqueCharacter", () => {
  expect(findFirstUniqueChar("Book")).toEqual("b");
  expect(findFirstUniqueChar("Book")).toEqual("B");
  expect(findFirstUniqueChar("Turtle")).toEqual("t");
  expect(findFirstUniqueChar("Feet")).toEqual("e");
});

test("sortByAgeAndGrade", () => {
  expect(sortByAgeAndGrade(studentsWithAge)).toEqual([
    { name: "Eagle", grade: 13, age: 10 },
    { name: "Alex", grade: 15, age: 10 },
    { name: "Joe", grade: 10, age: 11 },
    { name: "Devlin", grade: 12, age: 11 },
    { name: "Sam", grade: 14, age: 12 },
    { name: "John", grade: 15, age: 12 },
  ]);
});
