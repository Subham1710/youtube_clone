
export function VideoCard(props: any ){
    return <div>
         
        <img src={props.image} className="rounded-xl"/>

        <div className="grid grid-cols-12 pt-2">
            <div className="col-span-2">
                <img className={"rounded-full w-20 h-20"} src="props.thumbImage"/>
            </div>
            <div className="col-span-10 pl-2">
                <div>
                    {props.title}
                </div>
                <div className="text-gray-600 text-base">
                    {props.author}
                </div>
                <div className="text-gray-600 text-base">
                    {props.views} | {props.timestamp}
                </div>
            </div>
        </div>
    </div>
}
