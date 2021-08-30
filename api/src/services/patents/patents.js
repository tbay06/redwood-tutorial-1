import { db } from 'src/lib/db'
import { requireAuth } from 'src/lib/auth'

// Used when the environment variable REDWOOD_SECURE_SERVICES=1
export const beforeResolver = (rules) => {
  rules.add(requireAuth)
}

export const patents = () => {
  return db.patent.findMany()
}

export const patent = ({ id }) => {
  return db.patent.findUnique({
    where: { id },
  })
}

export const createPatent = ({ input }) => {
  return db.patent.create({
    data: input,
  })
}

export const updatePatent = ({ id, input }) => {
  return db.patent.update({
    data: input,
    where: { id },
  })
}

export const deletePatent = ({ id }) => {
  return db.patent.delete({
    where: { id },
  })
}

export const Patent = {
  Drug: (_obj, { root }) =>
    db.patent.findUnique({ where: { id: root.id } }).Drug(),
}
