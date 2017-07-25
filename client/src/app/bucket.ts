export class Bucket {
    public _id: string;
    public user_id: string;
    public title: string;
    public description: string;
    public createdAt: Date = new Date();
    public updatedAt: Date = new Date();
constructor(){}
}