export interface Webinar {
    _id: string;
    title: string;
    description: string;
    imageUrl: string;
    datetime: string;
    duration: string;
    active: boolean;
    registrations: {
        name: string;
        email: string;
        phone: string;
        registeredAt: Date;
    }[];
    createdAt: Date;
}
