import {Label} from "./ui/label";
import {Input} from "./ui/input";
import {Textarea} from "./ui/textarea";
import {SendHorizonal} from "lucide-react";
import {FormEvent, useState} from "react";

export default function ContactForm(){
    const [name,setName]=useState("");
    const [contact,setContact]=useState("");
    const [email,setEmail]=useState("");
    const [message,setMessage]=useState("");
    const [error,setError]=useState("");

    const HandleSubmit = (e:FormEvent<HTMLFormElement>) =>{
        e.preventDefault();

        try{
            if(!name || !contact || !email || !message){
                setError("Required");
                return;
            } else{
            setError("");
            alert(`name:${name}\ncontact:${contact}\nemail:${email}\nmessage:${message}`);
            }
        }catch(error){
            console.log("error: ",error);
            alert(error);
        }
    }

    return (
        <div className="mb-20  flex flex-col items-center justify-center w-full">
        <h1 className="text-4xl pb-8 font-bold">Contact Us</h1>
            <form onSubmit={HandleSubmit} className="border border-white max-w-md w-full px-4 py-8 rounded-lg">
                <div className="flex flex-col gap-8">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-4">
                        <div className="flex flex-col gap-2">
                            <Label>Name</Label>
                            <Input value={name} onChange={(e) => {setName(e.target.value); if (error) setError("");
                            }}
                                   placeholder="James Cameron"/>
                            {error && (
                                <p className="text-red-200">{error}</p>
                            )}
                        </div>
                        <div className="flex flex-col gap-2">
                            <Label>Contact</Label>
                            <Input value={contact} onChange={(e)=> {
                                setContact(e.target.value);
                                if (error) setError("")
                            }} placeholder="07711223345"/>
                            {error && (
                                <p className="text-red-200">{error}</p>
                            )}
                        </div>
                    </div>
                    <div className="flex flex-col gap-2">
                        <Label>Email</Label>
                        <Input value={email} onChange={(e)=> {
                            setEmail(e.target.value);
                            if (error) setError("")
                        }} placeholder="james.cameron@example.com"/>
                        {error && (
                            <p className="text-red-200">{error}</p>
                        )}
                    </div>
                    <div className="flex flex-col gap-2">
                        <Label>Message</Label>
                        <Textarea value={message} onChange={(e)=> {
                            setMessage(e.target.value);
                            if (error) setError("")
                        }} placeholder="Enter your name"/>
                        {error && (
                            <p className="text-red-200">{error}</p>
                        )}
                    </div>
                    <button type="submit" className="bg-white text-black rounded-md w-full py-2 font-bold">
                        <p className="flex gap-3 items-center justify-center cursor-pointer">Send
                            Message <SendHorizonal/></p>
                    </button>
                </div>
            </form>
        </div>
    )
}