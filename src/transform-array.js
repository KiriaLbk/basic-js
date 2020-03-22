module.exports = function transform(arr) {
    if(Array.isArray(arr))
    {
        if(arr.length==0)
        {
            return [];
        }
        let conSeq=-3;
        while(arr.findIndex((item, index, array)=>typeof(array[index])=='string' && index>conSeq && (array[index]=="--double-next" || array[index]=="--discard-next" ||
        array[index]=="--double-prev" || array[index]=="--discard-prev"))!=-1){
        conSeq=arr.findIndex((item, index, array)=>typeof(array[index])=='string' && index>conSeq);
        if((conSeq==(arr.length-1) && (arr[conSeq]=="--discard-next" || arr[conSeq]=="--double-next"))
        && (conSeq==0 && (arr[conSeq]=='--double-prev' || arr[conSeq]=="--discard-prev")))
        {
            return arr;
        }
        else
        {
            switch (arr[conSeq])
            {
                case '--discard-next':
                    arr.splice(conSeq,2);
                    break;
                case '--discard-prev':
                    arr.splice(conSeq-1,2); 
                    break;
                case '--double-next':
                    arr[conSeq]=arr[conSeq+1];
                    break;
                case '--double-prev':
                    arr[conSeq]=arr[conSeq-1];
                    break;
                default:
                    break;
                }
        }    
        }
    }
    else
    {
        throw new RangeError("Error"); 
    }
    return arr;
};
