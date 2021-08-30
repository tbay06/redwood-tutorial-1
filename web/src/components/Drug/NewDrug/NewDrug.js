import { useMutation } from '@redwoodjs/web'
import { toast } from '@redwoodjs/web/toast'
import { navigate, routes } from '@redwoodjs/router'
import DrugForm from 'src/components/Drug/DrugForm'

const CREATE_DRUG_MUTATION = gql`
  mutation CreateDrugMutation($input: CreateDrugInput!) {
    createDrug(input: $input) {
      id
    }
  }
`

const NewDrug = () => {
  const [createDrug, { loading, error }] = useMutation(CREATE_DRUG_MUTATION, {
    onCompleted: () => {
      toast.success('Drug created')
      navigate(routes.drugs())
    },
  })

  const onSave = (input) => {
    createDrug({ variables: { input } })
  }

  return (
    <div className="rw-segment">
      <header className="rw-segment-header">
        <h2 className="rw-heading rw-heading-secondary">New Drug</h2>
      </header>
      <div className="rw-segment-main">
        <DrugForm onSave={onSave} loading={loading} error={error} />
      </div>
    </div>
  )
}

export default NewDrug
