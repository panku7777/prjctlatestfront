import React from 'react';
import { Tabs } from 'antd'; // Import Tabs from Ant Design

import Navbar from './Navbar';

const { TabPane } = Tabs; // Destructure TabPane from Tabs

function Pnael() {
  return (
    <div>
      <div className='ml-5 mt-3 mr-5 mb-5 bsx'>
        <h2 className='text-center' style={{ fontSize: '30px' }}>
          <b>Admin Panel</b>
        </h2>
        <Tabs defaultActiveKey='1' tabPosition='left'>
          <TabPane tab='Books' key='1'>
            <h1>BOOkS</h1>
          </TabPane>
          <TabPane tab='Users' key='2'>
            <h1>USERS</h1>
          </TabPane>
          <TabPane tab='Genre' key='3'>
            <h1>Genre</h1>
          </TabPane>
        </Tabs>
      </div>
    </div>
  );
}

export default Pnael;
