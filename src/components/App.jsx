import React, { useEffect, useState } from 'react';
import { GlobalStyle } from './GlobalStyle';
import { Layout } from './Layout/Layout';
import { Searchbar } from './Searchbar/Searchbar';
import { ImageGallery } from './ImageGallery/ImageGallery';
import { getPhotos } from '../services/Api';
import { Button } from './Button/Button';
import { Loader } from './Loader/Loader';
import { Modal } from './Modal/Modal';

export const App = () => {
  const [search, setSearch] = useState('');
  const [page, setPage] = useState(1);
  const [images, setImages] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const [showModal, setShowModal] = useState(false);
  const [modalData, setModalData] = useState(null);

  useEffect(() => {
    if (search === '') return;
    const getPhotosSearch = async search => {
      setIsLoading(true);
      setError(null);
      try {
        const data = await getPhotos(search, page);
        setImages(prevState => [...prevState, ...data.hits]);
      } catch (error) {
        alert(error.message);
      } finally {
        setIsLoading(false);
      }
    };
    getPhotosSearch(search);
  }, [page, search]);

  // useEffect(() => {
  //   if (search === '') return;
  //   setIsLoading(true);
  //   setError(null);
  //   getPhotos(search, page)
  //     .then(data => setImages(prevState => [...prevState, ...data.hits]))
  //     .catch(error => alert(error.message))
  //     .finally(() => setIsLoading(false));
  // }, [page, search]);

  const changePage = () => {
    setPage(prevPage => prevPage + 1);
  };

  const handleSubmitSearchbar = search => {
    setSearch(search);
    setImages([]);
    setPage(1);
  };

  const handleModalData = modalData => {
    setModalData(modalData);
    setShowModal(true);
  };

  return (
    <Layout>
      <GlobalStyle />
      <Searchbar onFormSubmit={handleSubmitSearchbar} />

      {images.length > 0 && (
        <ImageGallery images={images} onImageClick={handleModalData} />
      )}
      {isLoading && <Loader />}
      {images.length > 0 && <Button onClickBtn={changePage} />}
      {showModal && (
        <Modal modalData={modalData} onModalClose={() => setShowModal(false)} />
      )}
    </Layout>
  );
};
