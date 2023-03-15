import React from 'react';
import {  Layout } from 'antd';
import NewMenu from "./Layout/NewMenu";
import NewContent from "./Layout/NewContent";
import NewFooter from "./Layout/NewFooter";
const {  Header } = Layout;

const App: React.FC = () => {


  return (
    <Layout className="layout">
      <Header>
              <div className="logo" />
              <NewMenu/>
            </Header>
      <NewContent/>
      <NewFooter/>
    </Layout>
  );
};

export default App;