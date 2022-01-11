import React, { useEffect } from 'react';
import './App.css';
import Content from './components/Content';
import Header from './components/Header';
import { collection, addDoc, onSnapshot, Timestamp, orderBy, query } from "firebase/firestore";
import { db } from './firebase'
import UrlList from './components/UrlList';
import { nanoid } from 'nanoid'
import { Routes, Route } from "react-router-dom";
import UrlRedirect from './components/UrlRedirect';
import { AppContext } from './context';


function App() {
  const [urls, setUrls] = React.useState([]);
  const [darkMode, setDarkMode] = React.useState(false);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  }

  useEffect(() => {
    // async function main() {
    //   const querySnapshot = await getDocs(collection(db, "urls"));
    // const data = []
    // querySnapshot.forEach((doc) => {
    //   data.push(doc.data())
    // });
    // setUrls(data);
    // }
    // main();
    const q = query(collection(db, "urls"), orderBy("date", "desc"));
    const unsub = onSnapshot(q, (querySnapshot) => {
      const data = []
      querySnapshot.forEach((doc) => {
        data.push(doc.data())
      });
      setUrls(data);

    });
    return unsub;
  }, [])

  async function shortenUrl(url) {
    try {
      const docRef = await addDoc(collection(db, "urls"), {
        main_url: url,
        short_url: nanoid(6),
        clicks: 0,
        date: Timestamp.fromDate(new Date())
      });
      console.log("Document written with ID: ", docRef.id);
    } catch (e) {
      console.error("Error adding document: ", e);
    }
  }

  return (
    <AppContext.Provider value={{ darkMode, toggleDarkMode }}>
      <div className={darkMode && 'dark'}>
        <div className="App" >

          <Routes>
            <Route path="/" element={<>
              <Header />
              <Content shortenUrl={shortenUrl} />
              {urls.length > 0 && <UrlList urls={urls} />}
            </>} />

            <Route path="/:id" element={<UrlRedirect />} />
          </Routes>

        </div>
      </div>
    </AppContext.Provider >
  );
}

export default App;
