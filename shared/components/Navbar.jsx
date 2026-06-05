import React from 'react'

/**
 * Reusable Navbar component.
 * @param {{ links: Array<{ to: string, label: string }>, LinkComponent: React.ComponentType, style?: object }} props
 * LinkComponent should be the router's Link (e.g. from react-router-dom).
 */
function Navbar({ links = [], LinkComponent = 'a', style = {} }) {
  return (
    <nav style={{ textAlign: 'center', ...style }}>
      {links.map(({ to, label }) => (
        <LinkComponent key={to} to={to} href={to} style={{ marginRight: '12px' }}>
          {label}
        </LinkComponent>
      ))}
    </nav>
  )
}

export default Navbar
