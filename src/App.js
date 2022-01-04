import React, { useEffect } from 'react';
import './App.css';
import Content from './components/Content';
import Header from './components/Header';
import { collection, getDocs } from "firebase/firestore";
import { db } from './firebase'

function App() {
  const [urls, setUrls] = React.useState([]);
  useEffect(() => {
    async function main() {
      const querySnapshot = await getDocs(collection(db, "urls"));
      const data = []
      querySnapshot.forEach((doc) => {
        // console.log(`${doc.id} => ${doc.data()}`);
        data.push(doc.data())
      });
      console.log(data);
      setUrls(data);
    }
    return main();
  }, [])
  return (
    <div className="App h-screen bg-gray-100">

      <Header />
      <Content />
    </div>
  );
}

export default App;
