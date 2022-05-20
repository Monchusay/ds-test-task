let initialState: UserPageState = {
    userData: [
        {
            name:"Семен",
            surname:"Иванов",
            location:"Санкт-Петербург",
            id: 1
        },
        {
            name:"Надежда",
            surname:"Николаевна",
            location:"Москва",
            id: 1
        },
        {
            name:"Петр",
            surname:"Сабуров",
            location:"Сочи",
            id: 1
        },
        {
            name:"Мария",
            surname:"Гончарова",
            location:"Москва",
            id: 1
        },
    ]
}

export interface User {
    name:string;
    surname:string;
    location:string;
    id:number;
}

export interface UserPageState {
    userData: User[];
}

type ActionTypes = ""

const UserPageReducer = (state = initialState, action: { type: ActionTypes } & UserPageState) => {
    return state
}

export default UserPageReducer