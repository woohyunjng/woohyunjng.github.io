import data from "../data.json";

import "../styles/layouts/contact.css";

const Contact = () => (
    <div className="contact">
        <h1 className="title toRight titleFont">{data.contact.title}</h1>
        <div className="contacts">
            {data.contact.sns.map((x) => (
                <a href={x.value} className="contactBtn" key={x.type}>
                    <img
                        style={{ background: x.color }}
                        className="img"
                        src={`/icons/${x.type}.svg`}
                    />
                </a>
            ))}
        </div>
    </div>
);

export default Contact;
