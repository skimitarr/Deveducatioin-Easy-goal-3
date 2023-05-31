import '../App.css';
import { Card } from '../components/Card';
import { IstateArticleProps, IArticle } from '../components/Interfaces';
import { useEffect } from 'react';

const Home = ({ articles }: IstateArticleProps) => {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, []);

  return (
    <main className="main text-center">
      <div className="row">
        {articles.map((item: IArticle) => (
          <div className="col-md-4 col-sm-6 card-wrapper" key={item.title}>
            <Card item={item} />
          </div>
        ))}
      </div>
    </main>
  );
}
export default Home;
