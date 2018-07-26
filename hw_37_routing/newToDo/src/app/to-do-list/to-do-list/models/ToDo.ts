export class ToDo {
    public toDoItemName: string;
    public toDoItemStatus: string;

    constructor(name: string, status: string) {
        this.toDoItemName = name;
        this.toDoItemStatus = status;
    }
}