import { Routes, Route } from 'react-router-dom'
import { UserPanel } from './pages/UserPanel'

export default function App() {
    return (
        <Routes>
            <Route path={'/'} element={<UserPanel />} />
        </Routes>
    )
}