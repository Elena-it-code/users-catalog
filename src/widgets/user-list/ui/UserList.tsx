import s from './UserList.module.css'
import {type User, UserCard} from "@/src/entities";

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