interface ProjectInterface {
    _id:string;
    name: string;
    description: string;
    team: string;
    startDate: Date;
    endDate: Date;
    image: string;
    status: string;
    progress: number;
    tasks: [string]
}

export {
    ProjectInterface
}