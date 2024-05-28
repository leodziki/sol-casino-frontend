import React from "react";
import { 
  CashGamesWrapper,
  SearchOptions
} from "./styles"
import { Table } from "antd"; 
import { roomTableData } from "../../../layouts/data"; 
import type { TableProps } from 'antd';


type ColumnsType<T> = TableProps<T>['columns'];

interface DataType {
  name: string;
  game: string;
  type: string;
  stakes: string;
  players: string;
  wait: string;
}

export const CashGames: React.FC = () => {
  const columns: ColumnsType<DataType> = [
    {
      title: 'Name',
      dataIndex: 'name',
      //@ts-ignore
      sorter: (a, b) => a.name - b.name,
      // render: (name) => `${name.first} ${name.last}`,
    },
    {
      title: 'Game',
      dataIndex: 'game',
      sorter: true,
      // filters: [
      //   { text: 'Male', value: 'male' },
      //   { text: 'Female', value: 'female' },
      // ],
    },
    {
      title: 'Type',
      dataIndex: 'type',
      sorter: true,
    },
    {
      title: 'Stakes',
      dataIndex: 'stakes',
      sorter: true,
    },
    {
      title: 'Players',
      dataIndex: 'players',
      //@ts-ignore
      sorter: (a, b) => a.players - b.players,
    },
    {
      title: 'Wait',
      dataIndex: 'wait',
      sorter: true,
    },
  ];
  return (
    <CashGamesWrapper className="123213">
      <SearchOptions>
        {/* <Dropdown menu={{ items }} trigger={['click']}>
          <a onClick={(e) => e.preventDefault()}>
              Click me
              <DownOutlined />
          </a>
        </Dropdown> */}
      </SearchOptions>
      <Table
        columns={columns}
        // rowKey={(record) => record.login.uuid}
        pagination={false}
        showSorterTooltip={false}
        dataSource={roomTableData}
      />
    </CashGamesWrapper>
  );
};
