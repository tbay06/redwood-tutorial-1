import Patent from 'src/components/Patent/Patent'

export const QUERY = gql`
  query FindPatentById($id: Int!) {
    patent: patent(id: $id) {
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

export const Empty = () => <div>Patent not found</div>

export const Failure = ({ error }) => (
  <div style={{ color: 'red' }}>Error: {error.message}</div>
)

export const Success = ({ patent }) => {
  return <Patent patent={patent} />
}
