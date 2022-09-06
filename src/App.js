import { CssBaseline } from '@mui/material'
import { Routes, Route, useLocation } from 'react-router-dom'
import Blogs from './pages/Client/Main-Pages/Blogs'
import Orders from './pages/Client/Main-Pages/Orders'
import Schedules from './pages/Client/Main-Pages/Schedules'
import TrainersList from './pages/Client/Main-Pages/Trainers-List'
import { useDispatch } from 'react-redux'
import { useEffect } from 'react'
import { setTileName } from './redux/AppbarTitleSlice'
import TrainerDetails from './pages/Client/Main-Pages/Trainer-Details'
import MakeOrder from './pages/Client/Main-Pages/Make-Order'
import ViewOrder from './pages/Client/Main-Pages/View-Order'
import UpdateOrder from './pages/Client/Main-Pages/Update-Order'
import ClientProfile from './pages/Client/Main-Pages/ClientProfile'
import ClientProfileUpdate from './pages/Client/Main-Pages/ClientProfileUpdate'
import BlogView from './pages/Client/Main-Pages/BlogView'

import SignIn from './pages/User/Main-Pages/SignIn'
import SignUp from './pages/User/Main-Pages/SignUp'
import PasswordReset from './pages/User/Main-Pages/PasswordReset'
import { UserAuthContextProvider } from './Context/UserAuthContext'
import ProtectedRoute from './components/ProtectedRoute'

import TrainerClients from './pages/Trainer/MainPages/Clients'
import TrainerOrders from './pages/Trainer/MainPages/Orders'
import TrainerPackages from './pages/Trainer/MainPages/Packages'
import TrainerOrderDetaills from './pages/Trainer/MainPages/OrderDetaills'
import TrainerPlan from './pages/Trainer/MainPages/Plan'
import TrainerViewPlan from './pages/Trainer/MainPages/ViewPlan'
import TrainerAboutProfile from './pages/Trainer/MainPages/AboutProfile'
import TrainerProfile from './pages/Trainer/MainPages/Profile'
import TrainerProfileEdit from './pages/Trainer/MainPages/ProfileEdit'
import TrainerCreatepackage from './pages/Trainer/MainPages/Createpackage'
import TrainerUpdatePackage from './pages/Trainer/MainPages/UpdatePackage'
import TrainerClientDetails from './pages/Trainer/MainPages/ClientDetails'

export function App() {
  const dispatch = useDispatch()
  const location = useLocation()

  useEffect(() => {
    if (location.pathname === '/blogs') {
      dispatch(setTileName('Blogs'))
    } else if (location.pathname === '/trainers') {
      dispatch(setTileName('Trainers'))
    } else if (location.pathname === '/orders') {
      dispatch(setTileName('Order History'))
    } else if (location.pathname === '/schedules') {
      dispatch(setTileName('Schedules'))
    } else if (location.pathname === `/trainer-details`) {
      dispatch(setTileName('Trainer Details'))
    } else if (location.pathname === '/make-order') {
      dispatch(setTileName('Make Order'))
    } else if (location.pathname === '/view-order') {
      dispatch(setTileName('View Order'))
    } else if (location.pathname === '/update-order') {
      dispatch(setTileName('Update Order'))
    }
  }, [location.pathname])

  return (
    <div>
      <CssBaseline />
      <UserAuthContextProvider>
        <Routes>
          <Route
            path='/trainers'
            element={
              <ProtectedRoute>
                <TrainersList />
              </ProtectedRoute>
            }
          />
          <Route
            path='/blogs'
            element={
              <ProtectedRoute>
                <Blogs />
              </ProtectedRoute>
            }
          />
          <Route
            path='/orders'
            element={
              <ProtectedRoute>
                <Orders />
              </ProtectedRoute>
            }
          />
          <Route
            path='/schedules'
            element={
              <ProtectedRoute>
                <Schedules />
              </ProtectedRoute>
            }
          />
          <Route
            path='/trainer-details'
            element={
              <ProtectedRoute>
                <TrainerDetails />
              </ProtectedRoute>
            }
          />
          <Route
            path='/make-order'
            element={
              <ProtectedRoute>
                <MakeOrder />
              </ProtectedRoute>
            }
          />
          <Route
            path='/view-order'
            element={
              <ProtectedRoute>
                <ViewOrder />
              </ProtectedRoute>
            }
          />
          <Route
            path='/update-order'
            element={
              <ProtectedRoute>
                <UpdateOrder />
              </ProtectedRoute>
            }
          />
          <Route
            path='/blog-view'
            element={
              <ProtectedRoute>
                <BlogView />
              </ProtectedRoute>
            }
          />
          <Route
            path='/client-profile'
            element={
              <ProtectedRoute>
                <ClientProfile />
              </ProtectedRoute>
            }
          />
          <Route
            path='/client-profile-update'
            element={
              <ProtectedRoute>
                <ClientProfileUpdate />
              </ProtectedRoute>
            }
          />

          {/* Chamod */}
          <Route path='/signin' element={<SignIn />} />
          <Route path='/signup' element={<SignUp />} />
          <Route path='/reset-password' element={<PasswordReset />} />

          {/* Rasanga */}
          <Route path='/trainer/clients' element={<TrainerClients />} />
          <Route
            path='/trainer/clients/:id'
            element={<TrainerClientDetails />}
          />
          <Route path='/trainer/orders' element={<TrainerOrders />} />
          <Route path='/trainer/packages' element={<TrainerPackages />} />
          <Route
            path='/trainer/orders/:id'
            element={<TrainerOrderDetaills />}
          />
          <Route path='/trainer/create-plan/:id' element={<TrainerPlan />} />
          <Route path='/trainer/plan/:id' element={<TrainerViewPlan />} />
          <Route path='/trainer/about' element={<TrainerAboutProfile />} />
          <Route path='/trainer/profile' element={<TrainerProfile />} />
          <Route
            path='/trainer/profile-edit'
            element={<TrainerProfileEdit />}
          />
          <Route
            path='/trainer/package-create'
            element={<TrainerCreatepackage />}
          />
          <Route
            path='/trainer/package-edit'
            element={<TrainerUpdatePackage />}
          />
        </Routes>
      </UserAuthContextProvider>
    </div>
  )
}

export default App
