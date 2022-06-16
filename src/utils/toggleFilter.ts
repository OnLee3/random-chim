export default function toggleFilter(dom: Element, selected: Set<string>) {
  dom.classList.toggle("selected");
  if (selected.has(dom.id)) selected.delete(dom.id);
  else selected.add(dom.id);
}
