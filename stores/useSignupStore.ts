import { AgreementStatus, SurgeryType } from "@/types/domain/user";

export interface SignupState {
    agreementStatus: AgreementStatus;
    ssn: string;
    fcmToken: string;
    surgeryType: SurgeryType;
    currentCount: number;
    startAt: Date;
}

const useSignupStore = "";
