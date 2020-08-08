//TODO: This interface should a be a bit more generic,
//since it's going to be the main "return type" of almost all routes of this API
//and cases
export default interface IURLValidationResult {
    isValid: Boolean;
    message: string;
}