import EventWrapper from './EventWrapper'
import BackgroundWrapper from './BackgroundWrapper'

export const components = {
  eventWrapper: EventWrapper,
  timeSlotWrapper: BackgroundWrapper,
  dateCellWrapper: BackgroundWrapper,
}

export { default as Calendar } from './Calendar'
export { default as Toolbar } from './Toolbar'
export { DateLocalizer } from './localizer'
export { default as momentLocalizer } from './localizers/moment'
export { default as globalizeLocalizer } from './localizers/globalize'
export { default as move } from './utils/move'
export { views as Views, navigate as Navigate } from './utils/constants'
