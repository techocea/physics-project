import NewsCard from "../../components/NewsCard";
import {NEWS_DATA} from "@/lib/data";

export default function Events(){
    return (
        <div className="wrapper">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 mt-10">
            {NEWS_DATA.slice(0,8).map((item:any)=>(
            <NewsCard event={item} index={item.id}/>
            ))}
        </div>
        </div>
    )
}