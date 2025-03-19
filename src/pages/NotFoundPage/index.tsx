import React, { memo, useCallback } from 'react';
import { useNavigate } from 'react-router-dom';

import './style.scss';


const NotFoundPage: React.FC = () => {
  const navigate = useNavigate();

  const onGoBackHomeClick = useCallback(() => navigate('/'), [navigate]);

  return (
      <div className="not_found_page">
        <div className="not_found_page_content">
            <button className='not_found_page_content_back_button' onClick={onGoBackHomeClick}>
                    Go Back
            </button>
            </div>
      </div>
  );
};
export default memo(NotFoundPage);
