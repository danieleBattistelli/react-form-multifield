// App.js
import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import ArticleForm from './components/ArticleForm';
import ArticleList from './components/ArticleList';

function App() {
  const [articles, setArticles] = useState([]);

  const addArticle = (article) => {
    setArticles([...articles, article]);
  };

  const handleDelete = (id) => {
    const newArticles = articles.filter(article => article.id !== id);
    setArticles(newArticles);
  };

  return (
    <div className="container mt-3">
      <h1>Gestione Articoli del Blog</h1>
      <ArticleForm addArticle={addArticle} />
      <ArticleList articles={articles} onDelete={handleDelete} />
    </div>
  );
}

export default App;
