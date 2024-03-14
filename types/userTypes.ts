export type User =  {
    name: string;
    email: string;
    password: string;
    password_confirmation: string;
}
export type  UserLogin = {
    email: string
    password: string
}