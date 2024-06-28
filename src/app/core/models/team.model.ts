export interface TeamData {
  name: string
}

export interface Team {
  status: string
  data: {
    _id: string,
    teamLead: number,
    name: string,
    members: number[],
    updatedAt: Date
    createdAt: Date,
    __v?: number
  }
}