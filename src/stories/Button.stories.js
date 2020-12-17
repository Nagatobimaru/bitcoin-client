import React from 'react'

import Button from 'components/Button'

export default {
  title: 'Sibazono/Button',
  component: Button,
}

export const BaseButton = () => <Button>Button</Button>
export const Primary = () => <Button primary>Primary Button</Button>
export const NormalButton = () => <Button normal>Normal Button</Button>
export const SafetyButton = () => <Button safety>Safety Button</Button>
export const DefinitiveButton = () => <Button definitive>Definitive Button</Button>
export const DangerButton = () => <Button danger>Danger Button</Button>
export const LinkButton = () => <Button link>Link Button</Button>
