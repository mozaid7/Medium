import { AppBar } from "../Components/AppBar"
import { BlogCard } from "../Components/BlogCard"

export const Blogs = () => {
    return <div>
        <AppBar />
        <div className="flex justify-center">
            <div className="max-w-xl">
            <BlogCard
                authorName={"Syed Zaid"}
                title={"Title of the Blog is very big without any production changes"}
                content={"Title of the Blog is very big without any production changes of the Blog"}
                publishedDate={"4th Oct 2024"}/>
            <BlogCard
                authorName={"Syed Zaid"}
                title={"Title of the Blog is very big without any production changes"}
                content={"Title of the Blog is very big without any production changes of the Blog"}
                publishedDate={"4th Oct 2024"}/>
            <BlogCard
                authorName={"Syed Zaid"}
                title={"Title of the Blog is very big without any production changes"}
                content={"Title of the Blog is very big without any production changes of the Blog"}
                publishedDate={"4th Oct 2024"}/>
            </div>
        </div>
    </div>
}