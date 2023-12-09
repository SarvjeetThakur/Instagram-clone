import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { appRoutes, authRoutes } from './routes'
import AuthPoviders from './providers/authPoviders'
import AppProviders from './providers/appProviders'


export default function Approutes() {
    return (
        <>

            <Router>
                <Routes>
                    
                    {/* Auth routing */}
                    <Route path='/auth' element={<AuthPoviders />}>
                        {Object.keys(authRoutes).map((key: string, index: number) => (
                            <Route key={key + ' ' + index} path={authRoutes[key].path} element={authRoutes[key].element} />
                        ))}
                    </Route>

                    {/* app routing */}
                    <Route path='/' element={<AppProviders />}>
                        {Object.keys(appRoutes).map((key: string, index: number) => (
                            <Route key={key + ' ' + index} path={appRoutes[key].path} element={appRoutes[key].element} />
                        ))}
                    </Route>
                </Routes>
            </Router>

        </>
    )
}
