export interface User {
    firstName: string;
    lastName: string;
    email: string;    
}

export interface UserState {
    users: User[];
    loading: boolean;
}

export const initialState: UserState = {
    users: [],
    loading: false
}

