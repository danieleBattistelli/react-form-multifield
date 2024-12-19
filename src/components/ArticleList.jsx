// ArticleList.js
import React from 'react';
import ArticleItem from './ArticleItem';
import 'bootstrap/dist/css/bootstrap.min.css';

const ArticleList = ({ articles, onDelete }) => {
    return (
        <ul className="list-group mt-3">
            {articles.map((article) => (
                <ArticleItem key={article.id} article={article} onDelete={onDelete} />
            ))}
        </ul>
    );
};

export default ArticleList;
