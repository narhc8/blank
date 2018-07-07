var cstr="123";
var ln=cstr.length;
var acapchs=[];
var aid=[];
var adata=[];
var atitle=[];
var adescr=[];
var alink=[];

for (i=1;i<ln;i++){
 recsym=cstr.substr(i-1,1);
 imgsrc="images/capchs/"+recsym+".png";
 acapchs[i]=new Image();
 acapchs[i].src=imgsrc;
}

