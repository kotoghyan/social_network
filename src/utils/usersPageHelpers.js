import React from "react";

export const usersPageFollowUnfollow = (user, disabled, unfollow,follow) => {
        return <button disabled={disabled
            .some(id => id === user.id)}
                       onClick={() => {
                           user.followed ? unfollow(user.id): follow(user.id)
                       }}>
            {user.followed ? 'Unfollow' : 'Follow'}
        </button>
}

