export interface ListReponse{
    data: {
      firstName: string,
      lastName: string,
      id: string,
      picture: string,
      title: string
    }[],
    limit: number,
    page: number,
    total: number
}