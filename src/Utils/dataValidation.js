/**
 * 
 * @param {object} data 
 * @param {string} dataName recommend: Object.keys({data})[0]
 * @returns 
 */
const validateData = (data, dataName='data') => {

    // 배열일 경우 (객체가 아닐 경우1)
    if (Array.isArray(data)) {
        const msg = `${dataName} requires an object, witch is an array.`;
        console.error(msg);
        return(false);
    } 
    // 객체일 경우
    if ((typeof data === 'object') && (data !== null)){
        let nulldata = {};

        for (const key in data) {
            if (data[key]===null || data[key]===undefined || data[key]==='' ){
                nulldata[key] = data[key];
            }
        }

        // nulldata에 값이 존재할 경우
        if(Object.keys(nulldata).length !== 0){
            const msg = `${dataName} has empty value. Check the properties:`;
            console.error(msg, nulldata);
            return(false);
        } else {
            console.log('good');
            return(true);
        };
    }
    // 객체가 아닐 경우2
    else {
        const msg = `${dataName} requires requires an object, witch is a ${typeof data}.`;
        console.error(msg);
        return(false);
    }
};

export default validateData;
