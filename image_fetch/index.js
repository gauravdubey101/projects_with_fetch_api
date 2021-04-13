console.log('loading is done');
//error handling
//async/await

async function catchImage(){
    const response = await fetch('https://picsum.photos/800/600')
    const blob = await response.blob();
    document.getElementById('images').src = URL.createObjectURL(blob);

}


catchImage().catch(error =>{
    console.log("error!");
    console.log(error);
})


