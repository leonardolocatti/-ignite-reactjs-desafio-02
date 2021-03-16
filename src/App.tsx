import { SideBar } from './components/SideBar';
import { Content } from './components/Content';

import './styles/global.scss';

import { GenreProvider } from './contexts/GenreContext';

export function App() {
  return (
    <div style={{ display: 'flex', flexDirection: 'row' }}>
      <GenreProvider>
        <SideBar />
        <Content />
      </GenreProvider>
      </div>
  )
}