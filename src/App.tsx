import { Routes, Route } from "react-router-dom";
import Header from "./components/Header"
import Home from "./pages/Home";
import DetailPage from "./pages/DetailPage"
import NotFound from "./pages/NotFound";

import { useState, useEffect } from 'react';
import { IArticle } from './components/Interfaces';
import { watchArticles } from './services/DatabaseService'

function App() {
  const [articles, setArticles] = useState<IArticle[]>([]);

  useEffect(() => {
    watchArticles(setArticles)
  }, [])

  return (
    <Routes>
      <Route path="/" element={<Header />}>
        <Route index element={<Home articles={articles}/>} />
        <Route path="/articles/:title" element={<DetailPage articles={articles}/>} />
        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  )
}
export default App;
