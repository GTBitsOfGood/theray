import React, { useState } from 'react';
import Statistics from './pages/Statistics';
import Ticket from './pages/Ticket';
import Navigation from './components/Navigation/Navigation';

function App() {
  const [pageIndex, changePageIndex] = useState(0);

  return (
    <Navigation progressBarColor="#fff" pageIndex={pageIndex} changePageIndex={changePageIndex}>
      <div className="App" style={{ width: '100vw', height: '100vh' }}>
        <Statistics
          text="gallons of gas wasted because of poor tire management"
          image="GasStation"
          number="2,000,000,000"
          selection={0}
        />
      </div>
      <div className="App" style={{ width: '100vw', height: '100vh' }}>
        <Statistics
          text="car accidents due to underinflated tires every year"
          image="Crash"
          number="78,000"
          selection={1}
        />
      </div>
      <div className="App" style={{ width: '100vw', height: '100vh' }}>
        <Statistics
          text="increase in serious accidents by driving on underinflated tires"
          image="FlatTire"
          number="300%"
          selection={1}
        />
      </div>
      <div className="App" style={{ width: '100vw', height: '100vh' }}>
        <Ticket isActive={pageIndex === 3} />
      </div>
      <div className="App" style={{ width: '100vw', height: '100vh' }}>
        <Ticket
          isActive={pageIndex === 4}
          bottomTicket
          subtext="The tread depths (in 32nd inch) of each individual tire is also calculated and displayed."
          dataHeader="Average tire depth: "
          data="10/32 - 11/32 inches"
          note="*Note that these tires are worn"
        />
      </div>
    </Navigation>
  );
}

export default App;
