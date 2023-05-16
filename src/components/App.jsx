import React, { Component } from 'react';
import { GlobalStyle } from './GlobalStyle';
import { Layout } from './Layout/Layout';
import { Searchbar } from './Searchbar/Searchbar';
import { ImageGallery } from './ImageGallery/ImageGallery';
import { getPhotos } from '../services/Api';
import { Button } from './Button/Button';
import { Loader } from './Loader/Loader';
import { Modal } from './Modal/Modal';

export class App extends Component {
  state = {
    search: '',
    page: 1,
    images: [],
    isLoading: false,
    error: null,
    showModal: false,
    modalData: null,
  };

  componentDidUpdate(_, prevState) {
    const { search, page, images } = this.state;

    if (page !== prevState.page || search !== prevState.search) {
      this.setState({ isLoading: true });
      getPhotos(search, page)
        .then(data => this.setState({ images: [...images, ...data.hits] }))
        .catch(error => alert(error.message))
        .finally(() => this.setState({ isLoading: false }));
    }
  }

  changePage = () => {
    this.setState(prev => ({ page: prev.page + 1 }));
  };

  handleSubmitSearchbar = search => {
    this.setState({ search, images: [], page: 1 });
  };

  setModalData = modalData => {
    this.setState({ modalData, showModal: true });
  };

  handleModalClose = () => {
    this.setState({ showModal: false });
  };

  render() {
    const { images, isLoading, showModal, modalData } = this.state;
    return (
      <Layout>
        <GlobalStyle />
        <Searchbar onFormSubmit={this.handleSubmitSearchbar} />

        {images.length > 0 && (
          <ImageGallery images={images} onImageClick={this.setModalData} />
        )}
        {isLoading && <Loader />}
        {images.length > 0 && <Button onClickBtn={this.changePage} />}
        {showModal && (
          <Modal modalData={modalData} onModalClose={this.handleModalClose} />
        )}
      </Layout>
    );
  }
}
