import data from "../data.json";

import "../styles/layouts/intro.css";

const Intro = () => (
    <div className="intro">
        <div className="innerIntro">
            <h1 className="mainText noHighlight">{data.intro.mainText[0]}</h1>
            <h1 className="mainText highlight">{data.intro.mainText[1]}</h1>
            {data.intro.descriptionText.split("\n").map((text) => (
                <h2 className="descriptionText" key={text}>
                    {text}
                </h2>
            ))}
        </div>
    </div>
);

export default Intro;
