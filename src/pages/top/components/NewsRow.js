import React from 'react'
import PropTypes from 'prop-types'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronCircleRight } from '@fortawesome/free-solid-svg-icons'

const NewsRow = (props) => {
  return (
    <li className="news__listitem">
      <a className="news__listitem_link" href="USR-000002_NewsDetail.html">
        <div>
          <span className="news__listitem_date">
            {props.year}
            <small>年</small>
            {props.month}
            <small>月</small>
            {props.date}
            <small>日</small>
          </span>
          <span className="news__listitem_title">{props.content}</span>
        </div>
        <div>
          <FontAwesomeIcon icon={faChevronCircleRight} />
        </div>
      </a>
    </li>
  )
}

NewsRow.propTypes = {
  id: PropTypes.number.isRequired,
  year: PropTypes.number.isRequired,
  month: PropTypes.number.isRequired,
  date: PropTypes.number.isRequired,
  content: PropTypes.string.isRequired,
}
export default NewsRow
