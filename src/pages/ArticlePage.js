import React from 'react';
import ArticlesList from '../components/ArticlesList';
import NotFoundPage from './NotFoundPage';
import articleContent from './article-content';

const ArticlePage = ({ match }) => {
    const name = match.params.name;
    const article = articleContent.find(article => article.name == name)    
    const otherArticles = articleContent.filter(article => article.name != name); //all articles except article currently viewing
    
    if(!article) return <NotFoundPage />

    return (
        <> 
        <h1>{article.title}</h1>
        {article.content.map((paragraph,key) => (
            <p key={key}>{paragraph}</p>
        ))}
        <h3>Other Articles:</h3>
        <ArticlesList articles={otherArticles} />
        </>
    );
}

export default ArticlePage;