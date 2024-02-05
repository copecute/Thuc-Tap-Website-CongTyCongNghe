import React from 'react';
import { useNavigate, Link } from 'react-router-dom';

function CustomLink({ to, children, ...prompt}) {
  const navigate = useNavigate();

  const handleLinkClick = (event) => {
    event.preventDefault();
    navigate(to);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <Link to={to} onClick={handleLinkClick} {...prompt}>
      {children}
    </Link>
  );
}

export default CustomLink;
