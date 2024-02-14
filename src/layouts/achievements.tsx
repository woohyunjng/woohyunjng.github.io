import YouTube from "react-youtube";

import data from "../data.json";

import "../styles/layouts/achievements.css";

const Achievements = () => (
    <div className="achievements">
        <h1 className="title toRight titleFont">{data.achievements.title}</h1>
        <h4 className="subTitle toRight smallFont">
            {data.achievements.subtitle}
        </h4>

        <div className="list">
            <div className="element informatics">
                <div className="type toRight smallFont">Informatics</div>
                {data.achievements.list
                    .filter((x) => x.type === "informatics")
                    .map((x) => (
                        <h4
                            className="listElement toRight smallFont"
                            key={x.name}
                        >
                            {x.name} <b className="value">{x.value}</b> ←
                        </h4>
                    ))}
            </div>
            <div className="element math">
                <div className="type toRight smallFont">Math</div>
                {data.achievements.list
                    .filter((x) => x.type === "math")
                    .map((x) => (
                        <h4
                            className="listElement toRight smallFont"
                            key={x.name}
                        >
                            {x.name} <b className="value">{x.value}</b> ←
                        </h4>
                    ))}
            </div>
        </div>

        <h1 className="title titleFont toLeft">
            {data.achievements.youtubeTitle}
        </h1>
        <div className="youtubeContainer">
            <YouTube
                videoId={data.achievements.youtubeOpts.id}
                opts={{
                    playerVars: {
                        loop: 1,
                        start: data.achievements.youtubeOpts.start,
                    },
                }}
                onEnd={(e) => e.target.stopVideo(0)}
            />
        </div>
    </div>
);

export default Achievements;
