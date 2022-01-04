import React, { useEffect } from 'react';
import './App.css';
import Content from './components/Content';
import Header from './components/Header';
import { collection, getDocs } from "firebase/firestore";
import { db } from './firebase'
import UrlList from './components/UrlList';

function App() {
  const [urls, setUrls] = React.useState([]);
  useEffect(() => {
    async function main() {
      const querySnapshot = await getDocs(collection(db, "urls"));
      const data = []
      querySnapshot.forEach((doc) => {
        data.push(doc.data())
      });
      setUrls(data);
    }
    return main();
  }, [])
  return (
    <div className="App h-screen bg-gray-100">
      <Header />
      <Content />
      <UrlList urls={urls} />
    </div>
  );
}

export default App;
