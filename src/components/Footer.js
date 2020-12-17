import React from 'react'
import styled from 'styled-components'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHome, faArrowUp } from '@fortawesome/free-solid-svg-icons'
import Button from 'components/Button'

const FooterStyle = styled.footer`
  background: #f3f3f3;
  border-top: 1px #999 dashed;
  color: #333;
  font-size: 12px;
  margin: 0 auto;
  padding: 15px 0;
  text-align: center;
  @media screen and (min-width: 800px) {
    margin: 0 auto;
    max-width: 800px;
  }
  & > .footer__buttons {
    display: flex;
    flex-flow: row;
    justify-content: space-around;
    margin: 0 auto 15px;
    i,
    svg {
      margin: 0 5px 0 0;
    }
  }
`

const Footer = () => {
  return (
    <FooterStyle>
      <div className="footer__buttons">
        <Button>
          <FontAwesomeIcon icon={faHome} />
          トップページに戻る
        </Button>
        <Button>
          <FontAwesomeIcon icon={faArrowUp} />
          一番上に戻る
        </Button>
      </div>
      Copyright © 芝園開発株式会社. All rights reserved.
      {/* <footer className="footer prepare">
      <div className="footer__buttons">
        <a className="btn" href="index.html">
          <i className="fas fa-home"></i>トップページに戻る
        </a>
        <a id="js-footer_pagetop_btn" className="btn footer__pagetop_btn" href="#js-main">
          <i className="fas fa-arrow-up"></i>一番上に戻る
        </a>
      </div>
      Copyright © 芝園開発株式会社. All rights reserved.
    </footer> */}
    </FooterStyle>
  )
}

export default Footer
