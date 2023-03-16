import React from 'react';
import SideBar from './SideBar';
import Content from './Content';

const Main = () => {
  return (
    <article className='main'>
      <SideBar />
      <Content />
    </article>
  );
}

export default Main;