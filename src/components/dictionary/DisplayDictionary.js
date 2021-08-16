import React, { useContext, useEffect, useState } from 'react';
import { DictionaryContext } from '../../providers/DictionaryProvider';
import WordCard from './word_card/word_card.js';
import ReactPaginate from 'react-paginate';
import SearchBar from './search_bar/search_bar';

const DisplayDictionary = () => {
  const ctx = useContext(DictionaryContext);
  const [currentSet, setCurrentSet] = useState([]);
  const [pageCount, setPageCount] = useState(
    ctx.localDictionary ? Math.ceil(ctx.localDictionary.length / 10) : 0 /// useReduce here??? think about when refactor
  );

  useEffect(() => {
    // load dictionary on the component load
    ctx.setSessionStorage();
  }, []);

  useEffect(() => {
    // when the cxt is loaded, useEffects sets initial page to display on screen:
    return ctx.localDictionary
      ? setCurrentSet(ctx.localDictionary.slice(0, 10))
      : [];
  }, [ctx]);

  useEffect(() => {
    // once cxt is loaded with dictionary, the page count is computed and set:
    return ctx.localDictionary
      ? setPageCount(Math.ceil(ctx.localDictionary.length / 10))
      : 0;
  }, [ctx]);

  const handlePageClick = ({ selected }) => {
    // if the first page is selected, to avoid multiply zero value function returns just slice method with hardcoded values for start and stop:
    if (selected === 0) return setCurrentSet(ctx.localDictionary.slice(0, 10));
    // otherwise function slice gets computed values for start and end points:
    setCurrentSet(ctx.localDictionary.slice(selected * 10, selected * 10 + 10));
  };

  return (
    <span className="dictionary_module">
      <SearchBar />
      <ul className="dictionary_container">
        {!ctx.localDictionary ? (
          <p>{ctx.currentState}</p>
        ) : (
          currentSet.map((item) => <WordCard item={item} key={item.id} />)
        )}
      </ul>
      <ReactPaginate
        previousLabel={'<'}
        nextLabel={'>'}
        breakLabel={'...'}
        breakClassName={'break-me'}
        pageCount={pageCount}
        marginPagesDisplayed={1}
        pageRangeDisplayed={0}
        onPageChange={handlePageClick}
        containerClassName={'pagination'}
        pageClassName={'page'}
        activeClassName={'active'}
      />
    </span>
  );
};

export default DisplayDictionary;
