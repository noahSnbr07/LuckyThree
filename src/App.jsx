import React, { useState } from 'react'
import { Route, Routes } from 'react-router-dom';
import Start from './pages/Start';
import Navbar from './utils/components/Navbar';
import Game from './pages/Game';

export const BalanceContext = React.createContext();
export const IntermediateValueContext = React.createContext();

export default function App() {
  const [balance, setBalance] = useState(1000);
  const [intermediateValue, setIntermediateValue] = useState(0);
  return (
    <>
      <IntermediateValueContext.Provider value={[intermediateValue, setIntermediateValue]}>
        <BalanceContext.Provider value={[balance, setBalance]}>
          <Navbar />
          <main className='viewport'>
            <Routes>
              <Route path='/' element={<Start />} />
              <Route path='/Game' element={<Game />} />
            </Routes>
          </main>
        </BalanceContext.Provider>
      </IntermediateValueContext.Provider>
    </>
  );
}