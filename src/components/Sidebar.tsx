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

interface Props {
  dates: { id: string; date: Date }[];
  handleOnClickItem: (id: string) => void;
}

export const Sidebar = ({ dates, handleOnClickItem }: Props) => {
  const [collapsedSidebar, setCollapsedSidebar] = useState(false);

  return (
    <ReactProSidebar collapsed={collapsedSidebar as boolean} width="200px">
      <Flex direction="column" justifyContent="space-between" height="100%">
        <Menu>
          <SubMenu label="Itinerary" icon={<FaRoute />}>
            {dates.map(({ id, date }) => (
              <MenuItem key={id} onClick={() => handleOnClickItem(id)}>
                {dayjs(date).format("ddd DD/MM")}
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
