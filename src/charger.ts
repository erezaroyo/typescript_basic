function getInputByUser() : void{

    document.getElementById("submit")?.addEventListener("click",()=>{
        const input:HTMLElement|null= document.getElementById("currency");
        console.log(input);
    })
}
getInputByUser();