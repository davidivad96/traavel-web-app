import { useState } from "react";
import {
  Sidebar as ReactProSidebar,
  Menu,
  MenuItem,
  SubMenu,
} from "react-pro-sidebar";
import { Flex } from "@aws-amplify/ui-react";
import { FaAnglesLeft, FaAnglesRight } from "react-icons/fa6";
import { FaRoute } from "react-icons/fa";
import dayjs from "dayjs";
import { Day } from "@/models";

interface Props {
  days: Day[];
  handleOnClickItem: (day: Day) => void;
}

export const Sidebar = ({ days, handleOnClickItem }: Props) => {
  const [collapsedSidebar, setCollapsedSidebar] = useState(false);

  return (
    <ReactProSidebar collapsed={collapsedSidebar as boolean} width="200px">
      <Flex direction="column" justifyContent="space-between" height="100%">
        <Menu>
          <SubMenu label="Itinerary" icon={<FaRoute />}>
            {days.map((day) => (
              <MenuItem key={day.id} onClick={() => handleOnClickItem(day)}>
                {dayjs(day.date).format("ddd DD/MM")}
              </MenuItem>
            ))}
          </SubMenu>
        </Menu>
        <Menu
          onClick={() => setCollapsedSidebar(!collapsedSidebar)}
          style={{ bottom: 0, width: "100%" }}
        >
          <MenuItem
            icon={collapsedSidebar ? <FaAnglesRight /> : <FaAnglesLeft />}
          >
            Collapse
          </MenuItem>
        </Menu>
      </Flex>
    </ReactProSidebar>
  );
};
