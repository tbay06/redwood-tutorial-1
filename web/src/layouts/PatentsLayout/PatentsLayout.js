import { Link, routes } from '@redwoodjs/router'
import { Toaster } from '@redwoodjs/web/toast'

const PatentsLayout = ({ children }) => {
  return (
    <div className="rw-scaffold">
      <Toaster />
      <header className="rw-header">
        <h1 className="rw-heading rw-heading-primary">
          <Link to={routes.patents()} className="rw-link">
            Patents
          </Link>
        </h1>
        <Link to={routes.newPatent()} className="rw-button rw-button-green">
          <div className="rw-button-icon">+</div> New Patent
        </Link>
      </header>
      <main className="rw-main">{children}</main>
    </div>
  )
}

export default PatentsLayout
