import { Input, Pagination } from 'antd';

import CardList from '../CardsList';
import Loader from '../Loader';

const tabSearch = (
  isLoaded,
  search,
  cards,
  genres,
  guestSession,
  totalPages,
  sevSearch,
  onChangeSearch,
  getData,
  movieService
) => {
  if (!isLoaded) {
    return <Loader />;
  }

  function getMovie(page) {
    if (sevSearch !== '' && sevSearch !== undefined) {
      movieService(sevSearch, page);
    } else {
      getData(page);
    }
  }

  return (
    <>
      <Input className="input-search" onChange={onChangeSearch} placeholder="Type to search..." value={search} />
      <CardList className="card-list" cards={cards} genres={genres} guestSession={guestSession} />
      <Pagination
        className="pagination"
        size="small"
        total={totalPages}
        defaultCurrent={1}
        showSizeChanger={false}
        hideOnSinglePage
        onChange={(page) => {
          getMovie(page);
        }}
      />
    </>
  );
};

export default tabSearch;
