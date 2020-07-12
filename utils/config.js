
var URL = "https://www.cryfeifei.top/";

// 更多信息 https://www.npmjs.com/package/hexo-generator-restful

// Get Hexo Config
// 获取所有 Hexo 配置（站点配置和主题配置）。
// Request
// GET /api/site.json
var URL_SITE = URL + '/api/site.json'

// Get Posts
// 如果配置 posts_size: 0 则不分页，以下请求会获取全部文章。
// Request
// GET /api/posts.json
var URL_POSTS = URL + '/api/posts.json'

// /api/posts.json
// Get Posts By Page
// 获取分页数据
// Request
// GET /api/posts/:PageNum.json
// todo 我的暂时没分页，是不是可以做一下

// Get All Tags
// 获取所有文章标签，如果文章无标签则不生成。
// Request
// GET /api/tags.json
var URL_TAGS = URL + '/api/tags.json'

// Get Posts By Tag
// 获取某一标签下的所有文章
// Request
// GET /api/tags/:TagName.json
// todo 

// Get All Categories
// 获取所有文章分类，如果文章无分类则不生成。
// Request
// GET /api/categories.json
var URL_CATEGORIES = URL + '/api/categories.json'

// Get Posts By Categorie
// 获取某一分类下的所有文章
// Request
// GET /api/categories/:CategorieName.json
// todo

// Get Post By Slug
// 根据文章别名获取文章详细信息
// Request
// GET /api/articles/:Slug.json

export default {
  getUrl : URL,
  getPosts : URL_POSTS 
}
