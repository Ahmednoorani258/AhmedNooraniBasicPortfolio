"use client";
import Header from "../components/header"

import ContactForm from "../components/contact"
export default function Contact(){
    return (
        <main className="bg-gradient-to-r from-purple-600 to-indigo-900 h-screen w-screen">
            <Header prop="#8310e8"/>
            <div className="h-[90%] w-screen flex justify-center items-center">
                <ContactForm />
            </div>

                    
        </main>
    )
}

