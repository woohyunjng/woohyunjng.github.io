import { useState, useEffect } from "react";

import { Tabs, ConfigProvider } from "antd";
import { GithubOutlined, ExportOutlined } from "@ant-design/icons";

import data from "../data.json";

import "../styles/layouts/skills.css";

const Skills = () => {
    const [width, setWidth] = useState(0);
    const handleResize = () => setWidth(window.innerWidth);

    useEffect(() => {
        window.addEventListener("resize", handleResize);
        return () => {
            window.removeEventListener("resize", handleResize);
        };
    }, []);

    return (
        <div className="skills">
            <h1 className="title titleFont">{data.skills.title}</h1>
            <ConfigProvider
                theme={{
                    components: {
                        Tabs: {
                            inkBarColor: "var(--light)",
                            itemHoverColor: "var(--primary)",
                            itemSelectedColor: "var(--light)",
                        },
                    },
                }}
            >
                <Tabs
                    className="tab"
                    tabPosition={width >= 1280 ? "left" : "top"}
                    defaultActiveKey="1"
                    items={data.skills.list.map((lang, index) => ({
                        key: index.toString(),
                        label: lang.name,
                        children: lang.projects.map((x) => (
                            <div className="project" key={x.name}>
                                <div className="projectBox">
                                    <h4 className="projectName smallFont">
                                        {x.name}
                                    </h4>

                                    <h4 className="projectDescription smallFont">
                                        ㄴ {x.description}
                                        {width >= 480
                                            ? x.redirect.map((r, index) => (
                                                  <a
                                                      className={`redirect smallFont ${
                                                          index === 0
                                                              ? "first"
                                                              : ""
                                                      }`}
                                                      key={r.name}
                                                      href={r.url}
                                                  >
                                                      {
                                                          {
                                                              github: (
                                                                  <GithubOutlined />
                                                              ),
                                                              web: (
                                                                  <ExportOutlined />
                                                              ),
                                                          }[r.name]
                                                      }
                                                  </a>
                                              ))
                                            : ""}
                                    </h4>
                                    {width < 480
                                        ? x.redirect.map((r, index) => (
                                              <a
                                                  className={`redirect smallFont ${
                                                      index === 0 ? "first" : ""
                                                  }`}
                                                  key={r.name}
                                                  href={r.url}
                                              >
                                                  {
                                                      {
                                                          github: (
                                                              <GithubOutlined />
                                                          ),
                                                          web: (
                                                              <ExportOutlined />
                                                          ),
                                                      }[r.name]
                                                  }
                                              </a>
                                          ))
                                        : ""}
                                </div>
                            </div>
                        )),
                    }))}
                    tabBarStyle={{
                        letterSpacing: "-0.1ch",
                        fontFamily: '"Raleway", sans-serif',
                        fontWeight: 300,
                        color: "red !important",
                        paddingTop: 0,
                    }}
                />
            </ConfigProvider>
        </div>
    );
};

export default Skills;
