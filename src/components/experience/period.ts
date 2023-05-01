import moment from 'moment'
import { Experience } from '@/config/profile'

export function getRange (period: Experience['period']): string {
  return `${period.start} - ${period.end || 'Present'}`
}

export function getDuration (period: Experience['period']): string {
  const from = moment(new Date(period.start))
  const to = moment(period.end ? new Date(period.end) : Date.now())
  const totalMonthDuration = to.diff(from, 'months')

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
