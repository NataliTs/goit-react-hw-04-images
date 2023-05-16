import PropTypes from 'prop-types';
import { Formik } from 'formik';
import { AiOutlineSearch } from 'react-icons/ai';
import { Button, Header, Input, SearchForm } from './Searchbar.styled';

export const Searchbar = ({ onFormSubmit }) => {
  return (
    <Header>
      <Formik
        initialValues={{
          search: '',
        }}
        onSubmit={(values, actions) => {
          onFormSubmit(values.search.trim());
          actions.resetForm();
        }}
      >
        <SearchForm>
          <Button type="submit">
            <span>
              <AiOutlineSearch size="26" />
            </span>
          </Button>
          <Input
            name="search"
            className="input"
            autocomplet="off"
            placeholder="Search images and photos"
          />
        </SearchForm>
      </Formik>
    </Header>
  );
};

Searchbar.propTypes = {
  onFormSubmit: PropTypes.func.isRequired,
};
