import React, { FC, ReactElement } from 'react';
import { Header, Navbar, Main, Sidebar, Footer } from '../layout/Grid';
import { Title } from '../typography/Typography';
import styles from './baseLayout.module.scss';

export interface IBaseLayoutProps {
  main: string | ReactElement;
  sidebar: string | ReactElement;
  header: string | ReactElement;
  nav: string | ReactElement;
  footer: string | ReactElement;
}

const BaseLayout: FC<Partial<IBaseLayoutProps>> = ({ header, nav, main, sidebar, footer }) => {

  return (
    // Styling thru scss modules also supported
    <div className={ styles.pageWrap }>
      <Header gridColumn="1 / -1">
        { header ?? <Title>{ 'Header' }</Title> }
      </Header>
      <Navbar gridColumn="2 / 3">
        { nav ?? <Title>{ 'Navbar Items' }</Title> }
      </Navbar>
      <Main gridColumn="2 / 3">
        { main ?? <Title>{ 'Main' }</Title> }
      </Main>
      <Sidebar gridColumn="1 / 2" gridRow="2 / 4">
        { sidebar ?? <Title>{ 'Side Panel' }</Title> }
      </Sidebar>
      <Footer gridColumn="1 / -1">
        { footer ?? <Title>{ 'Footer' }</Title> }
      </Footer>
    </div>
  );
};

export default BaseLayout;
