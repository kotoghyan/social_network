export const generateNextId = (arr) => {
    return arr[arr.length - 1].id + 1;
}

export const imagePathGenerator = (str) => {
    if(!str?.length) {
        return '';
    }
    if(str.includes('http')){
        return str;
    }

    return str[0] === '/' ? str : `/${str}`;
}
