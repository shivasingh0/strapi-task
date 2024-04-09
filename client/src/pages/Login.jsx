import React from "react";
import svg from '../assests/Tablet login-rafiki.svg'

function Login() {
  return (
    <>
      <div className="flex min-h-full flex-1 flex-row justify-center p-[150px] ">
        <div className="sm:mx-auto sm:w-full sm:max-w-sm">
        <img src={svg} alt="img" />
        </div>
        <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
          <form className="space-y-6">
            <div>
              <div className="bg-white p-4 rounded-lg max-w-[550px]">
                <label className="text-gray-600 text-xl">Mobile number</label>
                <p className="text-gray-600 text-sm">
                  Please enter your mobile number for OTP verification
                </p>
                <div className="relative mt-2 max-w-xs text-gray-500">
                  <div className="absolute inset-y-0 left-3 my-auto h-6 flex items-center border-r pr-2">
                    <div className="text-sm outline-none rounded-lg h-full">
                      +91
                    </div>
                  </div>
                  <input
                    type="number"
                    placeholder="Number"
                    className="w-full pl-[3.5rem] pr-3 py-2 appearance-none bg-transparent outline-none border focus:border-slate-600 shadow-sm rounded-lg"
                  />
                </div>
              </div>
            </div>
            <div>
              <button
                type="submit"
                className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
              >
                Sign in
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}

export default Login;
