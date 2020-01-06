
//时间过虐器
let timefliter=(data,pattern='yyyy-mm-dd H:D:S')=>{
    //根据给定的事件字符串，得到特定的时间
    var dt=new Date(data)
    //yyyy-mm-dd
    var y=dt.getFullYear();
    var m=(dt.getMonth()+1).toString().padStart(2,'0');
    
    var d=dt.getDate().toString().padStart(2,'0');

    
    if(pattern.toLowerCase()==='yyyy-mm-dd'){
        return y+'-'+m+'-'+d
    }else if(pattern.toLowerCase()==='yyyy-mm'){
        return y+'-'+m
    }else{
        var hh=dt.getHours().toString().padStart(2,'0');
        var mm=dt.getMinutes().toString().padStart(2,'0');
        var ss=dt.getSeconds().toString().padStart(2,'0');
        return y+'-'+m+'-'+d+" "+hh+":"+mm+":"+ss
    }
}
//小数点保留
let point=(data,num)=>{
    let datanum=parseFloat(data).toFixed(num);
    return datanum
}

//时间拼接截取
let timetxt=(data,txt='')=>{
    let year=data.toString().substring(0,4)
    let month=data.toString().substring(4,6)
    let day=data.toString().substring(6);
    return year+'/'+month+'/'+day
}

export {
    timefliter,
    point,
    timetxt
}