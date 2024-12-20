import moment from 'moment'
import { formatPeriod } from '~/lib/config/profile'
import { Experience } from '@/config/profile'

export function getRange (period: Experience['period']): string {
  const rangeEnd = period.end ? formatPeriod(period.end) : 'Present'

  return `${formatPeriod(period.start)} - ${rangeEnd}`
}

export function getDuration (period: Experience['period']): string {
  const totalMonthDuration = (period.end || moment()).diff(period.start, 'months')

  if (totalMonthDuration < 1) {
    return '~1 month'
  }

  const durations = []
  const yearDuration = Math.floor(totalMonthDuration / 12)
  const monthDuration = totalMonthDuration % 12

  if (yearDuration) {
    durations.push(formatDuration(yearDuration, 'year'))
  }

  if (monthDuration) {
    durations.push(formatDuration(monthDuration, 'month'))
  }

  return durations.join(' ')
}

function formatDuration (count: number, unitOfTime: string) {
  if (count === 1) {
    return `${count} ${unitOfTime}`
  }

  return `${count} ${unitOfTime}s`
}
