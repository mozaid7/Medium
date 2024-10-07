import { useParams } from "react-router-dom";
import { FullBlog } from "../Components/FullBlog";
import { useBlog } from "../Hooks";

export const Blog = () => {
    const { id } = useParams();
    const {loading, blog} = useBlog({
        id: id || ""
    });

    if (loading || !blog) {
        return <div>
            loading...
        </div>
    }
    return <div>
        {" "}
        <FullBlog blog={blog} />{" "}
    </div>
}