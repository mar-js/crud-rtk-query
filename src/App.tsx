import { Route, Routes } from 'react-router-dom'

import { Header } from 'layouts'

import { Title } from 'components'

import {
  Edit,
  Home,
  Task
} from 'pages'

export const App: React.FC = () => (
  <>
    <Header>
      <Title />
    </Header>
    <Routes>
      <Route path="/" element={ <Home /> } />
      <Route path="/:id" element={ <Task /> } />
      <Route path="/:id/edit" element={ <Edit /> } />
      { /* <Route path="*" element={ <NotFound /> } /> */ }
    </Routes>
  </>
)
