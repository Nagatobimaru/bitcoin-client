import React from 'react'

const Top = React.lazy(() => import('../pages/top'))

const Notice = React.lazy(() => import('../pages/notice'))
const Signin = React.lazy(() => import('../pages/signin'))

const Signup = React.lazy(() => import('../pages/signup'))
const SignupEmail = React.lazy(() => import('../pages/signupEmail'))
const PasswordReset = React.lazy(() => import('../pages/passwordReset'))
const NewApp = React.lazy(() => import('../pages/newApp'))
const NewAppConfirm = React.lazy(() => import('../pages/newAppConfirm'))
const Mypage = React.lazy(() => import('../pages/mypage'))
const UpdateApp = React.lazy(() => import('../pages/updateApp'))

const UpdateAppConfirm = React.lazy(() => import('../pages/updateAppConfirm'))
const CancelApp = React.lazy(() => import('../pages/cancelApp'))
const CancelAppConfirm = React.lazy(() => import('../pages/cancelAppConfirm'))
const DeclineApp = React.lazy(() => import('../pages/declineApp'))
const PaymentSetting = React.lazy(() => import('../pages/paymentSetting'))

const PaymentSettingConfirm = React.lazy(() => import('../pages/paymentSettingConfirm'))
const CarrySetting = React.lazy(() => import('../pages/carrySetting'))
const CarrySettingConfirm = React.lazy(() => import('../pages/carrySettingConfirm'))
const Unsubscrible = React.lazy(() => import('../pages/unsubscrible'))
const UserEdit = React.lazy(() => import('../pages/userEdit'))


const UserEditConfirm = React.lazy(() => import('../pages/userEditConfirm'))
const EmailUpdate = React.lazy(() => import('../pages/emailUpdate'))
const ExemptionSubmit = React.lazy(() => import('../pages/exemptionSubmit'))

const routes = [
  {
    path: '/top',
    exact: true,
    name: 'top',
    component: Top,
  },
  {
    path: '/notice',
    exact: true,
    name: 'Notice',
    component: Notice,
  },
  {
    path: '/signin',
    exact: true,
    name: 'Signin',
    component: Signin,
  },
  {
    path: '/signup',
    exact: true,
    name: 'Signup',
    component: Signup,
  },
  {
    path: '/signupEmail',
    exact: true,
    name: 'SignupEmail',
    component: SignupEmail,
  },
  {
    path: '/passwordReset',
    exact: true,
    name: 'PasswordReset',
    component: PasswordReset,
  },
  {
    path: '/newApp',
    exact: true,
    name: 'NewApp',
    component: NewApp,
  },
  {
    path: '/newAppConfirm',
    exact: true,
    name: 'NewAppConfirm',
    component: NewAppConfirm,
  },
  {
    path: '/mypage',
    exact: true,
    name: 'Mypage',
    component: Mypage,
  },
  {
    path: '/updateApp',
    exact: true,
    name: 'UpdateApp',
    component: UpdateApp,
  },
  {
    path: '/updateAppConfirm',
    exact: true,
    name: 'UpdateAppConfirm',
    component: UpdateAppConfirm,
  },
  {
    path: '/cancelApp',
    exact: true,
    name: 'CancelApp',
    component: CancelApp,
  },
  {
    path: '/cancelAppConfirm',
    exact: true,
    name: 'CancelAppConfirm',
    component: CancelAppConfirm,
  },
  {
    path: '/declineApp',
    exact: true,
    name: 'DeclineApp',
    component: DeclineApp,
  },
  {
    path: '/paymentSetting',
    exact: true,
    name: 'PaymentSetting',
    component: PaymentSetting,
  },
  {
    path: '/paymentSettingConfirm',
    exact: true,
    name: 'PaymentSettingConfirm',
    component: PaymentSettingConfirm,
  },
  {
    path: '/carrySetting',
    exact: true,
    name: 'CarrySetting',
    component: CarrySetting,
  },
  {
    path: '/carrySettingConfirm',
    exact: true,
    name: 'CarrySettingConfirm',
    component: CarrySettingConfirm,
  },
  {
    path: '/unsubscrible',
    exact: true,
    name: 'Unsubscrible',
    component: Unsubscrible,
  },
  {
    path: '/userEdit',
    exact: true,
    name: 'UserEdit',
    component: UserEdit,
  },
  {
    path: '/userEditConfirm',
    exact: true,
    name: 'UserEditConfirm',
    component: UserEditConfirm,
  },
  {
    path: '/emailUpdate',
    exact: true,
    name: 'EmailUpdate',
    component: EmailUpdate,
  },
  {
    path: '/exemptionSubmit',
    exact: true,
    name: 'ExemptionSubmit',
    component: ExemptionSubmit,
  },
]

export default routes
