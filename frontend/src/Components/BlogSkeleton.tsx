import { Circle } from "./BlogCard";

export const BlogSkeleton = () => {
    return <div>
      <div role="status" className="animate-pulse">
        <div className="p-4 border-b border-slate-300 pb-4 w-screen max-w-screen-md cursor-pointer">
            <div className="flex">
                <div className="">
                <div className="h-4 w-4 bg-gray-200 rounded-full  w-48 mb-4"></div>
                </div>
                <div className="h-2 bg-gray-200 rounded-full  mb-2.5"></div>
                <div className="h-2 bg-gray-200 rounded-full  mb-2.5"></div>

                <div className="flex justify-center flex-col pl-2  text-sm">
                <Circle />
                </div>
                <div className="flex justify-center flex-col text-sm pl-2 font-thin text-slate-500 ">
                {" "}
                <div className="h-2 bg-gray-200 rounded-full  mb-2.5"></div>
                </div>
            </div>
            <div className="text-xl font-semibold pt-2 ">
                {" "}
                <div className="h-2 bg-gray-200 rounded-full  mb-2.5"></div>
            </div>
            <div className="text-md font-thin pt-2">
                <div className="h-2 bg-gray-200 rounded-full  mb-2.5"></div>
            </div>
            <div className=" text-slate-500 text-sm font-thin">
                <div className="h-2 bg-gray-200 rounded-full  mb-2.5"></div>
            </div>
        </div>
        <div className="h-2.5 bg-gray-200 rounded-full  w-48 mb-4"></div>
        <span className="sr-only">Loading...</span>
      </div>
    </div>
}