import React from 'react';
import { css } from '@emotion/react';
import { RingLoader } from 'react-spinners';

const Loader = ({ loading }) => {
    return (
      <div css={loaderStyles}>
        <RingLoader color={'#123abc'} loading={loading} size={50} />
        {/* You can customize the loader styles and props as needed */}
      </div>
    );
  };
  
  const loaderStyles = css`
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
  `;