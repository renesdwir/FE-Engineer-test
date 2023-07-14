import { useRef, useState } from "react";
import { JsonView, darkStyles, defaultStyles } from "react-json-view-lite";
import "react-json-view-lite/dist/index.css";
import "./App.css";

function App() {
  const formRef = useRef(null);
  const [jsonData, setJsonData] = useState("");

  const onSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData(formRef.current);
    const datas = Object.fromEntries(formData);
    let finalData = {};
    Object.keys(datas).forEach((key) => {
      let value = +datas[key];
      let score = key.split("-");
      if (!finalData[score[0]]) {
        finalData[score[0]] = {
          [score[1]]: value,
        };
      } else {
        finalData[score[0]] = {
          ...finalData[score[0]],
          [score[1]]: value,
        };
      }
    });
    setJsonData(finalData);
    console.log(finalData);
  };
  return (
    <div className="main">
      <div className="title-container row-container">
        <div className="title row"></div>
        <div className="title row">
          Aspek <br /> penilaian 1
        </div>
        <div className="title row">
          Aspek <br /> penilaian 2
        </div>
        <div className="title row">
          Aspek <br /> penilaian 3
        </div>
        <div className="title row">
          Aspek <br /> penilaian 4
        </div>
      </div>
      <form ref={formRef}>
        {Array(10)
          .fill()
          .map((_, idx) => (
            <div className="mahasiswa-container row-container" key={idx}>
              <div className="mahasiswa row">Mahasiswa {idx + 1}</div>
              <div className="mahasiswa row">
                <select name={`aspek_penilaian_1-mahasiswa_${idx + 1}`} id="">
                  {Array(10)
                    .fill()
                    .map((_, i) => (
                      <option key={i} value={i + 1}>
                        {i + 1}
                      </option>
                    ))}
                </select>
              </div>
              <div className="mahasiswa row">
                <select name={`aspek_penilaian_2-mahasiswa_${idx + 1}`} id="">
                  {Array(10)
                    .fill()
                    .map((_, i) => (
                      <option key={i} value={i + 1}>
                        {i + 1}
                      </option>
                    ))}
                </select>
              </div>
              <div className="mahasiswa row">
                <select name={`aspek_penilaian_3-mahasiswa_${idx + 1}`} id="">
                  {Array(10)
                    .fill()
                    .map((_, i) => (
                      <option key={i} value={i + 1}>
                        {i + 1}
                      </option>
                    ))}
                </select>
              </div>
              <div className="mahasiswa row">
                <select name={`aspek_penilaian_4-mahasiswa_${idx + 1}`} id="">
                  {Array(10)
                    .fill()
                    .map((_, i) => (
                      <option key={i} value={i + 1}>
                        {i + 1}
                      </option>
                    ))}
                </select>
              </div>
            </div>
          ))}
        <div className="button-wrapper">
          <button type="button" onClick={onSubmit}>
            Simpan
          </button>
        </div>
      </form>
      <div className="json-container">
        {jsonData && (
          <JsonView
            data={jsonData}
            shouldInitiallyExpand={(level) => true}
            style={defaultStyles}
          />
        )}
      </div>
    </div>
  );
}

export default App;
