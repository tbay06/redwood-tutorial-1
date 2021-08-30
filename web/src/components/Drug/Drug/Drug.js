import { useMutation } from '@redwoodjs/web'
import { toast } from '@redwoodjs/web/toast'
import { Link, routes, navigate } from '@redwoodjs/router'

const DELETE_DRUG_MUTATION = gql`
  mutation DeleteDrugMutation($id: String!) {
    deleteDrug(id: $id) {
      id
    }
  }
`

const jsonDisplay = (obj) => {
  return (
    <pre>
      <code>{JSON.stringify(obj, null, 2)}</code>
    </pre>
  )
}

const timeTag = (datetime) => {
  return (
    <time dateTime={datetime} title={datetime}>
      {new Date(datetime).toUTCString()}
    </time>
  )
}

const checkboxInputTag = (checked) => {
  return <input type="checkbox" checked={checked} disabled />
}

const Drug = ({ drug }) => {
  const [deleteDrug] = useMutation(DELETE_DRUG_MUTATION, {
    onCompleted: () => {
      toast.success('Drug deleted')
      navigate(routes.drugs())
    },
  })

  const onDeleteClick = (id) => {
    if (confirm('Are you sure you want to delete drug ' + id + '?')) {
      deleteDrug({ variables: { id } })
    }
  }

  return (
    <>
      <div className="rw-segment">
        <header className="rw-segment-header">
          <h2 className="rw-heading rw-heading-secondary">
            Drug {drug.id} Detail
          </h2>
        </header>
        <table className="rw-table">
          <tbody>
            <tr>
              <th>Id</th>
              <td>{drug.id}</td>
            </tr>
            <tr>
              <th>Medicinal ingredient</th>
              <td>{drug.medicinalIngredient}</td>
            </tr>
            <tr>
              <th>Brand name</th>
              <td>{drug.brandName}</td>
            </tr>
            <tr>
              <th>Route of admin</th>
              <td>{drug.routeOfAdmin}</td>
            </tr>
            <tr>
              <th>Strength per unit</th>
              <td>{drug.strengthPerUnit}</td>
            </tr>
            <tr>
              <th>Human or vet</th>
              <td>{drug.humanOrVet}</td>
            </tr>
            <tr>
              <th>Therapeutic class</th>
              <td>{drug.therapeuticClass}</td>
            </tr>
            <tr>
              <th>Dosage form</th>
              <td>{drug.dosageForm}</td>
            </tr>
            <tr>
              <th>Din</th>
              <td>{drug.din}</td>
            </tr>
            <tr>
              <th>Created at</th>
              <td>{timeTag(drug.createdAt)}</td>
            </tr>
          </tbody>
        </table>
      </div>
      <nav className="rw-button-group">
        <Link
          to={routes.editDrug({ id: drug.id })}
          className="rw-button rw-button-blue"
        >
          Edit
        </Link>
        <a
          href="#"
          className="rw-button rw-button-red"
          onClick={() => onDeleteClick(drug.id)}
        >
          Delete
        </a>
      </nav>
    </>
  )
}

export default Drug
