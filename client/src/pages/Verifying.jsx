import React, { useState } from "react";
import OtpInput from "react-otp-input";
import svg from '../assests/Enter OTP-rafiki.svg'

const Verifying = () => {
  const [otp, setOtp] = useState("");
  return (
    <>
      <div className="relative flex p-[140px] flex-row justify-center overflow-hidden bg-gray-50">
        <div className="sm:mx-auto sm:w-full sm:max-w-sm">
          <img src={svg} alt="img" />
        </div>
        <div className="relative bg-white px-6 pt-10 pb-9 shadow-xl mx-auto max-w-lg rounded-2xl">
          <div className="mx-auto flex w-full max-w-md flex-col space-y-16">
            <div className="flex flex-col items-center justify-center text-center space-y-2">
              <div className="font-semibold text-3xl">
                <p>OTP Verification</p>
              </div>
              <div className="flex flex-row text-sm font-medium text-gray-400">
                <p>We have sent a OTP to the provided mobile number</p>
              </div>
            </div>
            <div>
              <OtpInput
                value={otp}
                autoFocus
                onChange={setOtp}
                containerStyle="flex justify-around"
                numInputs={4}
                inputStyle="bg-gray-200 h-16 text-2xl border border-gray-300 rounded-md"
                renderSeparator={<span className="mx-2">-</span>}
                renderInput={(props) => <input lassName="customInputWidth" {...props} />}
              />
            </div>
            <button
                type="submit"
                className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
              >
                Verify OTP
              </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Verifying;
