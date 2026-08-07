import { randomUUID } from "node:crypto"

class Student {
    public id
    public name: string

    constructor(name: string, id?: string) {
        this.id = id ?? randomUUID()
        this.name = name
    }
}