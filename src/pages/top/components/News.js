import React from 'react'
import PropTypes from 'prop-types'
import Button from 'components/Button'
import NewsRow from './NewsRow'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBullhorn, faArrowAltCircleRight } from '@fortawesome/free-solid-svg-icons'
import styled from 'styled-components'

const NewsStyle = styled.section`
  background: #eee;
  box-sizing: border-box;
  padding: 35px 10px 90px;
  width: 100%;
  & .news__heading {
    border-bottom: 2px #46739a solid;
    color: #222;
    display: block;
    font-size: 18px;
    font-weight: normal;
    letter-spacing: 5px;
    margin: 0 auto 10px;
    padding: 0 0 7px;
    & i,
    svg {
      color: #325c8d;
      font-size: 22px;
      margin: 0 5px 0 0;
    }
  }
  & .news__list {
    background: #fff;
    border-radius: 10px;
    box-sizing: border-box;
    margin: 0 auto 15px;
    padding: 10px;
    width: 100%;
    & .news__listitem {
      border-bottom: 1px #999 dashed;
      clear: both;
      padding: 10px 0;
      & .news__listitem_link {
        align-items: center;
        display: flex;
        flex-flow: row;
        justify-content: space-between;
      }
      & .news__listitem_date {
        color: #666;
        display: block;
        font-size: 13px;
        margin: 0 0 5px;
        & small {
          font-size: 11px;
        }
      }
      & .news__listitem_title {
        color: #333;
        display: block;
        font-size: 14px;
        letter-spacing: 2px;
        line-height: 20px;
        text-decoration: underline;
      }
      & i {
        bottom: 9px;
        color: #f0cf61;
        font-size: 24px;
        right: 2px;
        text-shadow: 0 1px 0 #c7a944;
      }
    }
  }
  & .news__more {
    text-align: right;
  }

  & .news__more_link {
    font-size: 14px;
  }
`

const News = (props) => {
  return (
    <NewsStyle>
      <h2 className="news__heading">
        <FontAwesomeIcon icon={faBullhorn} />
        お知らせ
      </h2>
      <ul className="news__list">
        {props.news.map((item) => (
          <NewsRow key={item.id} {...item} />
        ))}
      </ul>
      <div className="news__more">
        <Button normal className="news__more_link">
          「お知らせ」をもっと見る
          <FontAwesomeIcon icon={faArrowAltCircleRight} />
        </Button>
      </div>
    </NewsStyle>
  )
}

News.propTypes = {
  news: PropTypes.array.isRequired,
}

export default News
