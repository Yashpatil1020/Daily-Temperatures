var dailyTemperatures = function(temperatures) {
    const ans=new Array(temperatures.length).fill(0);
    const stack=[];
    for(let i=temperatures.length-1; i>=0;i--){
        while(stack.length>0 && temperatures[stack[stack.length-1]]<= temperatures[i]){
            stack.pop();
        }
        if(stack.length>0){
            ans[i]=stack[stack.length-1]-i;
        }
        stack.push(i);
    }
    return ans;
};