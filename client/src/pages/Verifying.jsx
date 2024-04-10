import React, { useEffect, useState } from "react";
import OtpInput from "react-otp-input";
import svg from "../assests/Enter OTP-rafiki.svg";
import axios from "axios";
import {useNavigate} from 'react-router-dom'

const Verifying = () => {
  const [otp, setOtp] = useState("");
  const [verifyOtp, setVerifyOtp] = useState("");
  const navigate = useNavigate()

  useEffect(() => {
    axios
      .get("http://localhost:1337/api/send-otps")
      .then((value) => setVerifyOtp(value.data.data[0].attributes.otp))
      .catch((err) => console.log(err));
  }, []);

  const handleVerify = () => {
    if (verifyOtp === otp) {
      navigate('/hotel')
    } else {
      alert('OTP did not matched')
    }
  }

  return (
    <>
      <div className="relative flex p-[140px] flex-row justify-center overflow-hidden bg-gray-50">
        <div className="sm:mx-auto sm:w-full sm:max-w-sm">
          <img src={svg} alt="img" />
        </div>
        <div className="relative bg-white px-6 pt-10 pb-9 shadow-xl mx-auto max-w-lg rounded-2xl">
          <p className="text-red-700">*Your default code = 456225</p>
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
                numInputs={6}
                inputStyle="bg-gray-200 h-16 text-2xl border border-gray-300 rounded-md"
                renderSeparator={<span className="mx-2">-</span>}
                renderInput={(props) => (
                  <input lassName="customInputWidth" {...props} />
                )}
              />
            </div>
            <button
            onClick={handleVerify}
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
