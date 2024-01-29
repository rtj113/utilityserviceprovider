"use client";
import { FormEvent } from 'react'

export default function HomeLogin() {
    async function onSubmit(event){
        event.preventDefault()

        const formData = new FormData(event.target)
        const response = await fetch('api/submit', {
            method: 'POST',
            body: formData,
        })

        const data = await response.json()
    }

    return (
        <section className="w-full bg-bottom bg-[url('/solarPanelsSnow8.jpg')] bg-usp2 bg-blend-multiply">
            <div className="py-8 px-4 mx-auto max-w-screen-xl lg:py-16 grid lg:grid-cols-2 gap-8 lg:gap-16">
                <div className="flex flex-col justify-center">
                    <h1 className="mb-4 text-4xl font-extrabold tracking-tight leading-none text-teritary md:text-5xl lg:text-6xl drop-shadow-md">Utility Service Provider Login</h1>
                    <p className="mb-6 text-lg font-normal text-white lg:text-xl drop-shadow-md">Please use our form to login and see your account changes..</p>
                    <a href="#" className="text-white hover:underline font-medium text-lg inline-flex items-center">Read more about our app 
                        <svg className="w-3.5 h-3.5 ms-2 rtl:rotate-180" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 5h12m0 0L9 1m4 4L9 9"/>
                        </svg>
                    </a>
                </div>
                <div>
                    <div className="w-full lg:max-w-xl p-6 space-y-8 sm:p-8 bg-white rounded-lg shadow-xl">
                        <h2 className="text-2xl font-bold text-gray-900 ">
                            Sign in to Utility Service Provider
                        </h2>
                        <form onSubmit={onSubmit} className="mt-8 space-y-6">
                            <div>
                                <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900 ">Your email</label>
                                <input type="email" name="email" id="email" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" placeholder="name@company.com" required/>
                            </div>
                            <div>
                                <label htmlFor="password" className="block mb-2 text-sm font-medium text-gray-900 ">Your password</label>
                                <input type="password" name="password" id="password" placeholder="••••••••" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" required/>
                            </div>
                            <div className="flex items-start">
                                <div className="flex items-center h-5">
                                    <input id="remember" aria-describedby="remember" name="remember" type="checkbox" className="w-4 h-4 border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-blue-300" required/>
                                </div>
                                <div className="ms-3 text-sm">
                                <label htmlFor="remember" className="font-medium text-gray-500">Remember this device</label>
                                </div>
                                <a href="#" className="ms-auto text-sm font-medium text-blue-600 hover:underline">Lost Password?</a>
                            </div>
                            <button type="submit" className="w-full px-5 py-3 text-base font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 sm:w-auto ">Login to your account</button>
                            <div className="text-sm font-medium text-gray-900 ">
                                Not registered yet? <a className="text-blue-600 hover:underline">Create account</a>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    )

    
}