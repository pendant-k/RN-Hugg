import { create } from "zustand";
import { SurgeryType } from "@/types/domain/user";

export interface SignupState {
    termsAgreement: boolean;
    privacyAgreement: boolean;
    ageAgreement: boolean;
    ssn: string;
    fcmToken: string;
    surgeryType: SurgeryType;
    currentCount: number;
    startAt: Date;
    setTermsAgreement: (termsAgreement: boolean) => void;
    setPrivacyAgreement: (privacyAgreement: boolean) => void;
    setAgeAgreement: (ageAgreement: boolean) => void;
    setSSN: (ssn: string) => void;
    setFCMToken: (fcmToken: string) => void;
    setSurgeryType: (surgeryType: SurgeryType) => void;
    setCurrentCount: (currentCount: number) => void;
}

const useSignupStore = create<SignupState>((set) => ({
    termsAgreement: false,
    privacyAgreement: false,
    ageAgreement: false,
    ssn: "",
    fcmToken: "",
    surgeryType: SurgeryType.THINK_SURGERY,
    currentCount: 0,
    startAt: new Date(),
    setTermsAgreement: (termsAgreement: boolean) =>
        set((state) => ({ ...state, termsAgreement })),
    setPrivacyAgreement: (privacyAgreement: boolean) =>
        set((state) => ({ ...state, privacyAgreement })),
    setAgeAgreement: (ageAgreement: boolean) =>
        set((state) => ({ ...state, ageAgreement })),
    setSSN: (ssn: string) => set((state) => ({ ...state, ssn })),
    setFCMToken: (fcmToken: string) => set((state) => ({ ...state, fcmToken })),
    setSurgeryType: (surgeryType: SurgeryType) =>
        set((state) => ({ ...state, surgeryType })),
    setCurrentCount: (currentCount: number) =>
        set((state) => ({ ...state, currentCount })),
}));

export default useSignupStore;
