import { useState } from "react";
import * as React from "react";
import Input from "../components/Input.tsx";

const contactDetails: { value: string; detail: string | number; link: string }[] = [
    {
        value: "Phone",
        detail: "+94 75 651 9837",
        link: "https://img.icons8.com/?size=100&id=16713&format=png&color=000000",
    },
    {
        value: "Email",
        detail: "sahandanujaya48@gmail.com",
        link: "https://img.icons8.com/?size=100&id=qyRpAggnV0zH&format=png&color=000000",
    },
    {
        value: "Address",
        detail: "116/1, Morahenagama, Hatton",
        link: "https://img.icons8.com/?size=100&id=f8vpZHFhtUcH&format=png&color=000000",
    },
];

const Contact = () => {
    const [user, setUser] = useState({
        name: "",
        subject: "",
        message: "",
    });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setUser({ ...user, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        console.log("Submitted:", user);
        // Handle form submission logic here
    };

    const handleReset = () => {
        setUser({ name: "", subject: "", message: "" });
    };

    return (
        <div className="bg-gradient-to-r from-[#1e293b] to-[#293241] min-h-screen p-6 text-white flex flex-col md:flex-row items-center justify-center gap-10">
            {/* Contact Info */}
            <div className="w-full md:w-1/2 max-w-lg space-y-6">
                <h1 className="text-4xl font-extrabold text-white">
                    Contact <span className="text-yellow-400">Me</span>
                </h1>

                {contactDetails.map((item, index) => (
                    <div
                        key={index}
                        className="flex items-center bg-[#2F3E46] p-4 rounded-2xl shadow-md hover:shadow-xl transition duration-300"
                    >
                        <img src={item.link} alt={item.value} className="w-10 h-10 mr-4" />
                        <div>
                            <div className="text-lg font-semibold">{item.value}</div>
                            <div className="text-sm text-gray-300">{item.detail}</div>
                        </div>
                    </div>
                ))}
            </div>

            {/* Contact Form */}
            <form
                onSubmit={handleSubmit}
                className="w-full md:w-1/2 max-w-xl bg-[#2F3E46] p-8 rounded-2xl shadow-xl space-y-5"
            >
                <h2 className="text-2xl font-semibold mb-4 text-center">Let's Connect</h2>

                <Input
                    type="text"
                    placeHolder="Your Name"
                    name="name"
                    value={user.name}
                    change={handleChange}
                />
                <Input
                    type="text"
                    placeHolder="Your Subject"
                    name="subject"
                    value={user.subject}
                    change={handleChange}
                />
                <textarea
                    placeholder="Enter your message"
                    name="message"
                    value={user.message}
                    onChange={handleChange}
                    className="w-full h-[160px] rounded-xl p-4 bg-[#3A4A52] text-white shadow-inner resize-none outline-none focus:ring-2 focus:ring-yellow-300"
                />
                <div className="flex justify-center gap-4 pt-2">
                    <button
                        type="submit"
                        className="bg-yellow-400 hover:bg-yellow-500 text-black font-semibold px-6 py-2 rounded-md shadow-md hover:shadow-xl transition duration-300"
                    >
                        Submit
                    </button>
                    <button
                        type="button"
                        onClick={handleReset}
                        className="bg-gray-100 hover:bg-gray-300 text-black font-semibold px-6 py-2 rounded-md shadow-md hover:shadow-xl transition duration-300"
                    >
                        Reset
                    </button>
                </div>
            </form>
        </div>
    );
};

export default Contact;
