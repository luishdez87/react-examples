import React, { useState, useRef, useCallback } from 'react';
import { useSearch } from '../hooks/useSearch';

const Scroll = () => {

  const [query, setQuery] = useState('');
  const [page, setPage] = useState(1);
  const { books, loading, isMore } = useSearch(query, page);

  const observer = useRef();
  const lastBookRef = useCallback(node => {
    if (loading) return;
    if (observer.current) observer.current.disconnect();
    observer.current = new IntersectionObserver(entries => {
      if (entries[0].isIntersecting && isMore) {
        setPage(prevPage => prevPage + 1);
      }
    })
    if (node) observer.current.observe(node);
  }, [loading, isMore]);

  const handleSearch = (e) => {
    setQuery(e.target.value);
    setPage(1);
  }


  return(
    <>
      <input type="text" placeholder="Search..." onChange={handleSearch} />
      {books.map((book, index) => {
        if (books.length === index + 1) {
          return <div ref={lastBookRef} key={book}> {book} </div>
        } else {
          return <div key={book}> {book} </div>
        }
      }
      )}
      <div > {loading && 'loading...'} </div>
    </>
  );
}

export default Scroll;