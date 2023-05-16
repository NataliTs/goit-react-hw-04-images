import { MoreBtn } from './Button.styled';

export const Button = ({ onClickBtn }) => {
  return (
    <MoreBtn type="button" onClick={onClickBtn}>
      Load more
    </MoreBtn>
  );
};
