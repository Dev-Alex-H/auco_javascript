const API = 'https://reqres.in/api/users?page='; //Normalmente esta información es privada en un archivo env.local similar al .env.template que dejo

export default async function GetUsers(page = 1) {
    const result = await fetch(`${API}${page}`);
    return await result.json();
}