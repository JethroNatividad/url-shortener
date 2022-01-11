import React, { useEffect } from 'react';
import './App.css';
import Content from './components/Content';
import Header from './components/Header';
import { collection, addDoc, onSnapshot } from "firebase/firestore";
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
    const unsub = onSnapshot(collection(db, "urls"), (querySnapshot) => {
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
      });
      console.log("Document written with ID: ", docRef.id);
    } catch (e) {
      console.error("Error adding document: ", e);
    }
  }

  return (
    <AppContext.Provider value={{ darkMode, toggleDarkMode }}>
      <div className={`min-h-screen ${darkMode && 'dark'}`}>
        <div className="App bg-gray-100 dark:bg-black select-none pb-10" >

          <Routes>
            <Route path="/" element={<>
              <Header />
              <Content shortenUrl={shortenUrl} />
              <UrlList urls={urls} />
            </>} />

            <Route path="/:id" element={<UrlRedirect />} />
          </Routes>

        </div>
      </div>
    </AppContext.Provider >
  );
}

export default App;
