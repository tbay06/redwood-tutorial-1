import { Link, routes } from '@redwoodjs/router'
import { Toaster } from '@redwoodjs/web/toast'

const DrugsLayout = ({ children }) => {
  return (
    <div className="rw-scaffold">
      <Toaster />
      <header className="rw-header">
        <h1 className="rw-heading rw-heading-primary">
          <Link to={routes.drugs()} className="rw-link">
            Drugs
          </Link>
        </h1>
        <Link to={routes.newDrug()} className="rw-button rw-button-green">
          <div className="rw-button-icon">+</div> New Drug
        </Link>
      </header>
      <main className="rw-main">{children}</main>
    </div>
  )
}

export default DrugsLayout
