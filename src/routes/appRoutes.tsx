import { Routes, Route } from 'react-router-dom'
import { AppRouteInterface, AuthRouteInterface, appRoutes, authRoutes } from './routes'
import AuthPoviders from './providers/authPoviders'
import AppProviders from './providers/appProviders'


export default function Approutes() {
    return (
        <>
            <Routes>
                {/* Auth routing */}
                <Route path='/auth' element={<AuthPoviders />}>
                    {Object.keys(authRoutes).map((key: string, index: number) => (
                        <Route key={key + ' ' + index} path={authRoutes[key as keyof AuthRouteInterface].path} element={authRoutes[key as keyof AuthRouteInterface].element} />
                    ))}
                </Route>

                {/* app routing */}
                <Route path='/' element={<AppProviders />}>
                    {Object.keys(appRoutes).map((key: string, index: number) => (
                        <Route key={key + ' ' + index} path={appRoutes[key as keyof AppRouteInterface].path} element={appRoutes[key as keyof AppRouteInterface].element} />
                    ))}
                </Route>
            </Routes>
        </>
    )
}
