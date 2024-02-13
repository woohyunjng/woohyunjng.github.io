import data from "../data.json";

import "../styles/layouts/achievements.css";

const Achievements = () => (
    <div className="achievements">
        <h1 className="title titleFont">{data.achievements.title}</h1>
        <h4 className="subTitle smallFont">{data.achievements.subtitle}</h4>

        <div className="list">
            <div className="element informatics">
                <div className="type smallFont">Informatics</div>
                {data.achievements.list
                    .filter((x) => x.type === "informatics")
                    .map((x) => (
                        <h4 className="listElement smallFont">
                            {x.name} <b className="value">{x.value}</b> ←
                        </h4>
                    ))}
            </div>
            <div className="element math">
                <div className="type smallFont">Math</div>
                {data.achievements.list
                    .filter((x) => x.type === "math")
                    .map((x) => (
                        <h4 className="listElement smallFont">
                            {x.name} <b className="value">{x.value}</b> ←
                        </h4>
                    ))}
            </div>
        </div>
    </div>
);

export default Achievements;
