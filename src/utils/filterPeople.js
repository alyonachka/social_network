export const filterPeople = (users, currentUser) => {
    return users.filter(
        (user) =>
            !currentUser.friends.some((friend) => friend.id === user.id) &&
            !currentUser.following.some(
                (follow) => follow.id === user.id
            ) &&
            !currentUser.followers.some(
                (follower) => follower.id === user.id
            ) &&
            user.id !== currentUser.id
    );
}