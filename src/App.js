import { Routes, Route } from 'react-router-dom';
import { Component } from 'react';
import Login from './components/Login/Login';
import SharedLayout from './components/SharedLayout';
import { store } from './components/ReducerComp';
import { Provider } from 'react-redux';
class App extends Component {
  render() {
    return (
      <>
        <Provider store={store}>
          <Routes>
            <Route path='/' element={<Login />}></Route>
            <Route path='/home' element={<SharedLayout prop='/home' />} />
            <Route path='/friends' element={<SharedLayout prop='/friends' />} />
            <Route path='/watch' element={<SharedLayout prop='/watch' />} />
            <Route path='/marketplace' element={<SharedLayout prop='/marketplace' />} />
            <Route path='/cover' element={<SharedLayout prop='/cover' />} />
            <Route path='/createpost' element={<SharedLayout prop='/createpost' />} />
            <Route path='*' element={<div style={{ textAlign: 'center', fontSize: '30px', marginTop: '200px' }}>404 Page Not Found!!</div>} />
          </Routes>
        </Provider>
      </>
    );
  }

}

export default App;
