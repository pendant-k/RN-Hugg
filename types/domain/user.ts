export interface AgreementStatus {
    termsAgreement: boolean;
    privacyAgreement: boolean;
    ageAgreement: boolean;
}

export enum SurgeryType {
    THINK_SURGERY = "시술 고민 중",
    IUI = "인공수정(자궁 내 정자 주입술)",
    EGG_FREEZING = "난자 동결",
    IN_VITRO_FERITILIZATION = "체외 수정(시험관 아기)",
}
