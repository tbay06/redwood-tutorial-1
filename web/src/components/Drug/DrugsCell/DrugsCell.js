import { Link, routes } from '@redwoodjs/router'

import Drugs from 'src/components/Drug/Drugs'

export const QUERY = gql`
  query FindDrugs {
    drugs {
      id
      medicinalIngredient
      brandName
      routeOfAdmin
      strengthPerUnit
      humanOrVet
      therapeuticClass
      dosageForm
      din
      createdAt
    }
  }
`

export const Loading = () => <div>Loading...</div>

export const Empty = () => {
  return (
    <div className="rw-text-center">
      {'No drugs yet. '}
      <Link to={routes.newDrug()} className="rw-link">
        {'Create one?'}
      </Link>
    </div>
  )
}

export const Failure = ({ error }) => (
  <div style={{ color: 'red' }}>Error: {error.message}</div>
)

export const Success = ({ drugs }) => {
  return <Drugs drugs={drugs} />
}
