import {
  Form,
  FormError,
  FieldError,
  Label,
  TextField,
  Submit,
} from '@redwoodjs/forms'

const formatDatetime = (value) => {
  if (value) {
    return value.replace(/:\d{2}\.\d{3}\w/, '')
  }
}

const DrugForm = (props) => {
  const onSubmit = (data) => {
    props.onSave(data, props?.drug?.id)
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
          name="medicinalIngredient"
          className="rw-label"
          errorClassName="rw-label rw-label-error"
        >
          Medicinal ingredient
        </Label>
        <TextField
          name="medicinalIngredient"
          defaultValue={props.drug?.medicinalIngredient}
          className="rw-input"
          errorClassName="rw-input rw-input-error"
          validation={{ required: true }}
        />

        <FieldError name="medicinalIngredient" className="rw-field-error" />

        <Label
          name="brandName"
          className="rw-label"
          errorClassName="rw-label rw-label-error"
        >
          Brand name
        </Label>
        <TextField
          name="brandName"
          defaultValue={props.drug?.brandName}
          className="rw-input"
          errorClassName="rw-input rw-input-error"
          validation={{ required: true }}
        />

        <FieldError name="brandName" className="rw-field-error" />

        <Label
          name="routeOfAdmin"
          className="rw-label"
          errorClassName="rw-label rw-label-error"
        >
          Route of admin
        </Label>
        <TextField
          name="routeOfAdmin"
          defaultValue={props.drug?.routeOfAdmin}
          className="rw-input"
          errorClassName="rw-input rw-input-error"
          validation={{ required: true }}
        />

        <FieldError name="routeOfAdmin" className="rw-field-error" />

        <Label
          name="strengthPerUnit"
          className="rw-label"
          errorClassName="rw-label rw-label-error"
        >
          Strength per unit
        </Label>
        <TextField
          name="strengthPerUnit"
          defaultValue={props.drug?.strengthPerUnit}
          className="rw-input"
          errorClassName="rw-input rw-input-error"
          validation={{ required: true }}
        />

        <FieldError name="strengthPerUnit" className="rw-field-error" />

        <Label
          name="humanOrVet"
          className="rw-label"
          errorClassName="rw-label rw-label-error"
        >
          Human or vet
        </Label>
        <TextField
          name="humanOrVet"
          defaultValue={props.drug?.humanOrVet}
          className="rw-input"
          errorClassName="rw-input rw-input-error"
          validation={{ required: true }}
        />

        <FieldError name="humanOrVet" className="rw-field-error" />

        <Label
          name="therapeuticClass"
          className="rw-label"
          errorClassName="rw-label rw-label-error"
        >
          Therapeutic class
        </Label>
        <TextField
          name="therapeuticClass"
          defaultValue={props.drug?.therapeuticClass}
          className="rw-input"
          errorClassName="rw-input rw-input-error"
          validation={{ required: true }}
        />

        <FieldError name="therapeuticClass" className="rw-field-error" />

        <Label
          name="dosageForm"
          className="rw-label"
          errorClassName="rw-label rw-label-error"
        >
          Dosage form
        </Label>
        <TextField
          name="dosageForm"
          defaultValue={props.drug?.dosageForm}
          className="rw-input"
          errorClassName="rw-input rw-input-error"
          validation={{ required: true }}
        />

        <FieldError name="dosageForm" className="rw-field-error" />

        <Label
          name="din"
          className="rw-label"
          errorClassName="rw-label rw-label-error"
        >
          Din
        </Label>
        <TextField
          name="din"
          defaultValue={props.drug?.din}
          className="rw-input"
          errorClassName="rw-input rw-input-error"
          validation={{ required: true }}
        />

        <FieldError name="din" className="rw-field-error" />

        <div className="rw-button-group">
          <Submit disabled={props.loading} className="rw-button rw-button-blue">
            Save
          </Submit>
        </div>
      </Form>
    </div>
  )
}

export default DrugForm
