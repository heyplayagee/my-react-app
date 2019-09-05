import React from 'react';
import articleContent from './article-content';
import ArticlesList from '../components/ArticlesList';

const ArticlesListPage = () => (
    <> 
    <h1>All Articles</h1>
    <ArticlesList articles={articleContent} />
    </>
);

export default ArticlesListPage;