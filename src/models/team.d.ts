interface Team {
    id: number;
    name: string;
    shortName: string;
    tla: string;
    crestUrl: string;
    address: string;
    phone: string;
    website: string;
    founded: number;
    clubColors: string;
    venue: string;
}

interface TeamWithKey {
  [key: string]: Team;
}