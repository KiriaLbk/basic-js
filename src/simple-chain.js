const chainMaker = {
    n:0,
    getLength:function()
    {
        return this.n;
    },
    reverseChain:function()
    {
        if(this.n!=1)
        {
            let position=[];
            let element={};
            let counter=0;
            let num=-5;
            let number=-5;
            let arr = this.str.split('');
            if(arr.findIndex((el,index,ar) => ar[index]=='(' && ar[index+1]==")" && ar[index+2]!="~")==-1)
            {
                while(arr.findIndex((el,index,ar) => ar[index]==')' && index>number)!=-1){
                    num = arr.findIndex((el,index,ar) => ar[index]=='(' && index>num && index>number) ;
                    number = arr.findIndex((el,index,ar) => ar[index]==')' && index>number)+1 ;               
                    element.begin=num;
                    element.end=number;
                    position[counter]=element;
                    counter++;
                    element={};
                }
            }
            else
            {
                let count=arr.findIndex((el,index,ar) => ar[index]=='(' && ar[index+1]==")" && ar[index+2]!="~");
                arr[count]='*';
                arr[count+1]="*";
                while(arr.findIndex((el,index,ar) => ar[index]==')' && index>number)!=-1){
                    num = arr.findIndex((el,index,ar) => ar[index]=='(' && index>num && index>number) ;
                    number = arr.findIndex((el,index,ar) => ar[index]==')' && index>number)+1 ;               
                    element.begin=num;
                    element.end=number;
                    position[counter]=element;
                    counter++;
                    element={};
                }
                arr[count]="(";
                arr[count+1]=")"
            }
            this.str='';
            for(let count=position.length-1;count>=0;count--)
            {
                 for(let i=position[count].begin;i<position[count].end;i++)
                 {
                    this.str+=arr[i];
                 }
                 if (count!=0)
                 {
                    this.str+='~~'; 
                 }
            }
        }
        return this;
    }
    ,removeLink:function(position)
    {

        if(JSON.stringify(position).indexOf('.')==-1 && position<=this.n && position>0 && typeof(position)=="number")
        {
            let n=0;
            let firstlet=0;
            let lastlet=0;
            if(position!=1 && position!=this.n)
            {
                while(n!=(position-1))
                {
                    firstlet = this.str.split('').findIndex((el,index,ar) => ar[index]==ar[index+1] && ar[index]=='~' && index>firstlet);
                    lastlet = this.str.split('').indexOf('~',firstlet+2);
                    n++;
                }
                this.str=this.str.split('').splice(0,firstlet).join('').concat(this.str.split('').splice(lastlet,this.str.length-lastlet).join(''));
            }
            else if(position==1){
                lastlet = (this.str.split('').indexOf('~'))+2;
                this.str=this.str.split('').splice(lastlet,).join('');
            }
            else if(position==this.n)
            {
                lastlet = (this.str.split('').lastIndexOf('~'))-1;
                this.str=this.str.split('').splice(0,lastlet).join('');                
            }
        }
        else{
            throw new RangeError("Error"); 
        }
        return this;
    },
    addLink:function(val) {
        if(this.n==0)
        {
            this.str='';
            this.str+='( '+val+' )';
            this.n++;
        }
        else{
            this.str+='~~( '+val+' )';
            this.n++;
        }
        return this;
    }
    ,finishChain:function(){
        let string=this.str;
        this.str='';
        this.n=0;
        return string;
    }
};

module.exports = chainMaker;
