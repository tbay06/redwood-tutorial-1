import { useMutation } from '@redwoodjs/web'
import { toast } from '@redwoodjs/web/toast'
import { Link, routes } from '@redwoodjs/router'

import { QUERY } from 'src/components/Patent/PatentsCell'

const DELETE_PATENT_MUTATION = gql`
  mutation DeletePatentMutation($id: Int!) {
    deletePatent(id: $id) {
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

const PatentsList = ({ patents }) => {
  const [deletePatent] = useMutation(DELETE_PATENT_MUTATION, {
    onCompleted: () => {
      toast.success('Patent deleted')
    },
    // This refetches the query on the list page. Read more about other ways to
    // update the cache over here:
    // https://www.apollographql.com/docs/react/data/mutations/#making-all-other-cache-updates
    refetchQueries: [{ query: QUERY }],
    awaitRefetchQueries: true,
  })

  const onDeleteClick = (id) => {
    if (confirm('Are you sure you want to delete patent ' + id + '?')) {
      deletePatent({ variables: { id } })
    }
  }

  return (
    <div className="rw-segment rw-table-wrapper-responsive">
      <table className="rw-table">
        <thead>
          <tr>
            <th>Id</th>
            <th>Drug id</th>
            <th>Patent num</th>
            <th>Filing date</th>
            <th>Date granted</th>
            <th>Expiration date</th>
            <th>Company name</th>
            <th>Created at</th>
            <th>&nbsp;</th>
          </tr>
        </thead>
        <tbody>
          {patents.map((patent) => (
            <tr key={patent.id}>
              <td>{truncate(patent.id)}</td>
              <td>{truncate(patent.drugId)}</td>
              <td>{truncate(patent.patentNum)}</td>
              <td>{timeTag(patent.filingDate)}</td>
              <td>{timeTag(patent.dateGranted)}</td>
              <td>{timeTag(patent.expirationDate)}</td>
              <td>{truncate(patent.companyName)}</td>
              <td>{timeTag(patent.createdAt)}</td>
              <td>
                <nav className="rw-table-actions">
                  <Link
                    to={routes.patent({ id: patent.id })}
                    title={'Show patent ' + patent.id + ' detail'}
                    className="rw-button rw-button-small"
                  >
                    Show
                  </Link>
                  <Link
                    to={routes.editPatent({ id: patent.id })}
                    title={'Edit patent ' + patent.id}
                    className="rw-button rw-button-small rw-button-blue"
                  >
                    Edit
                  </Link>
                  <a
                    href="#"
                    title={'Delete patent ' + patent.id}
                    className="rw-button rw-button-small rw-button-red"
                    onClick={() => onDeleteClick(patent.id)}
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

export default PatentsList
