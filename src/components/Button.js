import React from 'react'
import styled, { css } from 'styled-components'

const ButtonStyle = styled.button`
  align-items: center;
  color: #444;
  background: #fff;
  border: 1px #ccc solid;
  border-bottom: solid 3px #ccc;
  border-radius: 5px;
  box-shadow: inset 0 2px 2px rgba(255, 255, 255, 0.2);
  display: inline-flex;
  font-family: 'M PLUS Rounded 1c', sans-serif;
  font-size: 12px;
  font-weight: bold;
  line-height: 16px;
  padding: 5px 8px;
  position: relative;
  text-align: left;
  ${(props) =>
    props.primary &&
    css`
      color: #fff;
      background: #2d9fdb;
      border-color: #0063ac;
      border-bottom: solid 3px #0063ac;
    `}
  ${(props) =>
    props.normal &&
    css`
      background: #ffe9a2;
      border-color: #f5d156;
      border-bottom: solid 3px #f5d156;
    `}
  ${(props) =>
    props.safety &&
    css`
      background: #a2e58b;
      border-color: #799f6c;
      border-bottom: solid 3px #799f6c;
    `}
  ${(props) =>
    props.definitive &&
    css`
      background: #e5681a;
      border-color: #a7064a;
      border-bottom: solid 3px #a7064a;
      color: #fff;
      font-weight: bold;
    `}
  ${(props) =>
    props.danger &&
    css`
      background: #e51a58;
      border-color: #b41f1f;
      border-bottom: solid 3px #b41f1f;
      color: #fff;
      font-weight: bold;
    `}
  ${(props) =>
    props.link &&
    css`
      border-color: #b4e6ff;
      color: #20a3d3;
      padding: 3px 6px;
    `}
`

const Button = (props) => <ButtonStyle {...props} />
export default Button
