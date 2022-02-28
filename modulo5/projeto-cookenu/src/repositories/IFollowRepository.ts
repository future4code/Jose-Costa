export interface IFollowRepository {
    follow(user_id: string, userToFollowId: string): Promise<void>;
    unfollow(user_id: string, userToFollowId: string): Promise<void>;
}