import React from 'react'
import Header from 'components/Header'
import Footer from 'components/Footer'
import News from './components/News'
import Parking from './components/Parking'
const news = {
  news: [
    {
      id: 1,
      year: 2020,
      month: 4,
      date: 8,
      content: '都庁前駐輪場がオープンしました。',
    },
    {
      id: 2,
      year: 2020,
      month: 2,
      date: 15,
      content: '2020年度一斉申請を開始します。3月15日締め切りです。申請はお早めに。',
    },
    {
      id: 3,
      year: 2020,
      month: 4,
      date: 8,
      content: '都庁前駐輪場がオープンしました。',
    },
  ],
}

const parking = {
  parkings: [
    {
      id: 1,
      name: '新宿駅周辺',
      status: '空',
      numberOfSlot: 11,
      items: [
        { name: 'A区画', type: '自転車/原付', status: '空', numberOfSlot: 21 },
        { name: 'B区画', type: '自転車', status: '満', numberOfSlot: 28 },
        { name: 'C区画', type: '原付', status: '空', numberOfSlot: 28 },
      ],
    },
    {
      id: 2,
      name: '高田馬場駅',
      status: '満',
      numberOfSlot: 11,
      items: [
        { name: 'A区画', type: '自転車/原付', status: '空', numberOfSlot: 21 },
        { name: 'B区画', type: '自転車', status: '満', numberOfSlot: 28 },
        { name: 'C区画', type: '原付', status: '空', numberOfSlot: 28 },
      ],
    },
    {
      id: 3,
      name: '新宿御苑前駅',
      status: '空',
      numberOfSlot: 11,
      items: [
        { name: 'A区画', type: '自転車/原付', status: '空', numberOfSlot: 21 },
        { name: 'B区画', type: '自転車', status: '満', numberOfSlot: 28 },
        { name: 'C区画', type: '原付', status: '空', numberOfSlot: 28 },
      ],
    },
    {
      id: 4,
      name: '高田馬場駅',
      status: '満',
      numberOfSlot: 11,
      items: [
        { name: 'A区画', type: '自転車/原付', status: '空', numberOfSlot: 21 },
        { name: 'B区画', type: '自転車', status: '満', numberOfSlot: 28 },
        { name: 'C区画', type: '原付', status: '空', numberOfSlot: 28 },
      ],
    },
  ],
}
export default function index() {
  return (
    <div>
      <News {...news} />
      <Parking {...parking} />
    </div>
  )
}
