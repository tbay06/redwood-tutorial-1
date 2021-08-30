import { useMutation } from '@redwoodjs/web'
import { toast } from '@redwoodjs/web/toast'
import { Link, routes, navigate } from '@redwoodjs/router'

const DELETE_PATENT_MUTATION = gql`
  mutation DeletePatentMutation($id: Int!) {
    deletePatent(id: $id) {
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

const Patent = ({ patent }) => {
  const [deletePatent] = useMutation(DELETE_PATENT_MUTATION, {
    onCompleted: () => {
      toast.success('Patent deleted')
      navigate(routes.patents())
    },
  })

  const onDeleteClick = (id) => {
    if (confirm('Are you sure you want to delete patent ' + id + '?')) {
      deletePatent({ variables: { id } })
    }
  }

  return (
    <>
      <div className="rw-segment">
        <header className="rw-segment-header">
          <h2 className="rw-heading rw-heading-secondary">
            Patent {patent.id} Detail
          </h2>
        </header>
        <table className="rw-table">
          <tbody>
            <tr>
              <th>Id</th>
              <td>{patent.id}</td>
            </tr>
            <tr>
              <th>Drug id</th>
              <td>{patent.drugId}</td>
            </tr>
            <tr>
              <th>Patent num</th>
              <td>{patent.patentNum}</td>
            </tr>
            <tr>
              <th>Filing date</th>
              <td>{timeTag(patent.filingDate)}</td>
            </tr>
            <tr>
              <th>Date granted</th>
              <td>{timeTag(patent.dateGranted)}</td>
            </tr>
            <tr>
              <th>Expiration date</th>
              <td>{timeTag(patent.expirationDate)}</td>
            </tr>
            <tr>
              <th>Company name</th>
              <td>{patent.companyName}</td>
            </tr>
            <tr>
              <th>Created at</th>
              <td>{timeTag(patent.createdAt)}</td>
            </tr>
          </tbody>
        </table>
      </div>
      <nav className="rw-button-group">
        <Link
          to={routes.editPatent({ id: patent.id })}
          className="rw-button rw-button-blue"
        >
          Edit
        </Link>
        <a
          href="#"
          className="rw-button rw-button-red"
          onClick={() => onDeleteClick(patent.id)}
        >
          Delete
        </a>
      </nav>
    </>
  )
}

export default Patent
