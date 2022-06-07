type EditsProps = {
  create_handler: (people: string[], emotions: string[]) => void;
};

export default function Edits({ create_handler }: EditsProps) {
  function save_handler() {
    const canvas = document.querySelector("canvas");
    const image = canvas?.toDataURL("image/png");
    if (!image) return;
    const link = document.createElement("a");
    link.href = image;
    link.download = "침투부-랜덤짤";
    link.click();
  }

  return (
    <div>
      <section>필터</section>
      <button onClick={() => create_handler(["A"], ["A"])}>생성</button>
      <button onClick={save_handler}>저장</button>
    </div>
  );
}
