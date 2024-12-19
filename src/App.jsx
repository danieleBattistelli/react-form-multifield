import React, { useState, useEffect } from 'react';
import { v4 as uuidv4 } from 'uuid'; // Importa uuid
import 'bootstrap/dist/css/bootstrap.min.css';
import { FaTrash } from 'react-icons/fa';

const categories = ['Technology', 'Health', 'Finance', 'Education'];
const tagsList = ['React', 'JavaScript', 'CSS', 'HTML', 'Bootstrap'];

function App() {
  const [articles, setArticles] = useState([]);
  const [title, setTitle] = useState('');
  const [author, setAuthor] = useState('');
  const [image, setImage] = useState('');
  const [content, setContent] = useState('');
  const [category, setCategory] = useState(categories[0]);
  const [published, setPublished] = useState(false);
  const [tags, setTags] = useState([]);

  useEffect(() => {
    if (published) {
      alert("L'articolo è stato selezionato per la pubblicazione");
    }
  }, [published]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (title && author && content && image) {
      const newArticle = {
        id: uuidv4(), // Genera un ID unico
        title,
        author,
        image,
        content,
        category,
        published,
        tags
      };
      setArticles([...articles, newArticle]);
      setTitle('');
      setAuthor('');
      setImage('');
      setContent('');
      setCategory(categories[0]);
      setPublished(false);
      setTags([]);
    }
  };

  const handleDelete = (id) => {
    const newArticles = articles.filter(article => article.id !== id);
    setArticles(newArticles);
  };

  const handleTagChange = (tag) => {
    if (tags.includes(tag)) {
      setTags(tags.filter(t => t !== tag));
    } else {
      setTags([...tags, tag]);
    }
  };

  const renderCategories = () => {
    return categories.map((cat, index) => (
      <div key={index} className="form-check">
        <input
          className="form-check-input"
          type="radio"
          name="category"
          id={`category-${index}`}
          value={cat}
          checked={category === cat}
          onChange={(e) => setCategory(e.target.value)}
        />
        <label className="form-check-label" htmlFor={`category-${index}`}>
          {cat}
        </label>
      </div>
    ));
  };

  const renderTags = () => {
    return tagsList.map((tag, index) => (
      <div key={index} className="form-check">
        <input
          className="form-check-input"
          type="checkbox"
          id={`tag-${index}`}
          value={tag}
          checked={tags.includes(tag)}
          onChange={() => handleTagChange(tag)}
        />
        <label className="form-check-label" htmlFor={`tag-${index}`}>
          {tag}
        </label>
      </div>
    ));
  };

  const isFormValid = title && author && content && image;

  return (
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
            type="text"
            className="form-control"
            id="image"
            value={image}
            onChange={(e) => setImage(e.target.value)}
          />
        </div>
        <div className="form-group mt-2">
          <label htmlFor="content">Contenuto dell'articolo</label>
          <textarea
            className="form-control"
            id="content"
            value={content}
            onChange={(e) => setContent(e.target.value)}>
          </textarea>
        </div>
        <div className="form-group mt-2">
          <label>Categoria</label>
          {renderCategories()}
        </div>
        <div className="form-group mt-2">
          <label>Tags</label>
          {renderTags()}
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
        <button
          type="submit"
          className={`btn mt-2 ${isFormValid ? 'btn-success' : 'btn-danger'}`}
          disabled={!isFormValid}>
          Aggiungi Articolo
        </button>
      </form>
      <ul className="list-group mt-3">
        {articles.map((article) => (
          <li key={article.id} className="list-group-item d-flex justify-content-between align-items-center">
            <div>
              <h5>{article.title}</h5>
              <p>ID: {article.id}</p>
              <p>Autore: {article.author}</p>
              <p>Categoria: {article.category}</p>
              <p>Pubblicato: {article.published ? 'Sì' : 'No'}</p>
              <p>Tags: {article.tags.join(', ')}</p>
              <p>Contenuto: {article.content}</p>
              <img src={article.image} alt={article.title} style={{ maxWidth: '100px' }} />
            </div>
            <FaTrash onClick={() => handleDelete(article.id)} style={{ cursor: 'pointer' }} />
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
