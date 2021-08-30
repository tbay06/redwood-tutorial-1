import { db } from 'src/lib/db'
import { requireAuth } from 'src/lib/auth'

// Used when the environment variable REDWOOD_SECURE_SERVICES=1
export const beforeResolver = (rules) => {
  rules.add(requireAuth)
}

export const drugs = () => {
  return db.drug.findMany()
}

export const drug = ({ id }) => {
  return db.drug.findUnique({
    where: { id },
  })
}

export const createDrug = ({ input }) => {
  return db.drug.create({
    data: input,
  })
}

export const updateDrug = ({ id, input }) => {
  return db.drug.update({
    data: input,
    where: { id },
  })
}

export const deleteDrug = ({ id }) => {
  return db.drug.delete({
    where: { id },
  })
}

export const Drug = {
  Patent: (_obj, { root }) =>
    db.drug.findUnique({ where: { id: root.id } }).Patent(),
}
