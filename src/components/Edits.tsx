import "./Edits.css";

export default function Edits() {
  return (
    <div className="edits">
      <section>
        <ul className="filter-list">
          <li className="filter-list__people" id="chim">
            침착맨
          </li>
          <li className="filter-list__people">주호민</li>
          <li className="filter-list__people">김풍</li>
          <li className="filter-list__people">궤도</li>
          <li className="filter-list__people">통천</li>
        </ul>
        <ul className="filter-list">
          <li className="filter-list__emotion">일갈</li>
          <li className="filter-list__emotion">비난</li>
          <li className="filter-list__emotion">칭찬</li>
          <li className="filter-list__emotion">눈물</li>
          <li className="filter-list__emotion">기쁨</li>
        </ul>
      </section>
      <section className="button-section">
        <button className="create-button">생성</button>
        <button className="save-button">저장</button>
      </section>
    </div>
  );
}
