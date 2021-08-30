import Drug from 'src/components/Drug/Drug'

export const QUERY = gql`
  query FindDrugById($id: String!) {
    drug: drug(id: $id) {
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

export const Empty = () => <div>Drug not found</div>

export const Failure = ({ error }) => (
  <div style={{ color: 'red' }}>Error: {error.message}</div>
)

export const Success = ({ drug }) => {
  return <Drug drug={drug} />
}
