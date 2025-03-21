import {DUMMY_NEWS} from "@/dummy-news";
import {notFound} from "next/navigation";
import {getNewsItem} from "@/lib/news";

export default async function ImagePage({params}) {
    const newItemSlug = params.slug;
    const newsItem = await getNewsItem(newItemSlug);

    if (!newsItem) {
        notFound();
    }
    return <div className="fullscreen-image">
        <img src={`/images/news/${newsItem.image}`} alt={newsItem.title}/>
    </div>
}