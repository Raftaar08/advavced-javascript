const nums = [1, 2, 4, 5, 6, 7,];
for (let i =0;  i < nums.length; i++){
    
    if(nums[i]>4){
        break;
    }
// console.log(nums[i]);
}

for (let i =0;  i < nums.length; i++){

    if(nums[i]>0){
        continue;
    }
    console.log(nums[i]);
}