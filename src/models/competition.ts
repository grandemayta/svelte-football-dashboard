export interface Competition {
    id: number;
    area: Area; 
    code: string;
    name: string;
}

interface Area {
    id: number;
    name: string;
}