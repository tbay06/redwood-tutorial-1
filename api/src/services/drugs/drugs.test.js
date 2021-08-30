import { drugs, drug, createDrug, updateDrug, deleteDrug } from './drugs'

describe('drugs', () => {
  scenario('returns all drugs', async (scenario) => {
    const result = await drugs()

    expect(result.length).toEqual(Object.keys(scenario.drug).length)
  })

  scenario('returns a single drug', async (scenario) => {
    const result = await drug({ id: scenario.drug.one.id })

    expect(result).toEqual(scenario.drug.one)
  })

  scenario('creates a drug', async () => {
    const result = await createDrug({
      input: { id: 'String' },
    })

    expect(result.id).toEqual('String')
  })

  scenario('updates a drug', async (scenario) => {
    const original = await drug({ id: scenario.drug.one.id })
    const result = await updateDrug({
      id: original.id,
      input: { id: 'String2' },
    })

    expect(result.id).toEqual('String2')
  })

  scenario('deletes a drug', async (scenario) => {
    const original = await deleteDrug({ id: scenario.drug.one.id })
    const result = await drug({ id: original.id })

    expect(result).toEqual(null)
  })
})
