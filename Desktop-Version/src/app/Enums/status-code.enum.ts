export enum StatusCode {
  notFound = 404,
  success = 200,
  FEinvalidLoginUsername = 0,
  FEinvalidPassword = 1,
  FEmissingFields = 2,
  FEArchiveVolunteerWarning = 3,
  FEArchiveEventWarning = 4,
  FELogoutWarning = 5,
  FEActivateWarning = 6,
  FEAcceptArchiveWarning = 7,
  FEDeclineArchive = 8,
  wrongUsernameOrPassword = 400,
  unauthorized = 401,
  internalServerError = 500,
  createdBefore = 302
}
