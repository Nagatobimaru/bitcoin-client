import React from 'react'
import { useState, useEffect } from 'react'

import PropTypes from 'prop-types'
import styled from 'styled-components'
import Button from 'components/Button'

const GMenuButton = styled(Button)`
  border-right: none;
  border-left: none;
  border-top: none;
  border-radius: 0;
  display: block;
  margin: 0;
  padding: 10px 0;
  text-align: center;
  width: 100%;
`

const GMenuBody = styled.div`
  background: #eaf9ff;
  overflow: hidden;
  transition: 0.2s;
  &.shrinked {
    height: 0;
  }
  ul li a {
    border-bottom: 1px #2d9fdb solid;
    color: #0063ac;
    font-size: 16px;
    font-weight: bold;
    display: block;
    padding: 15px 0;
    position: relative;
    text-align: center;
    width: 100%;
  }
`
export const GMenu = (props) => {
  const [isMenuOpened, setMenuOpen] = useState(props.isMenuOpened)
  const menuTitle = isMenuOpened ? ' メニュー ' : ' 閉じる '
  const menuItem = props.isLoggedIn
    ? [
        { name: 'トップページ', href: '/top' },
        { name: 'マイページ', href: '/mypage' },
        { name: '会員情報を変更する', href: '/modifyUser' },
        { name: 'メールアドレスを変更する', href: '/modifyMail' },
        { name: 'ログアウト', href: '/logout' },
      ]
    : [
        { name: 'トップページ', href: '/top' },
        { name: 'ログイン', href: '/login' },
        { name: '会員登録', href: '/signup' },
      ]
  // useEffect(() => {
  //   setMenuOpen(props.isMenuOpened)
  // })
  return (
    <div>
      <GMenuButton primary onClick={() => setMenuOpen(!isMenuOpened)}>
        {menuTitle}
      </GMenuButton>
      <GMenuBody className={isMenuOpened ? '' : 'shrinked'}>
        <nav>
          <ul>
            {menuItem.map((item) => {
              return (
                <li key={item.href}>
                  <a href={item.href}>{item.name}</a>
                </li>
              )
            })}
          </ul>
        </nav>
      </GMenuBody>
    </div>
  )
}

export const GMenuPropTypes = {
  isLoggedIn: PropTypes.bool,
  isMenuOpened: PropTypes.bool,
}
GMenu.propTypes = GMenuPropTypes
GMenu.defaultProps = {
  isMenuOpened: false,
}
export default GMenu
