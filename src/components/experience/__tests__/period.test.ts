import { describe, it, expect } from 'vitest'
import moment from 'moment'
import { getDuration } from '../period'

describe('getDuration', () => {
  it('should get duration until now', () => {
    expect(getDuration({
      start: moment().subtract(2, 'months')
        .format('MMMM DD YYYY'),
    })).toEqual('2 months')
    expect(getDuration({
      start: moment().subtract(27, 'days')
        .format('MMMM DD YYYY'),
    })).toEqual('~1 month')
  })

  it.each<[string, string, string]>([
    ['~1 month', 'January 2023', 'January 31, 2023'],
    ['1 month', 'January 2023', 'February 2023'],
    ['2 months', 'January 2023', 'March 2023'],
    ['3 months', 'January 2023', 'April 2023'],
    ['4 months', 'January 2023', 'May 2023'],
    ['1 year', 'January 2023', 'January 2024'],
    ['1 year 1 month', 'January 2023', 'February 2024'],
    ['1 year 5 months', 'January 2023', 'June 2024'],
    ['1 year 6 months', 'January 2023', 'July 2024'],
    ['1 year 7 months', 'January 2023', 'August 2024'],
    ['1 year 8 months', 'January 2023', 'September 2024'],
    ['2 years', 'January 2023', 'January 31, 2025'],
    ['2 years 1 month', 'January 2023', 'February 2025'],
    ['2 years 9 months', 'January 2023', 'October 2025'],
    ['2 years 10 months', 'January 2023', 'November 2025'],
    ['2 years 11 months', 'January 2023', 'December 2025'],
  ])('should get %s duration', (result, start, end) => {
    expect(getDuration({ start, end })).toEqual(result)
  })
})
