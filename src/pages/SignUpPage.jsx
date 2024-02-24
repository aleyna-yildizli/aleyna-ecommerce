import React, { useState } from "react";
import { useForm } from "react-hook-form";
import axios from "axios";
import LoadingSpinner from "../components/widgets/LoadingSpinner";

const axiosInstance = axios.create({
    baseURL: "https://workintech-fe-ecommerce.onrender.com"
});

export default function SignUpPage() {
    const { register, handleSubmit, watch, formState: { errors } } = useForm({
        defaultValues: {
            name: '',
            email: '',
            password: '',
            confirmPassword: '',
            userType: ''
        },
    });

    const [userType, setUserType] = useState(""); // Kullanıcı tipi için bir state
    const [showPassword, setShowPassword] = useState(false); // Şifrenin görünürlüğünü saklamak için bir state
    const [isLoading, setIsLoading] = useState(false);
    const [isValid, setIsValid] = useState(false);

    const handleTogglePasswordVisibility = () => {
        setShowPassword(!showPassword); // Şifre görünürlüğünü tersine çevir
    };

    const handleUserTypeChange = (type) => {
        setUserType(type); // Seçilen kullanıcı tipini state'e kaydet
    };


    const onSubmit = async (data) => {
        setIsLoading(true);

        try {
            const response = await axiosInstance.post("/signup", data);
            console.log("Registration successful", response);
            // Burada başarılı bir kayıt olduğunda yapılacak işlemler eklenebilir

        } catch (error) {
            console.error("Registration failed!", error);
            // Hata durumunda kullanıcıya bildirim göstermek için toast veya diğer yöntemler kullanılabilir
        }

        setIsLoading(false);
    };


    return (
        <div className="w-full h-[1340px] flex flex-col bg-[#e7f0fd]">
            <h2 class="absolute font-extrabold text-[174px] text-white opacity-50 right-[9%] top-[12%] z-50">
                Sign Up
            </h2>
            <div className="max-w-xl w-full mx-auto p-10 mt-20  ">
                <div className="bg-white p-10 border border-gray-300 mt-6 rounded-lg shadow-md">
                    <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-3">
                        <div>
                            <p className="text-lg text-center font-extrabold text-gray-600">WHAT TYPE OF USER ARE YOU?</p>
                            <div className="flex justify-between items-center">
                                <button
                                    type="button"
                                    className={`w-[30%] p-2.5 mt-1 rounded-lg font-base ${userType === "manager" ? "bg-[#1da0f2] text-white" : "bg-gray-200 text-[#888]"} hover:bg-[#1da0f2] hover:text-white`}
                                    onClick={() => handleUserTypeChange("manager")}
                                >
                                    Manager
                                </button>
                                <button
                                    type="button"
                                    className={`w-[30%] p-2.5 mt-1  rounded-lg font-base ${userType === "customer" ? "bg-[#1da0f2] text-white" : "bg-gray-200 text-[#888]"} hover:bg-bg-[#1da0f2] hover:text-white`}
                                    onClick={() => handleUserTypeChange("customer")}
                                >
                                    Customer
                                </button>
                                <button
                                    type="button"
                                    className={`w-[30%] p-2.5 mt-1  rounded-lg font-base ${userType === "store" ? "bg-[#1da0f2] text-white" : "bg-gray-200 text-[#888]"} hover:bg-bg-[#1da0f2] hover:text-white`}
                                    onClick={() => handleUserTypeChange("store")}
                                >
                                    Store
                                </button>
                            </div>
                        </div>
                        {/* Name en az 3 karakter olmalı */}
                        <div>
                            <label htmlFor="name" className="text-md font-medium text-gray-600 block"></label>
                            <input
                                type="text"
                                id="name"
                                placeholder="Full Name..."
                                className=" w-full p-3 border border-solid bg-ltGrey border-ltGrey rounded-lg text-sm"
                                {...register("name", {
                                    required: "Name is required",
                                    minLength: {
                                        value: 3,
                                        message: "Name must be at least 3 characters",
                                    },
                                })}
                            />
                            {errors.name && (
                                <p className="mt-1 text-xs text-red-500">{errors.name.message}</p>
                            )}
                        </div>
                        {/* Emaill Address zorunlu olmalı */}
                        <div>
                            <label htmlFor="email" className="block text-sm font-medium text-gray-600"></label>
                            <input
                                className=" w-full p-3 border border-solid bg-ltGrey border-ltGrey rounded-lg text-sm "
                                placeholder="Email Address..."
                                type="email"
                                id="email"
                                {...register("email", {
                                    required: "Email address is required",
                                    pattern: /^\S+@\S+$/i,
                                })}
                            />
                            {errors.email && (
                                <p className="mt-1 text-xs text-red-500">{errors.email.message}</p>
                            )}
                        </div>
                        {/* Şifrenin sayı, küçük harf, büyük harf ve özel karakterler dahil en az 8 karakter olması gerekir */}
                        <div>
                            <label
                                htmlFor="password"
                                className="text-sm font-medium text-gray-600 "></label>
                            <input
                                placeholder="Password..."
                                className="form-input w-full p-3 border border-solid rounded-lg text-sm"
                                type={showPassword ? "text" : "password"}
                                id="password"
                                {...register("password", {
                                    required: "Password is required",
                                    pattern: {
                                        value: /^(?=.*\d)(?=.*[A-Z])(?=.*[a-z])(?=.*[^\w\d\s:])([^\s])/,
                                        message: "Password must be at least 8 characters, including a number, uppercase and lowercase letter, and a special character",
                                    },
                                })}
                            />
                            {errors.password && (
                                <p className="text-xs text-red-500">{errors.password.message}</p>
                            )}
                        </div>
                        <div>
                            {/*Şifrenin ikinci giriş alanıyla eşleşmesi gerekiyor*/}
                            <label className="block text-sm font-medium text-gray-600 " htmlFor="confirmPassword"></label>
                            <input
                                className="w-full p-3 border border-solid bg-ltGrey border-ltGrey rounded-lg text-sm"
                                id="confirmPassword"
                                type="password"
                                placeholder='Confirm Password...'
                                {...register('confirmPassword', {
                                    required: 'Enter your password',
                                    validate: (val) => {
                                        if (watch('password') != val) {
                                            return "Your passwords do no match";
                                        }
                                    }
                                })}
                            />
                            {errors.confirmPassword && (
                                <p className="text-xs text-red-500">{errors.confirmPassword.message}</p>
                            )}
                        </div>
                        {/* Store section */}
                        <div>
                            {(userType === "store" && (
                                <div>
                                    {/* Store Name en az 3 karakter olmalı */}
                                    < div className="flex flex-col gap-3">
                                        <div>
                                            <label htmlFor="name" className="text-md font-medium text-gray-600 block"></label>
                                            <input
                                                type="text"
                                                id="name"
                                                placeholder="Store Name..."
                                                className=" w-full p-3 border border-solid bg-ltGrey border-ltGrey rounded-lg text-sm"
                                                {...register("name", {
                                                    required: "Store name is required",
                                                    minLength: {
                                                        value: 3,
                                                        message: "Store name must be at least 3 characters",
                                                    },
                                                })}
                                            />
                                            {errors.name && (
                                                <p className="mt-1 text-xs text-red-500">{errors.name.message}</p>
                                            )}
                                        </div>
                                        {/* Mağaza Telefonu alanı geçerli Türkiye telefon numarası olmalıdır*/}
                                        <div>
                                            <label htmlFor="storePhone" className="text-md font-medium text-gray-600 block" />
                                            <input
                                                type="text"
                                                id="storePhone"
                                                placeholder="Store Phone..."
                                                className=" w-full p-3 border border-solid bg-ltGrey border-ltGrey rounded-lg text-sm"
                                                {...register("storePhone", {
                                                    required: "Store Phone field should be valid Türkiye phone number",
                                                    pattern: /^(\+90|0)?\d{10}$/,
                                                })}
                                            />
                                            {errors.storePhone && (
                                                <p className="mt-1 text-xs text-red-500">{errors.storePhone.message}</p>
                                            )}
                                        </div>

                                        {/* Mağaza Vergi Numarası alanı görünmeli ve "TXXXXVXXXXXX" modeliyle eşleşmelidir ⇒ X herhangi bir sayı olabilir */}
                                        <div>
                                            <label htmlFor="TaxId" className="text-md font-medium text-gray-600 block" />
                                            <input
                                                className=" w-full p-3 border border-solid bg-ltGrey border-ltGrey rounded-lg text-sm"
                                                id="TaxId"
                                                type="text"
                                                placeholder="Tax No..."
                                                {...register("TaxId", {
                                                    required: 'Store Tax ID is required',
                                                    pattern: /T\d{4}V\d{6}/
                                                })}
                                            />
                                            {errors.TaxId && (
                                                <p className="mt-1 text-xs text-red-500">{errors.TaxId.message}</p>
                                            )}
                                        </div>

                                        {/* Store IBAN */}
                                        <div>
                                            <label className="text-md font-medium text-gray-600 block" htmlFor="storeIban" />
                                            <div>
                                                <input
                                                    className=" w-full p-3 border border-solid bg-ltGrey border-ltGrey rounded-lg text-sm"
                                                    id="storeIban"
                                                    type="text"
                                                    placeholder='Store IBAN...'
                                                    {...register('storeIban', {
                                                        required: 'Store IBAN is required',
                                                        pattern: /^AL\d{10}[0-9A-Z]{16}$|^AD\d{10}[0-9A-Z]{12}$|^AT\d{18}$|^BH\d{2}[A-Z]{4}[0-9A-Z]{14}$|^BE\d{14}$|^BA\d{18}$|^BG\d{2}[A-Z]{4}\d{6}[0-9A-Z]{8}$|^HR\d{19}$|^CY\d{10}[0-9A-Z]{16}$|^CZ\d{22}$|^DK\d{16}$|^FO\d{16}$|^GL\d{16}$|^DO\d{2}[0-9A-Z]{4}\d{20}$|^EE\d{18}$|^FI\d{16}$|^FR\d{12}[0-9A-Z]{11}\d{2}$|^GE\d{2}[A-Z]{2}\d{16}$|^DE\d{20}$|^GI\d{2}[A-Z]{4}[0-9A-Z]{15}$|^GR\d{9}[0-9A-Z]{16}$|^HU\d{26}$|^IS\d{24}$|^IE\d{2}[A-Z]{4}\d{14}$|^IL\d{21}$|^IT\d{2}[A-Z]\d{10}[0-9A-Z]{12}$|^[A-Z]{2}\d{5}[0-9A-Z]{13}$|^KW\d{2}[A-Z]{4}22!$|^LV\d{2}[A-Z]{4}[0-9A-Z]{13}$|^LB\d{6}[0-9A-Z]{20}$|^LI\d{7}[0-9A-Z]{12}$|^LT\d{18}$|^LU\d{5}[0-9A-Z]{13}$|^MK\d{5}[0-9A-Z]{10}\d{2}$|^MT\d{2}[A-Z]{4}\d{5}[0-9A-Z]{18}$|^MR13\d{23}$|^MU\d{2}[A-Z]{4}\d{19}[A-Z]{3}$|^MC\d{12}[0-9A-Z]{11}\d{2}$|^ME\d{20}$|^NL\d{2}[A-Z]{4}\d{10}$|^NO\d{13}$|^PL\d{10}[0-9A-Z]{,16}n$|^PT\d{23}$|^RO\d{2}[A-Z]{4}[0-9A-Z]{16}$|^SM\d{2}[A-Z]\d{10}[0-9A-Z]{12}$|^SA\d{4}[0-9A-Z]{18}$|^RS\d{20}$|^SK\d{22}$|^SI\d{17}$|^ES\d{22}$|^SE\d{22}$|^CH\d{7}[0-9A-Z]{12}$|^TN59\d{20}$|^TR\d{7}[0-9A-Z]{17}$|^AE\d{21}$|^GB\d{2}[A-Z]{4}\d{14}$/,
                                                    })}
                                                />
                                                {errors.storeIban && (
                                                    <p className="mt-1 text-xs text-red-500">{errors.storeIban.message}</p>
                                                )}
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                        {/* Terms of Service */}
                        <div className="flex items-center">
                            <input
                                type="checkbox"
                                id="termsOfService"
                                {...register("termsOfService", { required: true })}
                                className="appearance-none border-2 border-gray-300 w-5 h-5 rounded-md checked:bg-[#DADADA] checked:border-transparent focus:outline-none"
                            />
                            <label htmlFor="termsOfService" className="ml-2 text-md font-semibold text-[#888]">
                                I agree all statements in <a href="/terms-of-service" className="text-[#1da0f2] text-md font-semibold no-underline">Terms of Service</a>
                            </label>

                        </div>
                        <button
                            type="submit"
                            disabled={isValid || isLoading}
                            className={`
                             w-full p-3 bg-[#1da0f2] text-md text-white rounded-lg font-semibold
                             ${isValid || isLoading ? "opacity-50 cursor-not-allowed" : "hover:scale-105"}
                            `}
                        >
                            {isLoading ? <LoadingSpinner /> : "Create Account"}
                        </button>
                        <p className="text-md text-center font-semibold text-[#888]">
                            Already have an account?
                            <a href="/login" className="text-[#1da0f2] text-md font-semibold ml-1 no-underline">Log in</a>
                        </p>
                    </form>
                </div>
            </div >
        </div >
    );
};
