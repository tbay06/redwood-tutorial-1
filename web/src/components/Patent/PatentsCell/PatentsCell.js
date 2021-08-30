import { Link, routes } from '@redwoodjs/router'

import Patents from 'src/components/Patent/Patents'

export const QUERY = gql`
  query FindPatents {
    patents {
      id
      drugId
      patentNum
      filingDate
      dateGranted
      expirationDate
      companyName
      createdAt
    }
  }
`

export const Loading = () => <div>Loading...</div>

export const Empty = () => {
  return (
    <div className="rw-text-center">
      {'No patents yet. '}
      <Link to={routes.newPatent()} className="rw-link">
        {'Create one?'}
      </Link>
    </div>
  )
}

export const Failure = ({ error }) => (
  <div style={{ color: 'red' }}>Error: {error.message}</div>
)

export const Success = ({ patents }) => {
  return <Patents patents={patents} />
}
