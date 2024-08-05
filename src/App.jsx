import "./App.css";
import AddTransaction from "./components/AddTransaction";
import Balance from "./components/Balance";
import Header from "./components/Header";
import InceomExpense from "./components/InceomExpense";
import TransactionList from "./components/TransactionList";
import { GlobalProvider } from "./context/GlobalState";

const App = () => {
  return (
    <>
      <GlobalProvider>
        <Header />
        <div className="container">
          <Balance />
          <InceomExpense />
          <TransactionList />
          <AddTransaction />
        </div>
      </GlobalProvider>
    </>
  );
};

export default App;
