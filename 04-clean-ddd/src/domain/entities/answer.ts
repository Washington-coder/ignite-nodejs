import { randomUUID } from "node:crypto"

export class Answer {
    public id
    public content: string

    constructor(content: string, id?: string) {
        this.id = id ?? randomUUID()
        this.content = content
    }
}