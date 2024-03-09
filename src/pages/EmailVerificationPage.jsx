import React from 'react';
import { useLocation } from 'react-router-dom';

export default function EmailVerificationPage() {
    const location = useLocation();
    const email = location.state?.email; // Parametreyi al


  return (
    <div className="w-full h-full flex flex-col mb-[300px]">
      <div className="max-w-10xl w-full mx-auto p-10 ">
        <div className="bg-white p-10 border mt-6 rounded-lg shadow-md">
          <div className="flex flex-col justify-center items-center">
            <p className="text-[#252B42] font-bold text-[40px] tracking-tighter">
            Verify email address
            </p>
            <p className="text-[#68686b] text-lg tracking-tight">
            Check your <span className='text-[#1da0f2] font-bold'>{email}</span> to activate your account. Redirecting to the previous page.
            </p>
          </div>
        </div>
      </div>
      </div>
  
  );
}

