import React from 'react';
import './addBook.scss';
import { RouteComponentProps } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { addBook } from '../../store/books/actions';
import { useForm } from 'react-hook-form';
import { selectTheme } from '../../store/theme/selectors';


interface Props {
    history: RouteComponentProps['history'];
}

interface IBookFormProps {
    link: string;
    cover: string;
    title: string;
    subtitle: string;
    authors: string[];
    description: string;
    price: number;
}

export const AddBook = ({ history }: Props): React.ReactElement => {
const dispatch = useDispatch();

const { darkMode } = useSelector(selectTheme);
//const { book, error, loaded } = useSelector(selectBooks);
//const { modalStatus } = useSelector(selectModal);

//const { id: bookId } = useParams<{ id: string }>();
const { register, handleSubmit } = useForm<IBookFormProps>();
const onSubmit = (data: IBookFormProps) => {
    dispatch(addBook(data, history));
}
// React.useEffect((): void => {
//     dispatch(fetchBook(bookId));
// }, [bookId, dispatch]);

// const handleCloseModal = (): void => {
//     dispatch(closeModal());
// };

// const handleOpenModal = (): void => {
//     dispatch(openModal());
// };


return (
    <>
    {/* <Modal>
        {modalStatus === ModalStatus.SUCCESS && <Success />}
        {modalStatus === ModalStatus.ERROR && <Error />}
        {modalStatus === ModalStatus.DEFAULT && (
        <>
            <h2>Do you want to add this book?</h2>
            <br />
            <button type="button" className="main__add" onClick={handleAddBook}>
            Yes
            </button>
            &ensp;
            <button type="button" onClick={handleCloseModal}>
            No
            </button>
        </>
        )}
    </Modal> */}

    <h1 className="main__title" id="ab">Add A Book</h1>
      <form onSubmit={handleSubmit(onSubmit)}>
        <label htmlFor="addBook__link">
          Book Link
          <input
            className={`${darkMode && 'dark-input'}`}
            type="text"
            name="link"
            id="bookLink"
            ref={register}
          />
        </label>
        <label htmlFor="addBook__cover">
          Book Cover
          <input
            className={`${darkMode && 'dark-input'}`}
            type="text"
            name="cover"
            id="bookCover"
            ref={register}
            
          />
        </label>
        <label htmlFor="addBook__title">
          Title
          <input
            className={`${darkMode && 'dark-input'}`}
            type="text"
            name="title"
            id="bookTitle"
            ref={register}
            required
            />
        </label>
        <label htmlFor="addBook__subtitle">
          Subtitle
          <input
            className={`${darkMode && 'dark-input'}`}
            type="text"
            name="subtitle"
            id="bookSubtitle"
            ref={register}
            />
        </label>
        <label htmlFor="addBook__authors">
          Author
          <input
            className={`${darkMode && 'dark-input'}`}
            type="text"
            name="authors"
            id="bookAuthor"
            ref={register}
            multiple
            />
        </label>
        <label htmlFor="addBook__description">
          Description
          <input
            className={`${darkMode && 'dark-input'}`}
            type="text"
            name="description"
            id="bookDescription"
            ref={register}
            />
        </label>
        <label htmlFor="addBook__price">
          Price
          <input
            className={`${darkMode && 'dark-input'}`}
            type="number"
            name="price"
            id="bookPrice"
            ref={register}
            />
        </label>
        <button type="submit">Save</button>
      </form>
    
    </>
);
};
