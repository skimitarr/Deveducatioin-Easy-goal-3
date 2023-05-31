import { Link } from "react-router-dom";
import { IProps } from './Interfaces';

export function Card({item}: IProps) {
  return (
    <div className="card">
      <img src={item.imageUrl} className="card-img-top" alt={item.title} />
      <div className="card-body">
        <Link to={`/articles/${item.title}`} state={{ title: item.title }} className="card-wrapper-title">
          <h5 className="card-title">{item.title}</h5>
        </Link>
      </div>
    </div>
  )
}
