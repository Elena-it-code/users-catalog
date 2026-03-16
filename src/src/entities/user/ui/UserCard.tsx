import type {User} from "../model/types.ts";
import s from './UserCard.module.css';

type UserCardProps = {
    user: User
}

export const UserCard = ({user}: UserCardProps) => {
    return (
        <div className={s.card}>
            <h3 className={s.name}>{user.name}</h3>
            <p className={s.email}>{user.email}</p>
            <p className={s.city}>{user.address.city}</p>
        </div>
    )
}