import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { FaTrash } from 'react-icons/fa'
import { v4 as uuidv4 } from 'uuid'; // Importa uuid

const categories = ['Technology', 'Health', 'Finance', 'Education'];

function App() {
  const [articles, setArticles] = useState([]);
  const [title, setTitle] = useState('');
  const [status, setStatus] = useState('draft');
  const [author, setAuthor] = useState('');
  const [image, setImage] = useState('');
  const [content, setContent] = useState('');
  const [category, setCategory] = useState(categories[0]);
  const [published, setPublished] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (title && author && content && image) {
      const newArticle = {
        id: uuidv4(), // Genera un ID unico
        title,
        status,
        author,
        image,
        content,
        category,
        published
      };
      setArticles([...articles, newArticle]);
      setTitle('');
      setStatus('draft');
      setAuthor('');
      setImage('');
      setContent('');
      setCategory(categories[0]);
      setPublished(false);
    }
  };

  const handleDelete = (id) => {
    const newArticles = articles.filter(article => article.id !== id);
    setArticles(newArticles);
  };

  return (
    <>
      <div className="container mt-3">
        <h1>Gestione Articoli del Blog</h1>
        <form onSubmit={handleSubmit}>
          <div className="form-group mt-2">
            <label htmlFor="title">Titolo dell'articolo</label>
            <input
              type="text"
              className="form-control"
              id="title"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
            />
          </div>
          <div className="form-group mt-2">
            <label htmlFor="status">Stato dell'articolo</label>
            <select
              className="form-control"
              id="status"
              value={status}
              onChange={(e) => setStatus(e.target.value)}>
              <option value="draft">Draft</option>
              <option value="published">Published</option>
            </select>
          </div>
          <div className="form-group mt-2">
            <label htmlFor="author">Autore dell'articolo</label>
            <input
              type="text"
              className="form-control"
              id="author"
              value={author}
              onChange={(e) => setAuthor(e.target.value)}
            />
          </div>
          <div className="form-group mt-2">
            <label htmlFor="image">URL dell'immagine</label>
            <input
              type='text'
              className='form-control'
              id='image'
              value={image}
              onChange={(e) => setImage(e.target.value)}
            />
          </div>
          <div className="form-group mt-2">
            <label htmlFor='content'>Contenuto dell'articolo</label>
            <textarea
              className='form-control'
              id='content'
              value={content}
              onChange={(e) => setContent(e.target.value)}>
            </textarea>
          </div>
          <div className="form-group mt-2">
            <label htmlFor='category'>Categoria</label>
            <select
              className='form-control'
              id='category'
              value={category}
              onChange={(e) => setCategory(e.target.value)}>
              {categories.map((cat, index) => (
                <option key={index} value={cat}>{cat}</option>
              ))}
            </select>
          </div>
          <div className="form-group form-check mt-2">
            <input
              type="checkbox"
              className="form-check-input"
              id="published"
              checked={published}
              onChange={(e) => setPublished(e.target.checked)}
            />
            <label className="form-check-label" htmlFor="published">Pubblicato</label>
          </div>
          {/* <button type="submit" className={`btn btn-success mt-3
            ${(!status || !title || !author || !image || !content  ) && 'disabled'}`}>
            Aggiungi Articolo
          </button> */}
         <button type="submit" className="btn btn-primary mt-2">Aggiungi Articolo</button> 
        </form>
        <ul className="list-group mt-3">
          {articles.map((article) => (
            <li key={article.id}
              className="list-group-item d-flex justify-content-between align-items-center">
              <div>
                <h5>{article.title}</h5>
                <p>ID: {article.id}</p>
                <p>Stato: {article.status}</p>
                <p>Autore: {article.author}</p>
                <p>Categoria: {article.category}</p>
                <p>Pubblicato: {article.published ? 'Sì' : 'No'}</p>
                <p>Contenuto: {article.content}</p>
                <img src={article.image} alt={article.title} style={{ maxWidth: '100px' }} />
              </div>
              <FaTrash onClick={() => handleDelete(index)} style={{ cursor: 'pointer' }} />
            </li>
          ))}
        </ul>
      </div>

    </>
  )
}

export default App
