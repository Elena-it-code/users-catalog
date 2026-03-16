import type {User} from "../../../entities/user/model/types.ts";
import s from './UserList.module.css'
import {UserCard} from "../../../entities/user/ui/UserCard.tsx";

type UserListProps = {
    users: User[]
}

export const UserList = ({users}: UserListProps) => {
    return (
        <div className={s.list}>
            {users.map((user: User) => <UserCard key={user.id} user={user}/>)}
        </div>
    )
}