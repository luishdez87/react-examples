import { useEffect, useState } from 'react';
import {request, Method } from '../utils/request';
export const useSearch = (query, page) => {

  const [loading, setLoading] = useState(true);
  const [books, setBooks] = useState([]);
  const [isMore, setIsMore] = useState(false);

  useEffect(() => {
    setBooks([])
  }, [query])

  useEffect(() => {
    setLoading(true);
    request('http://openlibrary.org/search.json', Method.GET, query, page)
    .then(books => {
      setBooks(prevBooks => {
        return [...new Set([...prevBooks, ...books.docs.map(b => b.title)])]
      });
      setIsMore(books.docs.length > 0);
      setLoading(false);
    })
  }, [query, page])

  return {
    books, loading, isMore
  }
}