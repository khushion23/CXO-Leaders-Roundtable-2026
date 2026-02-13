import SectionWrapper from "@/components/SectionWrapper";
import { useForm } from "react-hook-form";
import { useState } from "react";
import Queries from "./Queries";

type FormData = {
  fullName: string;
  designation: string;
  organization: string;
  email: string;
  phone: string;
};

const fields = [
  { name: "fullName" as const, placeholder: "Full Name", type: "text" },
  { name: "designation" as const, placeholder: "Designation", type: "text" },
  { name: "organization" as const, placeholder: "Organization", type: "text" },
  { name: "email" as const, placeholder: "Email Address", type: "email" },
  { name: "phone" as const, placeholder: "Phone Number", type: "tel" },
];

function RSVP() {
  const [submitted, setSubmitted] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<FormData>();

  function onSubmit(data: FormData) {
    console.log(data);
    setSubmitted(true);
  }

  return (
    <>
      <SectionWrapper id="rsvp">
        <div className="w-full max-w-6xl flex flex-col md:flex-row rounded-2xl shadow-xl overflow-hidden p-8 md:p-12 mx-auto bg-[#0d1017]">

          {/* LEFT SIDE - FORM */}
          <div className="flex-1 bg-[#11131a] p-4 flex flex-col justify-center">
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-1">
              Register Your Interest
            </h2>
            <div className="h-1 w-40 bg-[#a259ff] rounded mb-3" />
            <p className="text-sm text-gray-300 mb-4">
              Secure your seat at the CXO Leaders' Roundtable 2026. Please fill out the form below, and we'll get back to you with the details.
            </p>
            {submitted ? (
              <div className="text-center">
                <h3 className="text-2xl font-bold text-white mb-2">
                  Registration Confirmed
                </h3>
                <p className="text-gray-400">
                  Thank you for registering. We'll send a confirmation email shortly.
                </p>
              </div>
            ) : (
              <form
                className="space-y-2"
                onSubmit={handleSubmit(onSubmit)}
              >
                {fields.map((field) => (
                  <div key={field.name}>
                    <input
                      {...register(field.name, {
                        required: "This field is required",
                      })}
                      type={field.type}
                      placeholder={field.placeholder}
                      className="w-full rounded-lg border border-[#23262f] bg-[#181b23] px-3 py-2 text-base text-gray-100 placeholder:text-gray-500 focus:border-green-400 focus:outline-none focus:ring-1 focus:ring-purple-400 transition-colors"
                    />
                    {errors[field.name] && (
                      <p className="text-xs text-red-400 mt-1">
                        {errors[field.name]?.message}
                      </p>
                    )}
                  </div>
                ))}
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-fit px-6 py-2 rounded-lg font-bold text-white text-base shadow-md transition-all bg-gradient-to-r from-[#7b6cff] via-[#a259ff] to-[#ff6ec4] hover:brightness-110 border-none outline-none drop-shadow-[0_2px_8px_rgba(0,0,0,0.25)] mx-auto"
                  style={{ textShadow: '0 2px 8px rgba(0,0,0,0.25)' }}
                >
                  Submit
                </button>
              </form>
            )}
          </div>
          {/* RIGHT SIDE - VIDEO */}
          <div className="flex-1 flex items-center justify-center bg-[#11131a] p-3">
            <video
              src="/data/7592140-hd_1920_1080_25fps%20(1)%20-%20CROP%20-%20Videobolt.net%20(1).mp4"
              autoPlay
              loop
              muted
              playsInline
              className="rounded-2xl object-cover w-full max-w-md h-[300px] shadow-lg"
            />
          </div>
        </div>
      </SectionWrapper>
      <Queries />
    </>
  );
}

export default RSVP;
