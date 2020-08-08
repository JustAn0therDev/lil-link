import IURLValidationResult from '../validators/interfaces/IURLValidationResult'

export default class URLServices {
    public createURL(url: string): IURLValidationResult {
        try {
            //TODO: create URL by writing to a file.
            return {
                isValid: true,
                message: "URL successfully created."
            };
        }
        catch (error) {
            let errorMessage = `Error during creation of URL: ${error}`;
            //log error to file
            console.log(errorMessage);
            return {
                isValid: false,
                message: errorMessage
            };
        }
    }
}