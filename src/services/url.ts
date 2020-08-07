export default class URLServices {
    public createURL(url: string): Boolean {
        try {
            //create URL
            return true;
        }
        catch (error)
        {
            //log error to file
            console.log(`Error during creation of URL: ${error}`);
            return false;
        }
    }
}