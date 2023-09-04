import { students, studentsWithAge } from "./data/studentsList";

// return the student list sorted by grade
export function sortByGrade<T extends typeof students>(characters: T): T {}

// return the first unique character in a word.
export function findFirstUniqueChar(word: string): string {}

// return the student list first sorted by age and then sorted by grade
export function sortByAgeAndGrade<T extends typeof studentsWithAge>(
  characters: T
): T {}
