export interface IstateArticleProps {
  articles: IArticle[];
}

export interface IProps {
  item: IArticle
}
export interface IArticle {
  description: string
  expertComment: string
  imageUrl: string
  title: string
}
