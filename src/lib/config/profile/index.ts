import moment, { Moment } from 'moment'

type Month = 'January' | 'February' | 'March' | 'April' | 'May' | 'June' | 'July' | 'August' | 'September' | 'October' | 'November' | 'December'

export function createPeriod (year: number, month: Month): Moment {
  return moment(`${month} 01, ${year}`).startOf('day')
}

export function formatPeriod (period: Moment | 'Present'): string {
  if (period === 'Present') {
    return period
  }

  return period.format('MMMM YYYY')
}
