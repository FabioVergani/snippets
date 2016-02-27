function f(){
	for(var m=arguments,l=m.length,i=0,e;i<l;++i){
	 e=m[i];
	console.log(e);
	} 
	console.log('\n');  
};


f(1);
f(1,2,3,4,false,6);
