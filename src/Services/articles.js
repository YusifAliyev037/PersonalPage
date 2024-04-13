import { instanceAxsios } from "../Helper/instanceAxsios"



export const getBlogs = async ()=>{
    const response = await instanceAxsios.get("posts");
    return response;
};

export const getBlogId = async (id)=>{
    const response = await instanceAxsios.get("posts/" + id);
    return response;
};
