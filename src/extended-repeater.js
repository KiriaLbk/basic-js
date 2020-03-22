module.exports = function repeater(str, options) {
    let string='';
    let additionSeparator='';
    let separator='';
    if(!options.additionSeparator)
    {
        additionSeparator='|';
    }
    else
    {
        additionSeparator=options.additionSeparator;
    }
    if(!options.separator)
    {
        separator='+';
    }
    else
    {
        separator=options.separator;
    }
    if(typeof str != 'string')
    {
        str=String(str);
    }
    if(typeof options.repeatTimes=='number')
    {
        for (let index = 0; index <options.repeatTimes; index++) {
            string+=str;
            if(typeof options.additionRepeatTimes == 'number')
            {
                for (let i = 0; i < options.additionRepeatTimes; i++) {
                    string+= options.addition;
                    if(i!=options.additionRepeatTimes-1)
                    {
                        string+= additionSeparator;
                    }   
                }       
            }
            else{
                if(options.addition)
                {
                    string+= options.addition;
                }
            }
            if(index!=options.repeatTimes-1)
            {
                string+=separator;
            }
        }
    }
    else
    {
        string+=str;
        if(typeof options.additionRepeatTimes == 'number')
            {
                for (let i = 0; i < options.additionRepeatTimes; i++) {
                    string+= options.addition;
                    if(i!=options.additionRepeatTimes-1)
                    {
                        string+= additionSeparator;
                    }   
                }       
            }
            else{
                if(options.addition)
                {
                    string+= options.addition;
                }
            }
    }
    return string;
};