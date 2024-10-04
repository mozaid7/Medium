import { AppBar } from "../Components/AppBar"
import { BlogCard } from "../Components/BlogCard"
import { useBlogs } from "../Hooks"

export const Blogs = () => {
    const {loading, blogs} = useBlogs();

    if (loading) {
        return <div>
            loading...
        </div>
    }
    return <div>
        <AppBar />
        <div className="flex justify-center">
            <div className="max-w-xl">
                {blogs.map(blog => <BlogCard
                authorName={blog.author.name || "Random"}
                title={blog.title}
                content={blog.content}
                publishedDate={"4th Oct 2024"}
            />)}
            </div>
        </div>
    </div>
}