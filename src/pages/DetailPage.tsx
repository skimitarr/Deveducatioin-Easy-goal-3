import { CardDetail } from '../components/CardDetail';
import { useLocation } from "react-router-dom";
import { IArticle, IstateArticleProps } from '../components/Interfaces';
import { useEffect } from 'react';

function DetailPage({ articles }: IstateArticleProps) {
  const location = useLocation();
  const title = location.state.title;

  useEffect(() => {
    window.scrollTo(0, 0)
  }, []);

  return (
    <main className='container-body-detail'>
      {articles.map((item: IArticle) => {
        if (item.title === title) {
          return <CardDetail key={item.title} item={item} />
        }
      })}
    </main>
  );
}
export default DetailPage;

