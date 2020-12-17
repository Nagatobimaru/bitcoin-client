import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import iconBicycle from 'assets/images/icon-cartype-bicycle.svg'
import iconBoth from 'assets/images/icon-cartype-both.svg'
import iconScooter from 'assets/images/icon-cartype-scooter.svg'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPenFancy } from '@fortawesome/free-solid-svg-icons'
import Button from 'components/Button'
const ParkingSectionRecordStyle = styled.li`
  border-bottom: 1px #999 solid;
  display: inline-flex;
  justify-content: space-between;
  width: 100%;
`
const ParkingSectionRecordItemStyle = styled.span`
  align-items: center;
  display: flex;
  padding: 3px;
  text-align: left;
  &.parkings_section__record_item--title {
    border-left: 4px #999 solid;
    color: #333;
    font-size: 14px;
    letter-spacing: 1.2px;
    line-height: 20px;
    padding: 3px 3px 3px 7px;
    width: calc(100% - 228px);
  }
  &.parkings_section__record_item--cartype {
    width: 50px;
  }
  &.parkings_section__record_item--cartype img {
    height: 30px;
  }
  &.parkings_section__record_item--status {
    font-size: 18px;
    font-weight: bold;
    width: 20px;
  }
`

const ParkingArea = ({ props }) => {
  const sectionClz = props.status === '空' ? 'parkings_section__record--vacant' : 'parkings_section__record--full'
  const iconType = {
    '自転車/原付': iconBoth,
    自転車: iconBicycle,
    原付: iconScooter,
  }[props.type]
  const areaPrefix = props.status === '空' ? '残' : '待'
  return (
    <ParkingSectionRecordStyle className={`${sectionClz}`}>
      <ParkingSectionRecordItemStyle className="parkings_section__record_item--title">
        {props.name}
      </ParkingSectionRecordItemStyle>
      <ParkingSectionRecordItemStyle className="parkings_section__record_item--cartype">
        <img src={iconType} alt={props.type} />
      </ParkingSectionRecordItemStyle>
      <ParkingSectionRecordItemStyle className="parkings_section__record_item--status">
        {props.status}
      </ParkingSectionRecordItemStyle>
      <ParkingSectionRecordItemStyle className="parkings_section__record_item--num">
        {areaPrefix}
        <span>{props.numberOfSlot}</span>人
      </ParkingSectionRecordItemStyle>
      <ParkingSectionRecordItemStyle className="parkings_section__record_item--button">
        <Button normal>
          <FontAwesomeIcon icon={faPenFancy} /> 申請
        </Button>
      </ParkingSectionRecordItemStyle>
    </ParkingSectionRecordStyle>
  )
}
ParkingArea.propTypes = {
  name: PropTypes.string.isRequired,
  type: PropTypes.oneOf(['自転車/原付', '自転車', '原付']).isRequired,
  status: PropTypes.oneOf(['満', '空']).isRequired,
  numberOfSlot: PropTypes.number.isRequired,
}

export default ParkingArea
