import { IProps } from './Interfaces';

export function CardDetail({item}: IProps) {
  return (
    <div className="article">
      <h5 className="article__title">{item.title}</h5>
      <img src={item.imageUrl} className="article__img" alt={item.title} />
      <p className="article__text">{item.description}</p>
      <div className="article__wrapper">
        <p className="article__comment-1">Experts Comment</p>
        <p className="article__comment-2">{item.expertComment}</p>
      </div>
    </div>
  );
}
