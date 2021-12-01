import React from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';
import PropTypes from 'prop-types';

export const NextLink = ({ href, exact, children, ...props }) => {
  const { pathname } = useRouter();

  const isActive = exact ? pathname === href : pathname.startsWith(href);

  if (isActive) {
    props.className += ' sc';
  }

  return (
    <Link href={href}>
      <a {...props} style={inline.a}>
        {children}
      </a>
    </Link>
  );
};

const inline = {
  a: {
    textDecoration: 'none',
  },
};

NextLink.propTypes = {
  href: PropTypes.string.isRequired,
  exact: PropTypes.bool,
};

NextLink.defaultProps = {
  exact: false,
};
