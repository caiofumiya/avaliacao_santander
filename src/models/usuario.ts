export interface Usuario{
    id: string;
    title: string;
    firstName: string;
    lastName: string;
    gender: string;
    email: string;
    dateOfBirth: string;
    phone: string;
    picture: string;
    location: {
        street: string;
        city: string;
        state: string;
        country: string;
        timezone: string;
    };
    registerDate: string;
    updatedDate: string
}