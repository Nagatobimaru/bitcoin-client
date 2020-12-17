import React from 'react'
import GMenu, { GMenuPropTypes } from './GMenu'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBicycle } from '@fortawesome/free-solid-svg-icons'
import PropTypes from 'prop-types'

import styled from 'styled-components'

const InnerHeader = styled.header`
  height: auto;
  border-bottom: none;
  box-shadow: 0 4px 4px rgba(0, 0, 0, 0.3);
  background: #cdeac4;
  border-bottom: 2px #333 dashed;
  height: 55px;
  position: fixed;
  top: 0;
  width: 100vw;
  z-index: 10000;
  @media screen and (min-width: 800px) {
    left: 50%;
    margin: 0 0 0 -400px;
    max-width: 800px;
  }
`
const Nav = styled.nav`
  display: block;
  /* display: flex; */
  flex-flow: row;
  justify-content: space-between;
  margin: 0 auto;
`
const Title = styled.a`
  text-align: center;
  margin: 5px;
  padding: 5px;
  background: #fff;
  border-radius: 10px;
  color: #444;
  display: block;
  font-family: 'M PLUS Rounded 1c', sans-serif;
  font-size: 20px;
  letter-spacing: 7px;
`

const Header = (props) => {
  return (
    <InnerHeader>
      <Nav>
        <div>
          <Title href="index.html">
            <FontAwesomeIcon icon={faBicycle} />
            新宿区駐輪場
          </Title>
        </div>
        <GMenu {...props} />
      </Nav>
    </InnerHeader>
  )
}

Header.propTypes = GMenuPropTypes
Header.defaultProps = {
  isMenuOpened: false,
}
export default Header
