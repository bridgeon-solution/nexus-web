export interface TeamData {
  name: string
}

export interface TeamResponseData {
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

export interface Team {
  _id: string,
  teamLead: number,
  name: string,
  members: number[],
  updatedAt: Date
  createdAt: Date,
  __v?: number
}

export interface TeamMember {
  status: string,
  data: {
    _id: string,
    teamLead: number,
    name: string,
    members: number[],
    createdAt: Date,
    updatedAt: Date,
    __v: number
  }
}




