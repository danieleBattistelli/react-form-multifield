// ArticleItem.js
import React from 'react';
import { FaTrash } from 'react-icons/fa';
import 'bootstrap/dist/css/bootstrap.min.css';

const ArticleItem = ({ article, onDelete }) => {
    return (
        <li className="list-group-item d-flex justify-content-between align-items-center">
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
            <FaTrash onClick={() => onDelete(article.id)} style={{ cursor: 'pointer' }} />
        </li>
    );
};

export default ArticleItem;
