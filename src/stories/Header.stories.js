import React from 'react'

import Header from 'components/Header'

export default {
  title: 'Sibazono/Header',
  component: Header,
}

export const LogOff = () => <Header isMenuOpend />
export const LogIn = () => <Header isLoggedIn isMenuOpend />
