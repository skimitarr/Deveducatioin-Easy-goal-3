import { db } from '../firebase'
import  {
  collection,
  onSnapshot,
  query
} from "firebase/firestore";
import { IArticle } from '../components/Interfaces';

const watchArticles = (fn: (arr: IArticle[]) => void) => {
  const queryCollection = query(collection(db, 'deveducation-easy'));
  const unsubscribe = onSnapshot(queryCollection, (data) => {
    const arrOfArticles: IArticle[] = [];
    data.forEach((item) => {
      arrOfArticles.push({
        title: item.data().title,
        description: item.data().description,
        imageUrl: item.data().imageUrl,
        expertComment: item.data().expertComment
      });
    });
    fn(arrOfArticles);
  })
  return () => unsubscribe()
}

export { watchArticles }
