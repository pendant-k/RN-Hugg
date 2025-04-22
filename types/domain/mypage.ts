import { SurgeryType } from "./user";

export interface MyPageResponseDTO {
    id: number;
    nickname: string;
    surgeryType: SurgeryType;
    count: number;
    startDate: string;
    spouse: string;
    ssn: string;
    spouseCode: string;
    challengeNickname: string;
}
