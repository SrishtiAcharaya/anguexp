setInterval((function(){

    return console.log('Hello World');
}),1000);
setTimeout((function(){

    return process.exit(done());
}),6000);

function done(){
    console.log('Done');
}