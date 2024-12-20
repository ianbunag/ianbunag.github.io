import { describe, it, expect } from 'vitest'
import moment, { Moment } from 'moment'
import { createPeriod } from '../../../lib/config/profile'
import { getDuration } from '../period'

describe('getDuration', () => {
  it('should get duration until now', () => {
    expect(getDuration({
      start: moment().subtract(2, 'months'),
    })).toEqual('2 months')
    expect(getDuration({
      start: moment().subtract(27, 'days'),
    })).toEqual('~1 month')
  })

  it.each<[string, Moment, Moment]>([
    ['~1 month', moment('January 1, 2023'), moment('January 31, 2023')],
    ['1 month', createPeriod(2023, 'January'), createPeriod(2023, 'February')],
    ['2 months', createPeriod(2023, 'January'), createPeriod(2023, 'March')],
    ['3 months', createPeriod(2023, 'January'), createPeriod(2023, 'April')],
    ['4 months', createPeriod(2023, 'January'), createPeriod(2023, 'May')],
    ['1 year', createPeriod(2023, 'January'), createPeriod(2024, 'January')],
    ['1 year 1 month', createPeriod(2023, 'January'), createPeriod(2024, 'February')],
    ['1 year 5 months', createPeriod(2023, 'January'), createPeriod(2024, 'June')],
    ['1 year 6 months', createPeriod(2023, 'January'), createPeriod(2024, 'July')],
    ['1 year 7 months', createPeriod(2023, 'January'), createPeriod(2024, 'August')],
    ['1 year 8 months', createPeriod(2023, 'January'), createPeriod(2024, 'September')],
    ['2 years', moment('January 1, 2023'), moment('January 31, 2025')],
    ['2 years 1 month', createPeriod(2023, 'January'), createPeriod(2025, 'February')],
    ['2 years 9 months', createPeriod(2023, 'January'), createPeriod(2025, 'October')],
    ['2 years 10 months', createPeriod(2023, 'January'), createPeriod(2025, 'November')],
    ['2 years 11 months', createPeriod(2023, 'January'), createPeriod(2025, 'December')],
  ])('should get %s duration', (result, start, end) => {
    expect(getDuration({ start, end })).toEqual(result)
  })
})
