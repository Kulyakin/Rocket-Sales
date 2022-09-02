import { MailTwoTone, PhoneTwoTone, UserOutlined } from '@ant-design/icons';
import { Table, Tag } from 'antd';
import React, { useState } from 'react';
import { useEffect } from 'react';




const columns = [
  {
    title: 'Название',
    dataIndex: 'name',
    key: 'name',
  },
  {
    title: 'Статус',
    dataIndex: 'status',
    key: 'status',
    render: (st) => {
      if(st === 'Первичный контакт') {
        return <Tag size="small" color="#2db7f5">{st}</Tag>
      }  else if(st === "Принимают решение") {
        return <Tag color="#f50">{st}</Tag>
      } else if(st === "Переговоры") {
      return <Tag color="#fadb14">{st}</Tag>
      }
    }
  },
  {
    title: 'Ответственный',
    dataIndex: 'responsible',
    key: 'responsible',
  },
  {
    title: 'Дата создания',
    dataIndex: 'date',
    key: 'date',
  },
  {
    title: 'Бюджет',
    dataIndex: 'budget',
    key: 'budget',
  },
];
const data = [
  {
    key: 1,
    name: 'Запрос тарифов',
    status: "Первичный контакт",
    address: 'New York No. 1 Lake Park',
    description: 'Johnny Sins',
    tags: ['cool', 'teacher'],
    budget: 4000,
    date: '14 февраля 2022'


  },
  {
    key: 2,
    name: 'Запрос тарифов',
    status: "Принимают решение",
    address: 'New York No. 1 Lake Park',
    description: 'John Brown',
    tags: ['cool', 'teacher'],
    budget: 14000,
    date: '14 февраля 2022'
  },
  {
    key: 3,
    name: 'Запрос тарифов',
    status: "Переговоры",
    address: 'New York No. 1 Lake Park',
    description: 'Hohn Browny',
    tags: ['cool', 'teacher'],
    budget: 15000,
    date: '14 февраля 2022'


  },
];

const MyTable = () => {

  const [hasData, setHasData] = useState(true)

  // useEffect(() => {
  //   fetch("https://dev-test.rocketsales.ru/api/leads")
  //   .then((r) => r.json())
  //   .then(r => console.log(r))
  // }, [])
  
  return (<Table
    columns={columns}
    pagination={false} //пагинация
    expandable={{
      expandedRowRender: (record) => (
        <div className='contacts'>
        <UserOutlined style={{fontSize: "32px"}} />
          <p
          style={{
            margin: 0,
          }}
        >
          {record.description}
        </p>
        <PhoneTwoTone style={{fontSize: "18px"}}/>
        <MailTwoTone style={{fontSize: "18px"}}/>
        </div>

      ),
      rowExpandable: (record) => record.name !== 'Not Expandable',
    }}
    dataSource={hasData ? data : []}
  />)
  }

export default MyTable;