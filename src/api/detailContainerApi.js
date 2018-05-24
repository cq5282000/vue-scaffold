import fetch from '../libs/fetch';
export default {
    fetchListData: async() => {
        const responseData = await fetch({
            url: '/detail'
        });
        console.log(responseData);
        return responseData;
    }
}