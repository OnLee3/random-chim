import "./Edits.css";

export default function Edits() {
  return (
    <div className="edits">
      <section>
        <ul className="filter-list">
          <li className="filter-list__people" id="chim">
            침착맨
          </li>
          <li className="filter-list__people" id="pearl">
            주호민
          </li>
          <li className="filter-list__people" id="others">
            주변인물
          </li>
        </ul>
        <ul className="filter-list">
          <li className="filter-list__emotion" id="ilgal">
            일갈
          </li>
          <li className="filter-list__emotion" id="blame">
            비난
          </li>
          <li className="filter-list__emotion" id="praise">
            칭찬
          </li>
          <li className="filter-list__emotion" id="cry">
            눈물
          </li>
          <li className="filter-list__emotion" id="joy">
            기쁨
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
