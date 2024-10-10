"use client";
import React, { useState } from "react";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import { useEffect } from "react";
import Projects from "./Projects/Projects";

const MyProject = () => {
  const [data, setData] = useState([]);
  const [tabIndex, setTabIndex] = useState("All");

  useEffect(() => {
    fetch("data.json")
      .then((res) => res.json())
      .then((data) => setData(data));
  }, []);

  console.log(data);

  const ui = data.filter((singleData) => singleData.title === "UI/UX");
  const web = data.filter((singleData) => singleData.title === "Web Design");
  const app = data.filter((singleData) => singleData.title === "App Design");
  const graphic = data.filter(
    (singleData) => singleData.title === "Graphic Design"
  );

  return (
    <div className="mb-10 mt-[139px] px-4 md:px-6 lg:px-6 max-w-[1420px] mx-auto">
      <h2 className="text-5xl lg:text-[66px] font-poppins font-semibold text-center pb-6">
        My Projects
      </h2>
      <p className="text-justify md:text-center font-poppins font-normal text-xl pb-4 lg:pb-[3.7rem]">
        Lorem ipsum dolor sit amet consectetur. Mollis erat duis aliquam mauris
        est risus <br /> lectus. Phasellus consequat urna tellus
      </p>
      <div>
        <Tabs defaultIndex={2} onSelect={(index) => setTabIndex(index)}>
          <div className="">
            <TabList className="flex flex-col lg:flex-row items-center justify-center lg:space-x-4 space-y-5 cursor-pointer text-[24px] font-poppins font-normal text-[#000] pt-5 lg:pt-0">
              <Tab
                className={
                  "menuItem bg-[#F8F8F8] focus:bg-primary focus:text-white text-2xl rounded py-[10px] px-5"
                }
              >
                All
              </Tab>
              <Tab
                className={
                  "menuItem bg-[#F8F8F8] focus:bg-primary focus:text-white text-2xl rounded py-[10px] px-5"
                }
              >
                UI/UX
              </Tab>
              <Tab
                className={
                  "menuItem bg-[#F8F8F8] focus:bg-primary focus:text-white text-2xl rounded py-[10px] px-5"
                }
              >
                Web Design
              </Tab>
              <Tab
                className={
                  "menuItem bg-[#F8F8F8] focus:bg-primary focus:text-white text-2xl rounded py-[10px] px-5"
                }
              >
                App Design
              </Tab>
              <Tab
                className={
                  "menuItem bg-[#F8F8F8] focus:bg-primary focus:text-white text-2xl rounded py-[10px] px-5"
                }
              >
                Graphic Design
              </Tab>
            </TabList>
          </div>

          <TabPanel>
            <Projects projects={data}></Projects>
          </TabPanel>
          <TabPanel>
            <Projects projects={ui}></Projects>
          </TabPanel>
          <TabPanel>
            <Projects projects={web}></Projects>
          </TabPanel>
          <TabPanel>
            <Projects projects={app}></Projects>
          </TabPanel>
          <TabPanel>
            <Projects projects={graphic}></Projects>
          </TabPanel>
        </Tabs>
      </div>
    </div>
  );
};

export default MyProject;
