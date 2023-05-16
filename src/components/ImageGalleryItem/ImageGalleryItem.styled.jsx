import styled from 'styled-components';

export const GalleryItem = styled.li`
  border-radius: 2px;
  box-shadow: ${p => p.theme.boxShadow};
`;

export const ImageGallery = styled.img`
  width: 100%;
  height: 260px;
  transition: transform 250ms cubic-bezier(0.4, 0, 0.2, 1);
  :hover {
    transform: scale(1.03);
    cursor: zoom-in;
  }
`;
