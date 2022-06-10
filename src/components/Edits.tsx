import "./Edits.css";

export default function Edits() {
  return (
    <div className="edits">
      <section>
        <ul className="filter-list">
          <li className="filter-list__people" id="침착맨">
            침착맨
          </li>
          <li className="filter-list__people" id="주호민">
            주호민
          </li>
          <li className="filter-list__people" id="주변인물">
            주변인물
          </li>
        </ul>
        <ul className="filter-list">
          <li className="filter-list__emotion" id="joy">
            기쁨
          </li>
          <li className="filter-list__emotion" id="angry">
            분노
          </li>
        </ul>
      </section>
      <section className="button-section">
        <button className="create-button">생성</button>
        <button className="save-button">저장</button>
      </section>
    </div>
  );
}
