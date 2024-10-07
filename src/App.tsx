import "./App.css"
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import reducer from './redux/reducer.ts';
import NotificationList from './components/NotificationList.tsx';
import { fetchItems } from './redux/actions.ts';
import { useEffect } from "react";
import Header from "./components/Header.tsx";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home.tsx";
import sampleItems from "./data/data.ts";
import Orders from "./components/Order.tsx";
import CartComponent from "./components/Cart.tsx";
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer } from "react-toastify";
import Footer from "./components/Footer.tsx";


const store = createStore(reducer);

const App: React.FC = () => {
  useEffect(() => {
    store.dispatch(fetchItems(sampleItems));
  }, []);

  return (
    <Provider store={store}>
      <BrowserRouter >
      <Header />
      <ToastContainer
        position="top-right"
        autoClose={5000}  
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="colored"
      />
        
        <Routes >
          <Route path="/" element={<Home />} />
          <Route path="/notification" element={<> <div>
            <NotificationList />
          </div></>} />
          <Route path="/cart" element={
            <CartComponent />} />
          <Route path="/order" element={<> <div>
            <Orders />
          </div></>} />
        </Routes>
        <Footer />
      </BrowserRouter>

    </Provider>
  );
}

export default App;
