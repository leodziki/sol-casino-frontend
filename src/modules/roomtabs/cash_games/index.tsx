import React, { useContext } from "react";
import { CashGamesWrapper, SearchOptions, TransparentTable } from "./styles";
import { Table } from "antd";
import type { TableProps, MenuProps } from "antd";

import globalContext from "../../../context/global/globalContext";

type ColumnsType<T> = TableProps<T>["columns"];

interface DataType {
  name: string;
  game: string;
  type: string;
  stakes: string;
  players: string;
  wait: string;
}

const items: MenuProps["items"] = [
  {
    label: <a href="https://www.antgroup.com">1st menu item</a>,
    key: "0",
  },
  {
    label: <a href="https://www.aliyun.com">2nd menu item</a>,
    key: "1",
  },
  {
    type: "divider",
  },
  {
    label: "3rd menu item",
    key: "3",
  },
];

interface CashGamesProps {
  setSelectedTableName: React.Dispatch<React.SetStateAction<string>>;
}

export const CashGames: React.FC<CashGamesProps> = ({
  setSelectedTableName,
}) => {
  const { setTableNameForJoin, tables } = useContext(globalContext);

  const columns: ColumnsType<any> = [
    {
      title: "Name",
      dataIndex: "name",
      key: "name",
      className: 'transparent-row',
    },
    {
      title: "Game",
      dataIndex: "gameType",
      key: "Game",  
      className: 'transparent-row',
    },
    {
      title: "Type",
      dataIndex: "payType",
      key: "Type",
      className: 'transparent-row',
    },
    {
      title: "Stakes",
      dataIndex: "stakes",
      key: "Stakes",
      className: 'transparent-row',
    },
    {
      title: "Players",
      dataIndex: "playerCnt",
      key: "Players",      
      className: 'transparent-row',
    },
    {
      title: "Wait",
      dataIndex: "waitPlayerCnt",
      key: "Wait",
      className: 'transparent-row',
    },
  ];

  return (
    <CashGamesWrapper className="123213">
      <SearchOptions>        
      </SearchOptions>
      <TransparentTable
        columns={columns}        
        pagination={false}        
        showSorterTooltip={false}
        dataSource={tables}
        rowClassName={() => 'transparent-row'}
        onRow={(record) => ({
          onClick: () => {
            if (record && record.name) setTableNameForJoin(record.name);
          },
        })}
      />
    </CashGamesWrapper>
  );
};
