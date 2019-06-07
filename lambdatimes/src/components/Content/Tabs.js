import React from "react";
import Tab from "./Tab";
import PropTypes from "prop-types";
import { TabsStyle, Topics, TabsTitle } from "./StyledComponents";

const Tabs = props => {
  return (
    <TabsStyle>
      <Topics>
        <TabsTitle>TRENDING TOPICS:</TabsTitle>

        {props.tabs.map((item, index) => (
          <Tab
            key={index}
            tab={item}
            selectTabHandler={props.selectTabHandler}
            selectedTab={props.selectedTab}
          />
        ))}
      </Topics>
    </TabsStyle>
  );
};

Tabs.propTypes = {
  tabs: PropTypes.array,
  selectTabHandler: PropTypes.func,
  selectedTab: PropTypes.string
};

// Make sure to use PropTypes to validate your types!
export default Tabs;
