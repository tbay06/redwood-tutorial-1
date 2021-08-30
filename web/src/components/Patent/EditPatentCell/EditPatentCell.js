import { useMutation } from '@redwoodjs/web'
import { toast } from '@redwoodjs/web/toast'
import { navigate, routes } from '@redwoodjs/router'

import PatentForm from 'src/components/Patent/PatentForm'

export const QUERY = gql`
  query EditPatentById($id: Int!) {
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
const UPDATE_PATENT_MUTATION = gql`
  mutation UpdatePatentMutation($id: Int!, $input: UpdatePatentInput!) {
    updatePatent(id: $id, input: $input) {
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

export const Failure = ({ error }) => (
  <div style={{ color: 'red' }}>Error: {error.message}</div>
)

export const Success = ({ patent }) => {
  const [updatePatent, { loading, error }] = useMutation(
    UPDATE_PATENT_MUTATION,
    {
      onCompleted: () => {
        toast.success('Patent updated')
        navigate(routes.patents())
      },
    }
  )

  const onSave = (input, id) => {
    updatePatent({ variables: { id, input } })
  }

  return (
    <div className="rw-segment">
      <header className="rw-segment-header">
        <h2 className="rw-heading rw-heading-secondary">
          Edit Patent {patent.id}
        </h2>
      </header>
      <div className="rw-segment-main">
        <PatentForm
          patent={patent}
          onSave={onSave}
          error={error}
          loading={loading}
        />
      </div>
    </div>
  )
}
