//Codigo copiado en clase, no se usa
import {useState, useEffect} from "react";
import BookList from "../components/BookList";
import BookForm from "../components/BookForm";
import {db} from "../firebase/config";
import {collection, getDocs} from "firebase/firestore";

export default function Home(){
    const [books, setBooks] = useState([]);

    useEffect(() =>{
        const booksRef = collection(db, 'books');
        getDocs(booksRef).then((snapshot) =>{
            let results = [];
            snapshot.docs.forEach((doc)=>{
                results.push({ id: doc.id, ...doc.data()});
            });
            setBooks(results);
        });
    }, []);

    return(
        <div>
            {books && <BookList books={books} />}
            <BookForm />
        </div>
    );
}
