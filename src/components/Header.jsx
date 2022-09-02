import { PageHeader } from 'antd';
import Search from 'antd/lib/transfer/search';
import React from 'react';

const Header = () => {

const onSearch = (value) => console.log(value);

  return (<PageHeader
    className="site-page-header"
    title="Тестовое задание"
    subTitle="Тестовое задание для RocketSales"
    extra={<Search
        placeholder="Поиск сделок"
        onSearch={onSearch}
      />}
  />)
};

export default Header;