"use client";
import VerificationCode from "@/components/signup/VerificationCode";
import { useActiveStepsStore } from "@/hooks/useActiveSteps";
import PersonalInformation from "@/components/signup/PersonalInformation";
import AccountInformation from "@/components/signup/AccountInformation";
export default function AdminSignup() {
  const { active, current } = useActiveStepsStore();
  const currentStep = current();
  return (
    <div className="flex flex-col gap-[40px] items-center justify-center min-h-screen bg-teal-50">
      {/* Stepper */}
      <div className="flex flex-row w-[670px] h-[60px] gap-[20px] items-center justify-center bg-teal-800 rounded-[20px]">
        {[1, 2, 3].map((step, index) => (
          <>
            <span
              key={index + 1}
              className={`flex flex-row items-center justify-center w-[40px] h-[40px] rounded-full bg-teal-50 text-[20px] ${
                active.includes(step) && "text-teal-600"
              }`}
            >
              {step}
            </span>
            {step !== 3 && (
              <span
                key={index}
                className="flex flex-row w-[50px] items-center border-[1px] bg-teal-50 rounded-full"
              ></span>
            )}
          </>
        ))}
      </div>
      {/* Main form */}
      <div className="flex flex-col flex-wrap w-[800px] h-[600px] bg-teal-800 rounded-[20px] justify-center content-center gap-4 shadow-lg">
        {(currentStep === 1 && <VerificationCode />) ||
          (currentStep === 2 && <PersonalInformation />) ||
          (currentStep === 3 && <AccountInformation />)}
      </div>
    </div>
  );
}
