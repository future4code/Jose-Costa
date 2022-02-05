export type User = {
    user_id: string,
    name: string,
    nickname: string,
    email: string
}

export type Check = { [index: string]: string }

export type Edit = {
    name?: string,
    nickname?: string
}

export type Task = {
    task_id: string,
    title: string,
    description: string,
    limitDate: Date,
    creationDate: Date,
    status: string,
    creatorUserId: string
}
