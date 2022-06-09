import db from "../assets";

export default function getRandomImage(
  people?: Set<string>,
  emotions?: Set<string>
) {
  const newArray: string[] = [];
  Object.values(db).map((item) =>
    Object.values(item).map((i) => newArray.push(...i))
  );
  const n = newArray.length;
  const next = parseInt(String(Math.random() * n));
  return newArray[next];
}
