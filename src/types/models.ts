export interface Ipost{
    id:string;
    createdAt:String;
    image?:string;
    images?:string[];
    video?:string;
    description:string;
    user:Iuser;
    nofComments:number;
    nofLikes:number;
    comments:Icomment[]

}
export interface Iuser{
    id:string;
    username:string;
    image?:string;
    name:string;
    bio?:string;
    posts?:Ipost[];
    website?:string
}


export interface Icomment{
    id:string;
    comment:string;
    user:Iuser;
}