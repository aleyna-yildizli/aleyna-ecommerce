import React, { useState } from "react";
import { useForm } from "react-hook-form";
import LoadingSpinner from "../components/widgets/LoadingSpinner";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCaretUp, faEyeSlash, faEye } from '@fortawesome/free-solid-svg-icons';
import { useDispatch } from "react-redux";
import { loginUser } from "../store/thunks/userLoginThunk";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";



export default function Login() {
    const { register, handleSubmit, formState: { errors } } = useForm({
        defaultValues: {
            email: '',
            password: '',
        },
    });
    const history = useHistory();
    const dispatch = useDispatch();
    const [showPassword, setShowPassword] = useState(false);
    const [isLoading, setIsLoading] = useState(false);
    const [isValid, setIsValid] = useState(false);
    const [showHelpOptions, setShowHelpOptions] = useState(false);


    const handleShowClick = () => {
        setShowHelpOptions(!showHelpOptions);
    };

    const togglePasswordVisibility = () => {
        setShowPassword(!showPassword);
    };

    const onSubmit = (userData) => {
        setIsLoading(true);
        dispatch(loginUser(userData));
        history.push("/");
    };


    return (
        <div className="w-full flex flex-col bg-[#e7f0fd]">
            <h2 class="absolute font-extrabold text-[199px] text-white opacity-50 right-[3%] top-[10%]">
                Log in
            </h2>
            <div className="max-w-xl w-full mx-auto p-10 mt-20  ">
                <div className="bg-white p-10 border border-gray-300 mt-6 rounded-lg shadow-md">
                    <div className="flex flex-col justify-center items-center">
                <p className="text-[#252B42] font-bold text-[40px] tracking-tighter">WELCOME!</p>
                <p className="text-[#68686b] text-lg tracking-tight">Log in to your account and enjoy shopping</p>
                </div>
                    <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-3">
                        {/* EMAİL ALANI */}
                        <div>
                            <label
                                htmlFor="email" 
                                className="form-label">
                            </label>
                            <input
                                className=" form-input"
                                placeholder="Email Address..."
                                type="email"
                                id="email"
                                {...register("email", {
                                    required: "Email address is required",
                                    pattern: /^\S+@\S+$/i,
                                })}
                            />
                           {errors.email && (
                                <p className="form-error">{errors.email.message}</p>
                            )}
                        </div>
                        {/* PASSWORD ALANI */}
                        <div>
                            <label
                                htmlFor="password"
                                className="form-label">
                            </label>
                            <div className="relative">
                                <input
                                    placeholder="Password..."
                                    className="form-input"
                                    type={showPassword ? "text" : "password"}
                                    id="password"
                                    {...register("password", {
                                        required: "Password is required",
                                    })}
                                />
                                <FontAwesomeIcon
                                    icon={showPassword ? faEye : faEyeSlash}
                                    size="xs"
                                    className="absolute top-1/2 right-3 transform -translate-y-1/2 cursor-pointer"
                                    onClick={togglePasswordVisibility}
                                />
                            </div>
                            {errors.password && (
                                <p className="form-error">{errors.password.message}</p>
                            )}
                        </div>
                        <button
                            type="submit"
                            disabled={isValid || isLoading}
                            className={`
                             w-full py-2.5 bg-[#1da0f2] text-lg text-white rounded-lg font-semibold
                             ${isValid || isLoading ? "opacity-50 cursor-not-allowed" : "hover:scale-105"}
                            `}
                        >
                            {isLoading ? <LoadingSpinner /> : "Log in"}
                        </button>
                        <p className="text-sm text-left font-semibold text-[#888]">
                            By continuing, you agree to BrandName's <a className="text-[#1da0f2] no-underline hover:underline hover:text-red-600">Conditions of Use </a> and <a className="text-[#1da0f2] no-underline hover:underline hover:text-red-600"> Privacy Notice.</a>
                        </p>
                        <p className="text-md text-left font-semibold text-[#888]">
                            <FontAwesomeIcon icon={faCaretUp} rotation={180} size="xs" style={{ color: "#000000" }} className="inline-block align-middle mr-1" />
                            <span onClick={handleShowClick} className="text-[#1da0f2] hover:text-red-600 text-sm font-semibold ml-1 no-underline hover:underline cursor-pointer">Need help?</span>
                            {showHelpOptions && (
                                <span className="text-[#1da0f2] text-sm ml-[15px] block">
                                    <span className="hover:text-red-600 hover:underline">Forgot your password?</span> <br></br>
                                    <span className="hover:text-red-600 hover:underline">Other issues with Sign-in?</span>
                                </span>
                            )}
                        </p>
                        <hr></hr>
                        <p className="text-md text-center font-semibold text-[#888]">
                            Don't have an BrandName account?
                            <a href="/login" className="text-[#1da0f2] text-md font-semibold ml-1 no-underline">Sign Up</a>
                        </p>
                    </form>
                </div>
            </div>
        </div>
    );
};
