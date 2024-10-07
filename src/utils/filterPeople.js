export const filterPeople = (users, updatedUser, id) => {
    return users.filter(
        (user) =>
            !updatedUser.friends.some((friend) => friend.id === user.id) &&
            !updatedUser.following.some(
                (follow) => follow.id === user.id
            ) &&
            !updatedUser.followers.some(
                (follower) => follower.id === user.id
            ) &&
            user.id !== id
    );
}