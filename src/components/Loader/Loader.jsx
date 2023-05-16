import BeatLoader from 'react-spinners/BeatLoader';
import { Spiner } from './Loader.styled';

export const Loader = () => {
  return (
    <Spiner>
      <BeatLoader color="#36a1d6" size={20} />;
    </Spiner>
  );
};
