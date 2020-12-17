import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBicycle, faParking } from '@fortawesome/free-solid-svg-icons'

import ParkingRow from './ParkingRow'
import Promotion from './Promotion'

const ParkingStyle = styled.section`
  /* --- PARKINGS --- */

  background: #cdeac4;
  box-sizing: border-box;
  border-top: 3px #a8d999 solid;
  padding: 30px 10px 30px;
  position: relative;
  width: 100%;
  z-index: 20;
  & .parkings__catchicon {
    background: #cdeac4;
    border-radius: 100%;
    color: #999;
    font-size: 45px;
    height: 100px;
    left: 50%;
    line-height: 70px;
    margin: 0 0 0 -50px;
    position: absolute;
    text-align: center;
    top: -50px;
    width: 100px;
    z-index: -10;
  }
  & .parkings__heading {
    background: #fff;
    border-bottom: 1px #999 solid;
    border-top: 1px #999 solid;
    color: #222;
    display: block;
    font-size: 22px;
    font-weight: normal;
    letter-spacing: 5px;
    margin: 0 auto 20px;
    padding: 10px 0;
    position: relative;
    text-align: center;
    width: 330px;
    z-index: 100;
  }
  & .parkings__heading svg {
    color: #325c8d;
    font-size: 26px;
    margin: 0 5px 0 0;
  }
  & .parkings__list {
    background: #fff;
    margin: 10px auto;
    width: 100%;
  }

  & .parkings__list {
    /* & .parkings__record_item {
      align-items: center;
      border-bottom: 1px #999 solid;
      display: flex;
      padding: 5px;
    } */
    & .parkings__record:first-child .parkings__record_item {
      border-top: 1px #999 solid;
    }
    & .parkings__record_item--title {
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
    & .parkings__record--vacant {
      & .parkings__record_item--status {
        color: #00a7ff;
      }
      &.parkings__record_item--num {
        & span {
          color: #00a7ff;
        }
      }
    }

    & .parkings__record--full {
      & .parkings__record_item--status {
        color: #cc5e00;
      }
      & .parkings__record_item--num {
        & span {
          color: #cc5e00;
        }
      }
    }
    & .parkings__record_item--num {
      color: #555;
      display: inline-flex;
      font-size: 12px;
      justify-content: flex-end;
      text-align: center;
      width: 50px;
      & span {
        font-size: 18px;
        font-weight: bold;
      }
    }
  }
  & .parkings__record_item--button {
    position: relative;
    width: 25px;
    &::after {
      content: '開';
      color: #333;
      display: flex;
      font-size: 13px;
      font-weight: bold;
      justify-content: center;
      height: 25px;
      position: relative;
      top: 5px;
      width: 25px;
      z-index: 20;
    }
    &::before {
      border-top: 25px solid #ffe9a2;
      border-right: 16px solid transparent;
      border-left: 16px solid transparent;
      content: '';
      filter: drop-shadow(0 4px 0 #f5d156);
      position: absolute;
      left: 1px;
      top: 5px;
      z-index: 10;
    }
  }
  & .open {
    & .parkings__record_item--button::after {
      content: '閉';
    }
  }

  .parkings .open .parkings__record_item--button::before {
    border-top: none;
    border-bottom: 25px solid #ffe9a2;
    top: 3px;
  }
  .parkings_section {
    display: none;
  }
  .parkings .parkings_section__list {
    background: #f3f3f3;
    width: 100%;
  }

  .parkings .parkings_section__record--vacant .parkings_section__record_item--status {
    color: #00a7ff;
  }
  .parkings .parkings_section__record--full .parkings_section__record_item--status {
    color: #cc5e00;
  }
  .parkings .parkings_section__record_item--num {
    color: #555;
    display: inline-flex;
    font-size: 12px;
    justify-content: flex-end;
    text-align: center;
    width: 54px;
  }
  .parkings .parkings_section__record_item--num span {
    font-size: 18px;
    font-weight: bold;
  }
  .parkings .parkings_section__record--vacant .parkings_section__record_item--num span {
    color: #00a7ff;
  }
  .parkings .parkings_section__record--full .parkings_section__record_item--num span {
    color: #cc5e00;
  }

  .parkings .parkings_section__record_item--button {
    justify-content: flex-end;
    width: 64px;
  }
  .parkings .parkings_section__record_item--button .btn {
    padding: 5px;
  }
`
const Parking = (props) => {
  return (
    <ParkingStyle id="parkings">
      <div className="parkings__catchicon">
        <FontAwesomeIcon icon={faBicycle} />
      </div>
      <h2 className="parkings__heading">
        <FontAwesomeIcon icon={faParking} />
        新宿区にある駐輪場
      </h2>

      <Promotion />

      <ul className="parkings__list">
        {props.parkings.map((item) => {
          return <ParkingRow key={item.id} {...item} />
        })}
      </ul>
    </ParkingStyle>
  )
}

Parking.propTypes = {
  parkings: PropTypes.array,
}

export default Parking
