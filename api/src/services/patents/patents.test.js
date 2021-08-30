import {
  patents,
  patent,
  createPatent,
  updatePatent,
  deletePatent,
} from './patents'

describe('patents', () => {
  scenario('returns all patents', async (scenario) => {
    const result = await patents()

    expect(result.length).toEqual(Object.keys(scenario.patent).length)
  })

  scenario('returns a single patent', async (scenario) => {
    const result = await patent({ id: scenario.patent.one.id })

    expect(result).toEqual(scenario.patent.one)
  })

  scenario('creates a patent', async (scenario) => {
    const result = await createPatent({
      input: { drugId: scenario.patent.two.drugId, patentNum: 'String' },
    })

    expect(result.drugId).toEqual(scenario.patent.two.drugId)
    expect(result.patentNum).toEqual('String')
  })

  scenario('updates a patent', async (scenario) => {
    const original = await patent({ id: scenario.patent.one.id })
    const result = await updatePatent({
      id: original.id,
      input: { patentNum: 'String2' },
    })

    expect(result.patentNum).toEqual('String2')
  })

  scenario('deletes a patent', async (scenario) => {
    const original = await deletePatent({ id: scenario.patent.one.id })
    const result = await patent({ id: original.id })

    expect(result).toEqual(null)
  })
})
