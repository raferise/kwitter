//API endpoints go inside this file.
const SocialAppAPI = {
    /**
     * Test api function
     * @returns "test" after 1 second.
     */
    test:async function(){
        return new Promise((resolve) => setTimeout(resolve("test"), 1000));
    }
}
export default SocialAppAPI;