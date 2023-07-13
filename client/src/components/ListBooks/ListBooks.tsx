import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, generatePath } from 'react-router-dom';
import { fetchBooks, setParameters } from '../../store/books/actions';
import { Book, Parameters } from '../../store/books/types';
import { routes } from '../../common/constants/routes';
import { Select } from '../../common/ui/Select/Select';
import { ItemBook } from './components/ItemBook/ItemBook';
import { Preloader } from '../Preloader/Preloader';
import { selectBooks } from '../../store/books/selectors';
import { selectMe } from '../../store/profile/selectors';
import { AppStateType } from '../../store/rootReducer';
import { selectTheme } from '../../store/theme/selectors';

const OPTIONS = [
  { value: 'price_asc', label: 'Price low to high' },
  { value: 'price_desc', label: 'Price high to low' },
];

export const ListBooks = (): React.ReactElement => {
  const dispatch = useDispatch();
  const {
    list: books, loaded, error, parameters,
  } = useSelector(selectBooks);

  const { intro } = useSelector(selectMe);
  const { darkMode } = useSelector(selectTheme);
  //useSelector((state: AppStateType) => state.profile);
  //console.log(intro);
  console.log(useSelector(selectMe));

  const [filters, setFilters] = React.useState<Partial<Parameters>>({
    sort: parameters.sort,
  });

  React.useEffect((): void => {
    if (parameters) {
      dispatch(setParameters(filters));
    }
    dispatch(fetchBooks());
  }, [dispatch, filters]);

  const changeFilterValue = React.useCallback(
    ({ target: { value } }: React.ChangeEvent<HTMLSelectElement>): void => {
      setFilters({
        sort: value,
      });
    },
    [setFilters],
  );

  return (
    <>
      <h1 className="main__title">Introduction</h1>
      <p className={`main__profile ${darkMode && 'dark-background'}`} id="introductionme">
        {`${intro}`}
      </p>
      <h1 className="main__title">Books that I've read</h1>
      {error && <h2 className="main__error">Failed to load books</h2>}
      <Select
        disabled={OPTIONS.length === 0}
        value={filters.sort}
        options={OPTIONS}
        placeholder="Sort"
        onChange={changeFilterValue}
      />
    <Link to={routes.addBook}>
        <button className="main__addBookBtn">Add A Book</button>
      </Link>

      {loaded ? (
        <div className="main__list">
          {books.map((book: Book) => (
            <Link to={generatePath(routes.book, { id: book.id })} key={book.id}>
              <ItemBook book={book} />
            </Link>
          ))}
        </div>
      ) : (
        <Preloader />
      )}
    </>
  );
};

