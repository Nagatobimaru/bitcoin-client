import React, { useState } from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import ParkingArea from './ParkingArea'

const ParkingRowStyle = styled.li`
  display: inline-flex;
  justify-content: space-between;
  width: 100%;
  & .parkings__record:first-child {
    border-top: 1px #999 solid;
  }
`
const ParkingRecordItem = styled.span`
  align-items: center;
  border-bottom: 1px #999 solid;
  display: flex;
  padding: 5px;
  & .parkings__record_item--title {
    border-top: 1px #999 solid;
    color: #333;
    font-size: 16px;
    letter-spacing: 2px;
    line-height: 20px;
    width: calc(100% - 95px);
  }
  & .parkings__record_item--status {
    font-size: 18px;
    font-weight: bold;
    width: 20px;
  }
`
const ParkingSectionStyle = styled.li`
  display: none;
  & .parkings_section__list {
    background: #f3f3f3;
    width: 100%;
  }
`
const ParkingRow = (props) => {
  const [isParkingOpen, setParkingOpen] = useState(false)
  const clz = props.status === '空' ? 'parkings__record--vacant' : 'parkings__record--full'
  const prefix = props.status === '空' ? '残' : '待'
  return (
    <div>
      <ParkingRowStyle className={`js-parkings__record ${clz}`}>
        <ParkingRecordItem className="parkings__record_item--title">{props.name}</ParkingRecordItem>
        <ParkingRecordItem className="parkings__record_item--status">{props.status}</ParkingRecordItem>
        <ParkingRecordItem className="parkings__record_item--num">
          {prefix}
          <span>{props.numberOfSlot}</span>人
        </ParkingRecordItem>
        <ParkingRecordItem
          className="parkings__record_item parkings__record_item--button"
          onClick={() => {
            setParkingOpen(!isParkingOpen)
          }}
        />
      </ParkingRowStyle>
      {isParkingOpen && (
        <ParkingSectionStyle style={{ display: 'list-item' }}>
          <ul className="parkings_section__list">
            {props.items.map((item) => (
              <ParkingArea props={item} />
            ))}
          </ul>
        </ParkingSectionStyle>
      )}
    </div>
  )
}

ParkingRow.propTypes = {
  name: PropTypes.string.isRequired,
  status: PropTypes.oneOf(['満', '空']).isRequired,
  numberOfSlot: PropTypes.number.isRequired,
  items: PropTypes.array.isRequired,
}
export default ParkingRow
