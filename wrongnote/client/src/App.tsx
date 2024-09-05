
import './App.css'
import React, { Suspense, lazy } from 'react'
import { NotFoundComponent, NoteComponent } from './components';
import { Route, Routes } from 'react-router-dom';
import TestPage from './pages/TestPage/TestPage';
import { SearchPage } from './pages';


const SignUpPage = lazy(() =>
  import('./pages/SignUpPage').then((module) =>({
    default: module.SignUpPage,
  }))
)
const LoginPage = lazy(() =>
  import('./pages/LoginPage').then((module) =>({
    default: module.LoginPage,
  }))
)
const LandingPage = lazy(() =>
  import('./pages/LandingPage').then((module) =>({
    default: module.LandingPage,
  }))
)

const MakeProblemPage = lazy(() =>
  import('./pages/MakeProblemPage').then((module) =>({
    default: module.MakeProblemPage,
  }))
)
const LayoutPage = lazy(() =>
  import('./pages/LayoutPage').then((module) =>({
    default: module.LayoutPage,
  }))
)
const MainPage = lazy(() =>
  import('./pages/MainPage').then((module) =>({
    default: module.MainPage,
  }))
)

{/* <Route element={<PrivateRoute />}></Route>  --> 이건 나중에 인증된 회원들만 들어갈 수있게 하는거라 나중에 감싸야함 landgin페이지 제외하고*/}


function App() {
  return (
    <>
      <Routes>
        <Route path='/' element={<LandingPage />} />
        <Route path='/login' element={
            <Suspense fallback={<div></div>}>
              <LoginPage />
            </Suspense>
          } />
          <Route path='/signup' element={
            <Suspense fallback={<div></div>}>
              <SignUpPage />
            </Suspense>
          } />
        <Route path='*' element={
          <Suspense fallback={<div></div>}>
            <NotFoundComponent />
          </Suspense>
        }
        />
        <Route element={
          <Suspense fallback={<div></div>}>
              <LayoutPage />
          </Suspense>
        }>
        <Route path='/browse' element={
          <Suspense fallback={<div></div>}>
            <MainPage />
          </Suspense>
        }/>
          <Route path='/browse/test' element={
            <Suspense fallback={<div></div>}>
              <TestPage />
            </Suspense>
          } />
          <Route path='/browse/note' element={
            <Suspense fallback={<div></div>}>
              <NoteComponent />
            </Suspense>
          } />
          <Route path='/browse/problem' element={
            <Suspense fallback={<div></div>}>
              <MakeProblemPage />
            </Suspense>
          } />
          <Route path='/browse/search' element={
            <Suspense fallback={<div></div>}>
              <SearchPage />
            </Suspense>
          } />
        </Route>
      </Routes>
    </>
  );
}


export default App
