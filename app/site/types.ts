export type Page =
  | 'home'
  | 'about'
  | 'academics'
  | 'admissions'
  | 'student-life'
  | 'facilities'
  | 'news-events'
  | 'contact'

export type NavigateFn = (page: Page, section?: string) => void
