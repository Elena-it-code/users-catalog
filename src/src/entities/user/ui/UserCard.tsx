import s from './UserCard.module.css';
import type {User} from "@/src/entities";


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