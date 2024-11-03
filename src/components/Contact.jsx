import { useState } from 'react'
import { motion } from "framer-motion";
import Swal from 'sweetalert2';
import { IoMdSend } from "react-icons/io";
import { FaHourglassEnd } from "react-icons/fa";

import { WEB3FORMS_ACCESS_KEY } from '../assets/info';
import Footer from './Footer';

export default function Contact() {
    const [clicked, setClicked] = useState(false);

    function applyAnimation(delay = 0) {
        return {
            initial: { y: 30, opacity: 0 },
            animate: { y: 0, opacity: 1 },
            transition: { duration: 0.3, delay },
        }
    }

    async function onSubmit(event) {
        event.preventDefault();

        if (clicked) return;
        setClicked(true);

        try {
            const formData = new FormData(event.target);

            formData.append("access_key", WEB3FORMS_ACCESS_KEY);

            const object = Object.fromEntries(formData);
            const json = JSON.stringify(object);

            const res = await fetch("https://api.web3forms.com/submit", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    Accept: "application/json"
                },
                body: json
            }).then((res) => res.json());

            if (res.success) {
                Swal.fire({
                    title: "Success!",
                    text: "Message sent successfully!",
                    icon: "success"
                });
            }
        }
        catch (error) {
            Swal.fire({
                title: "Too many requests!",
                text: "Please wait for 10 seconds!",
                icon: "warning"
            });
        }
        finally {
            setClicked(false);
        }
    };

    return (
        <div>
            <motion.h1
                {...applyAnimation(0.6)}
                className="font-[Calistoga] font-[400] text-white leading-none text-left sm:mt-[10px] mb-7"
                style={{ fontSize: "min(11vw, 48px)" }} >
                contact me.
            </motion.h1>

            <form onSubmit={onSubmit} className="text-[#ddd]">
                <div className="flex flex-col sm:flex-row">
                    <motion.input
                        {...applyAnimation(0.8)}
                        type="text"
                        name="name"
                        placeholder="Name"
                        required
                        className="bg-[transparent] flex-1 mb-9 sm:mr-2 border-[1px] border-[#32363f] py-2 px-3 rounded-md outline-none  focus:border-white" >
                    </motion.input>

                    <motion.input
                        {...applyAnimation(1)}
                        type="email"
                        name="email"
                        placeholder="Email"
                        required
                        className="bg-[transparent] flex-1 mb-9 border-[1px] border-[#32363f] py-2 px-3 rounded-md outline-none  focus:border-white" >
                    </motion.input>
                </div>

                <motion.textarea
                    {...applyAnimation(1.2)}
                    name="message"
                    rows={4}
                    placeholder="Leave feedback about the site or just say hello, etc."
                    required
                    className="bg-[transparent] w-full border-[1px] border-[#32363f] py-2 px-3 rounded-md outline-none mb-9 focus:border-white resize-none" >
                </motion.textarea>

                <motion.button
                    {...applyAnimation(1.4)}
                    type="submit"
                    className="bg-[white] text-[#000] w-full rounded-md py-2 flex items-center justify-center"
                    disabled={clicked} >
                    {clicked ?
                        <>
                            Sending...
                            <FaHourglassEnd className="ml-2 relative top-px" />
                        </>
                        :
                        <>
                            Send Message
                            <IoMdSend className="ml-3 relative top-px" />
                        </>
                    }
                </motion.button>
            </form>

            <Footer />

        </div>
    );
}