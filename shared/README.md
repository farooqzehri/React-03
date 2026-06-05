# Shared Utilities

Reusable code extracted from duplicated patterns across projects.

## Hooks

### `useFetch(url)`
Generic data-fetching hook that manages loading, error, and data states.

```jsx
import useFetch from '../../shared/hooks/useFetch'

const [loading, error, data] = useFetch('https://api.example.com/items')
```

## Components

### `<Navbar links={[...]} style={{}} />`
Configurable navigation bar. Pass an array of `{ to, label }` objects.

```jsx
import SharedNavbar from '../../shared/components/Navbar'

const links = [
  { to: '/', label: 'Home' },
  { to: '/about', label: 'About' },
]

<SharedNavbar links={links} />
```

### `<LoadingState loading error>{children}</LoadingState>`
Conditionally renders loading/error messages or children based on fetch state.

```jsx
import LoadingState from '../../shared/components/LoadingState'

<LoadingState loading={loading} error={error} loadingMessage="Please wait..." errorMessage="Oops!">
  {/* rendered when not loading and no error */}
</LoadingState>
```

## Data

### `customers`
Shared mock customer data array used across practice projects.

```jsx
import customers from '../../shared/data/customers'
```

## Config

### `vite.config.js` / `eslint.config.js`
Canonical configuration files. Individual projects can reference these as the single source of truth.
