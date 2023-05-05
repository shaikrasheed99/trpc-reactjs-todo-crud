export enum Priority {
    HIGH = 'HIGH',
    MEDIUM = 'MEDIUM',
    LOW = 'LOW',
}

export interface ITodo {
    id: number;
    description: string;
    priority: Priority;
    isCompleted: boolean;
}
