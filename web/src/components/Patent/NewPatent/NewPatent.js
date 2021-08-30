import { useMutation } from '@redwoodjs/web'
import { toast } from '@redwoodjs/web/toast'
import { navigate, routes } from '@redwoodjs/router'
import PatentForm from 'src/components/Patent/PatentForm'

const CREATE_PATENT_MUTATION = gql`
  mutation CreatePatentMutation($input: CreatePatentInput!) {
    createPatent(input: $input) {
      id
    }
  }
`

const NewPatent = () => {
  const [createPatent, { loading, error }] = useMutation(
    CREATE_PATENT_MUTATION,
    {
      onCompleted: () => {
        toast.success('Patent created')
        navigate(routes.patents())
      },
    }
  )

  const onSave = (input) => {
    createPatent({ variables: { input } })
  }

  return (
    <div className="rw-segment">
      <header className="rw-segment-header">
        <h2 className="rw-heading rw-heading-secondary">New Patent</h2>
      </header>
      <div className="rw-segment-main">
        <PatentForm onSave={onSave} loading={loading} error={error} />
      </div>
    </div>
  )
}

export default NewPatent
