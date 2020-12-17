import React from 'react'
import styled from 'styled-components'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUserPlus, faSignInAlt } from '@fortawesome/free-solid-svg-icons'
import Button from 'components/Button'

const PromotionStyle = styled.section`
  margin: 15px auto;
  width: 100%;
  & .promotion__container {
    background: #fff;
    border: 2px #dd5f5f dashed;
    border-radius: 10px;
    color: #555;
    padding: 10px;
    text-align: center;
    & .promotion__text {
      font-size: 16px;
      line-height: 20px;
      padding: 5px;
      text-align: left;
    }
  }

  & .promotion__buttons {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
    & .promotion__button {
      display: inline-block;
      font-size: 14px;
      letter-spacing: 1px;
      margin: 10px auto 0;
    }
  }
`

const Promotion = () => {
  return (
    <PromotionStyle>
      <div className="promotion__container">
        <p className="promotion__text">駐輪場の定期利用契約には、会員登録が必要です。</p>
        <div className="promotion__buttons">
          <Button definitive className="promotion__button">
            <FontAwesomeIcon icon={faUserPlus} /> 会員登録する
          </Button>
          <Button normal className="promotion__button">
            会員の方はこちら <FontAwesomeIcon icon={faSignInAlt} />
          </Button>
        </div>
      </div>
    </PromotionStyle>
  )
}

export default Promotion
