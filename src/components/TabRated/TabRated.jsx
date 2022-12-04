import { Pagination } from 'antd';

import CardList from '../CardsList';
import Loader from '../Loader';

const tabRated = (isLoadedRate, myRateMovie, genres, guestSession, rateTotalPages, ratePageSize, getData) => {
  if (!isLoadedRate) {
    return <Loader />;
  }

  return (
    <>
      <CardList className="card-list" cards={myRateMovie} genres={genres} guestSession={guestSession} />
      <Pagination
        className="pagination"
        size="small"
        total={rateTotalPages}
        defaultPageSize={ratePageSize}
        defaultCurrent={1}
        showSizeChanger={false}
        hideOnSinglePage
        onChange={() => {
          getData();
        }}
      />
    </>
  );
};

export default tabRated;
