import {Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger} from "./ui/dialog";

interface itemProps {
    item:{
        title:string;
        date:string;
        author:string;
        meetingInfo:string;
    }
}

export default function NewsCard({item}:itemProps){
    return (
        <div className="card-body">
            <div className="relative rounded-tl-md rounded-tr-md h-28 lg:h-38 w-full overflow-hidden">
            <img src="./public/test.jpg" className="absolute top-0 left-0 hover:scale-105 transition-all duration-400 rounded-tl-md rounded-tr-md p-0"/>
            </div>
            <div className="flex flex-col gap-2 p-4">
                <h3 className="font-bold text-xl truncate">{item.title}</h3>
                <div className="flex justify-between w-full">
                    <p className="font-semibold text-sm">Author: </p><span className="text-sm text-muted-foreground">Admin</span>
                </div>
                <div className="flex justify-between w-full">
                    <p className="font-semibold text-sm">Published: </p><span className="text-sm text-muted-foreground">{item.date}</span>
                </div>
                <Dialog>
                    <DialogTrigger className="w-full bg-white text-black rounded-md py-2 font-bold text-xl cursor-pointer">Read More</DialogTrigger>
                    <DialogContent className="my-10 h-[500px] overflow-y-auto p-0">
                        <DialogHeader>
                            <img src="./public/test.jpg"
                                 className="rounded-tl-md rounded-tr-md"/>
                            <DialogDescription className="py-2 px-4">
                                <div>
                                    <h3 className="font-bold text-2xl text-black">{item.title}</h3>
                                    <div className="mt-4 flex flex-col lg:flex-row lg:justify-between lg:w-full">
                                    <p className="font-semibold text-black text-sm">Author:<span
                                    className="text-sm text-black">Admin</span></p>
                                    <p className="font-semibold text-black text-sm">Published: <span
                                        className="text-sm text-black">{item.date}</span></p>
                                    </div>
                                    <p className="pt-4 text-black">{item.meetingInfo}</p>
                                </div>
                            </DialogDescription>
                        </DialogHeader>
                    </DialogContent>
                </Dialog>
            </div>
        </div>
    )
}