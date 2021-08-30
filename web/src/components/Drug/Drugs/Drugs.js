import { useMutation } from '@redwoodjs/web'
import { toast } from '@redwoodjs/web/toast'
import { Link, routes } from '@redwoodjs/router'

import { QUERY } from 'src/components/Drug/DrugsCell'

const DELETE_DRUG_MUTATION = gql`
  mutation DeleteDrugMutation($id: String!) {
    deleteDrug(id: $id) {
      id
    }
  }
`

const MAX_STRING_LENGTH = 150

const truncate = (text) => {
  let output = text
  if (text && text.length > MAX_STRING_LENGTH) {
    output = output.substring(0, MAX_STRING_LENGTH) + '...'
  }
  return output
}

const jsonTruncate = (obj) => {
  return truncate(JSON.stringify(obj, null, 2))
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

const DrugsList = ({ drugs }) => {
  const [deleteDrug] = useMutation(DELETE_DRUG_MUTATION, {
    onCompleted: () => {
      toast.success('Drug deleted')
    },
    // This refetches the query on the list page. Read more about other ways to
    // update the cache over here:
    // https://www.apollographql.com/docs/react/data/mutations/#making-all-other-cache-updates
    refetchQueries: [{ query: QUERY }],
    awaitRefetchQueries: true,
  })

  const onDeleteClick = (id) => {
    if (confirm('Are you sure you want to delete drug ' + id + '?')) {
      deleteDrug({ variables: { id } })
    }
  }

  return (
    <div className="rw-segment rw-table-wrapper-responsive">
      <table className="rw-table">
        <thead>
          <tr>
            <th>Id</th>
            <th>Medicinal ingredient</th>
            <th>Brand name</th>
            <th>Route of admin</th>
            <th>Strength per unit</th>
            <th>Human or vet</th>
            <th>Therapeutic class</th>
            <th>Dosage form</th>
            <th>Din</th>
            <th>Created at</th>
            <th>&nbsp;</th>
          </tr>
        </thead>
        <tbody>
          {drugs.map((drug) => (
            <tr key={drug.id}>
              <td>{truncate(drug.id)}</td>
              <td>{truncate(drug.medicinalIngredient)}</td>
              <td>{truncate(drug.brandName)}</td>
              <td>{truncate(drug.routeOfAdmin)}</td>
              <td>{truncate(drug.strengthPerUnit)}</td>
              <td>{truncate(drug.humanOrVet)}</td>
              <td>{truncate(drug.therapeuticClass)}</td>
              <td>{truncate(drug.dosageForm)}</td>
              <td>{truncate(drug.din)}</td>
              <td>{timeTag(drug.createdAt)}</td>
              <td>
                <nav className="rw-table-actions">
                  <Link
                    to={routes.drug({ id: drug.id })}
                    title={'Show drug ' + drug.id + ' detail'}
                    className="rw-button rw-button-small"
                  >
                    Show
                  </Link>
                  <Link
                    to={routes.editDrug({ id: drug.id })}
                    title={'Edit drug ' + drug.id}
                    className="rw-button rw-button-small rw-button-blue"
                  >
                    Edit
                  </Link>
                  <a
                    href="#"
                    title={'Delete drug ' + drug.id}
                    className="rw-button rw-button-small rw-button-red"
                    onClick={() => onDeleteClick(drug.id)}
                  >
                    Delete
                  </a>
                </nav>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

export default DrugsList
