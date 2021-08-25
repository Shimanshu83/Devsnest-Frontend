import { useState } from "react";

const Meme = ({ memeData, setMeme }) => {
  const [form, setForm] = useState({
    template_id: memeData.id,
    username: "shimanshu",
    password: "ryzenryzen",
    boxes: [],
  });
  const generateMeme = () => {
    var url = `https://api.imgflip.com/caption_image?template_id=${form.template_id}&username=${form.username}&password=${form.password}`;
    form.boxes.map((box, index) => {
      url += `&boxes[${index}][text]=${box.text}`;
    });
    fetch(url)
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setMeme({ ...memeData, url: data.data.url });
      });

    console.log(url);
  };
  return (
    <div className="meme-center">
      <div className="meme-container">
        <img src={memeData.url} />
        <div className="left-input-container">
          <div className="input-cont">
            {[...Array(memeData.box_count)].map((_, index) => (
              <input
                key={index}
                onChange={(e) => {
                  let newBoxes = form.boxes;
                  newBoxes[index] = { text: e.target.value };
                  setForm({ ...form, boxes: newBoxes });
                }}
                type="text"
                placeholder={`Caption ${index}`}
              ></input>
            ))}
          </div>

          <div className="buttons">
            <button onClick={generateMeme}>Create Meme</button>
            {/* <button> Choose Template</button> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Meme;
