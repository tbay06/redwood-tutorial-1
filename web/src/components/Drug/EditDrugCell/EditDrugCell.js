import { useMutation } from '@redwoodjs/web'
import { toast } from '@redwoodjs/web/toast'
import { navigate, routes } from '@redwoodjs/router'

import DrugForm from 'src/components/Drug/DrugForm'

export const QUERY = gql`
  query EditDrugById($id: String!) {
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
const UPDATE_DRUG_MUTATION = gql`
  mutation UpdateDrugMutation($id: String!, $input: UpdateDrugInput!) {
    updateDrug(id: $id, input: $input) {
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

export const Failure = ({ error }) => (
  <div style={{ color: 'red' }}>Error: {error.message}</div>
)

export const Success = ({ drug }) => {
  const [updateDrug, { loading, error }] = useMutation(UPDATE_DRUG_MUTATION, {
    onCompleted: () => {
      toast.success('Drug updated')
      navigate(routes.drugs())
    },
  })

  const onSave = (input, id) => {
    updateDrug({ variables: { id, input } })
  }

  return (
    <div className="rw-segment">
      <header className="rw-segment-header">
        <h2 className="rw-heading rw-heading-secondary">Edit Drug {drug.id}</h2>
      </header>
      <div className="rw-segment-main">
        <DrugForm drug={drug} onSave={onSave} error={error} loading={loading} />
      </div>
    </div>
  )
}
