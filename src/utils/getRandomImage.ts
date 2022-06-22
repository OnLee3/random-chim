import db from "../assets";

type People = "침착맨" | "주호민" | "주변인물";
type Emotions = "joy" | "angry";
type PeopleItem = {
  joy: string[];
  angry: string[];
};

function isSame(next: string, cur: string) {
  if (next === cur) return true;
  return false;
}

export default function getRandomImage(
  src: string,
  people?: Set<string>,
  emotions?: Set<string>
) {
  const newArray = filterImage(people, emotions);
  const { length } = newArray;
  let next = parseInt(String(Math.random() * length));
  while (isSame(newArray[next], src))
    next = parseInt(String(Math.random() * length));
  return newArray[next];
}

function filterImage(people?: Set<string>, emotions?: Set<string>) {
  const filteredByPeople = filterByPeople(people);
  const filteredByEmotions = filterByEmotions(filteredByPeople, emotions);
  return filteredByEmotions;
}

function filterByPeople(people?: Set<string>) {
  let newArray;
  if (people && people.size > 0) {
    newArray = Array.from(people).map((person) => db[person as People]);
  } else {
    newArray = Object.values(db);
  }
  return newArray;
}

function filterByEmotions(
  filteredByPeople: PeopleItem[],
  emotions?: Set<string>
) {
  const newArray: string[] = [];
  if (emotions && emotions.size > 0) {
    Array.from(emotions).forEach((emotion) =>
      filteredByPeople
        .map((person) => person[emotion as Emotions])
        .forEach((src) => newArray.push(...(src as any)))
    );
  } else {
    filteredByPeople.map((person) =>
      Object.values(person).forEach((src) => newArray.push(...(src as any)))
    );
  }
  return newArray;
}
