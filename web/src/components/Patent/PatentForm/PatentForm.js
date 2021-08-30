import {
  Form,
  FormError,
  FieldError,
  Label,
  TextField,
  DatetimeLocalField,
  Submit,
} from '@redwoodjs/forms'

const formatDatetime = (value) => {
  if (value) {
    return value.replace(/:\d{2}\.\d{3}\w/, '')
  }
}

const PatentForm = (props) => {
  const onSubmit = (data) => {
    props.onSave(data, props?.patent?.id)
  }

  return (
    <div className="rw-form-wrapper">
      <Form onSubmit={onSubmit} error={props.error}>
        <FormError
          error={props.error}
          wrapperClassName="rw-form-error-wrapper"
          titleClassName="rw-form-error-title"
          listClassName="rw-form-error-list"
        />

        <Label
          name="drugId"
          className="rw-label"
          errorClassName="rw-label rw-label-error"
        >
          Drug id
        </Label>
        <TextField
          name="drugId"
          defaultValue={props.patent?.drugId}
          className="rw-input"
          errorClassName="rw-input rw-input-error"
          validation={{ required: true }}
        />

        <FieldError name="drugId" className="rw-field-error" />

        <Label
          name="patentNum"
          className="rw-label"
          errorClassName="rw-label rw-label-error"
        >
          Patent num
        </Label>
        <TextField
          name="patentNum"
          defaultValue={props.patent?.patentNum}
          className="rw-input"
          errorClassName="rw-input rw-input-error"
          validation={{ required: true }}
        />

        <FieldError name="patentNum" className="rw-field-error" />

        <Label
          name="filingDate"
          className="rw-label"
          errorClassName="rw-label rw-label-error"
        >
          Filing date
        </Label>
        <DatetimeLocalField
          name="filingDate"
          defaultValue={formatDatetime(props.patent?.filingDate)}
          className="rw-input"
          errorClassName="rw-input rw-input-error"
          validation={{ required: true }}
        />

        <FieldError name="filingDate" className="rw-field-error" />

        <Label
          name="dateGranted"
          className="rw-label"
          errorClassName="rw-label rw-label-error"
        >
          Date granted
        </Label>
        <DatetimeLocalField
          name="dateGranted"
          defaultValue={formatDatetime(props.patent?.dateGranted)}
          className="rw-input"
          errorClassName="rw-input rw-input-error"
          validation={{ required: true }}
        />

        <FieldError name="dateGranted" className="rw-field-error" />

        <Label
          name="expirationDate"
          className="rw-label"
          errorClassName="rw-label rw-label-error"
        >
          Expiration date
        </Label>
        <DatetimeLocalField
          name="expirationDate"
          defaultValue={formatDatetime(props.patent?.expirationDate)}
          className="rw-input"
          errorClassName="rw-input rw-input-error"
          validation={{ required: true }}
        />

        <FieldError name="expirationDate" className="rw-field-error" />

        <Label
          name="companyName"
          className="rw-label"
          errorClassName="rw-label rw-label-error"
        >
          Company name
        </Label>
        <TextField
          name="companyName"
          defaultValue={props.patent?.companyName}
          className="rw-input"
          errorClassName="rw-input rw-input-error"
          validation={{ required: true }}
        />

        <FieldError name="companyName" className="rw-field-error" />

        <div className="rw-button-group">
          <Submit disabled={props.loading} className="rw-button rw-button-blue">
            Save
          </Submit>
        </div>
      </Form>
    </div>
  )
}

export default PatentForm
