const Article = require('../models/article');

const getAllArticles = (req, res, next) => {
    Article.find()
        .then(articles => {
            console.log(articles)
            //res.json({result: result })
            res.render('pages/index', { articles })
        })
        .catch(err => console.log(err))
}


const getArticleById = async (req, res, next) => {
    const articleId = req.params.articleId;

    let article
    try{
        article = await Article.findById(articleId);
    } catch (err) {
        const error = 'Something went wrong, could not find a Article'
        console.log(error);
        return next(error);
    }
    
    console.log(article)
    //res.json({article: article})
    res.render('pages/singleArticle', { article })
}

const newArticle = (req, res) => {
    res.render('pages/createArticle')
}

const updateArticleForm = async (req, res, next) => {
    const articleId = req.params.articleId;

    let article
    try{
        article = await Article.findById(articleId);
    } catch (err) {
        const error = 'Something went wrong, could not find a Article'
        console.log(error);
        return next(error);
    }
    
    console.log(article)
    //res.json({article: article})
    res.render('pages/updateArticle', { article })
}

const createArticle = async (req, res, next) => {
    const { productName, company, price, productPictureLink, linkShop } = req.body;
    const createdArticle = new Article({
        productName,
        company,
        price,
        productPictureLink,
        linkShop
    })

    try {
        await createdArticle.save();
    } catch (err) {
        const error = "Failed, please try again."
        return error;
    }

    //res.status(201).json({ article: createdArticle });
    console.log(createArticle);
    res.redirect('/')
}

const updateArticle = async (req, res, next) => {
    const { productName, company, price, productPictureLink, linkShop} = req.body;
    const articleId = req.body.articleId
    console.log(articleId);

    let article;
    try {
        article = await Article.findById(articleId);
    } catch (err) {
        const error = 'Something went wrong, could noct pdate article'
        return next(error);
    }

    article.productName = productName;
    article.company = company;
    article.price = price;
    article.productPictureLink = productPictureLink;
    article.linkShop = linkShop;

    try {
        await article.save();
    } catch (err) {
        const error = 'Something went wrong!'
        return next(error);
    }

    //res.status(200).json({ articleId: [req.params.articleId, updatet] })
    res.redirect('/');
}

const deleteArticle = async (req, res, next) => {
    const articleId = req.params.articleId
    let article;
    try {
        article = await Article.findById(articleId);
    } catch (err) {
        const error = 'Somenting went wrong, could not delete Article'
        return next(error);
    }
    
    try {
        await article.remove();
    } catch (err) {
        const error = 'Somenting went wrong, could not delete Article'
        return next(error);
    }

    //res.status(200).json({ articleId: [req.params.articleId, deletet] })
    console.log(articleId)
    res.redirect('/');
}

exports.getAllArticles = getAllArticles;
exports.getArticleById = getArticleById;
exports.newArticle = newArticle;
exports.createArticle = createArticle;
exports.updateArticle = updateArticle;
exports.deleteArticle = deleteArticle;
exports.updateArticleForm = updateArticleForm;