import { SurgeryType } from "@/types/domain/user";

export interface UserJoinRequestDTO {
    surgeryType: SurgeryType;
    count: number;
    startAt: string;
    spouseCode: string;
    ssn: string;
    fcmToken: string;
}

// ssn : 970425-1
export interface UserHusbandJoinRequestDTO {
    spouseCode: string;
    ssn: string;
    fcmToken: string;
}

export interface UserResponseDTO {
    keyCode: string;
    accessToken: string;
    refreshToken: string;
}

export interface UserSpouseCodeResponseDTO {
    spouseCode: string;
}
