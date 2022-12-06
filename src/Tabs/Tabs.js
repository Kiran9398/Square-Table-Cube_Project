import React, { useState } from "react";
import FirstTab from "../components/FirstTab";
import SecondTab from "../components/SecondTab";
import ThirdTab from "../components/ThirdTab";
import { TabContext, TabList, TabPanel } from "@mui/lab";
import { Box, Tab } from "@mui/material";
import "./Tabs.css";

const Tabs = () => {
  const [value, setValue] = useState("1");
  const handleChange = (evet: React.SyntheticEvent, newValue: string) => {
    setValue(newValue);
  };
  return (
    <Box className="ml-4 mr-4">
      <TabContext value={value}>
        <Box sx={{ borderBottom: 3, borderColor: "green" }}>
          <TabList aria-label="Tab exmples" onChange={handleChange}>
            <Tab className="number-tap" label="Number" value="1" />
            <Tab className="number-tap" label="Table" value="2" />
            <Tab className="number-tap" label="Square" value="3" />
          </TabList>
        </Box>
        <TabPanel value="1">
          <FirstTab />
        </TabPanel>
        <TabPanel value="2">
          <SecondTab />
        </TabPanel>
        <TabPanel value="3">
          <ThirdTab />
        </TabPanel>
      </TabContext>
    </Box>
  );
};
export default Tabs;
