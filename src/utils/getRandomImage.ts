import db from "../assets";

type People = "침착맨" | "주호민" | "주변인물";
type Emotions = "joy" | "angry";
type PeopleItem = {
  joy: string[];
  angry: string[];
};

export default function getRandomImage(
  people?: Set<string>,
  emotions?: Set<string>
) {
  const newArray: string[] = [];
  let filteredByPeople: PeopleItem[];
  if (people && people.size > 0) {
    filteredByPeople = Array.from(people).map((person) => db[person as People]);
  } else {
    filteredByPeople = Object.values(db);
  }
  if (emotions && emotions.size > 0) {
    Array.from(emotions).forEach((emotion) =>
      filteredByPeople
        .map((person) => person[emotion as Emotions])
        .forEach((src) => {
          newArray.push(...src);
        })
    );
  } else {
    filteredByPeople.forEach((person) =>
      Object.values(person).forEach((src) => newArray.push(...src))
    );
  }
  const n = newArray.length;
  const next = parseInt(String(Math.random() * n));
  return newArray[next];
}
