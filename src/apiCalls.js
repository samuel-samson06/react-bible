export async function getOldTestament(){
    const url = 'https://ajith-holy-bible.p.rapidapi.com/GetBooks';
    const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': 'a0b62b3047mshb27b79ca5178d3fp15c1b7jsn167172228031',
		'X-RapidAPI-Host': 'ajith-holy-bible.p.rapidapi.com'
	}
};

    try{
        const response=await fetch(url,options);
        const data= await response.json();
        return(data.The_Old_Testament)
    }catch(error){
        //console.log(error);
        console.log("ERROR");
    }
}
export async function getBookName(id){
    const url=`https://bible-search.p.rapidapi.com/books-by-name?bookName=${id}`
    const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': 'a0b62b3047mshb27b79ca5178d3fp15c1b7jsn167172228031',
		'X-RapidAPI-Host': 'bible-search.p.rapidapi.com'
	}
};
    try{
        const response=await fetch(url,options);
        const data=await response.json()
        
        return (data);
    }catch(err){
       // console.log(err);
        console.log("rrer");
    }
}

export async function getVerses(chapter,verse){
    const url = `https://ajith-holy-bible.p.rapidapi.com/GetChapter?Book=${chapter}&chapter=${verse}`;
const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': 'a0b62b3047mshb27b79ca5178d3fp15c1b7jsn167172228031',
		'X-RapidAPI-Host': 'ajith-holy-bible.p.rapidapi.com'
	}
};

    try{
        const response = await fetch(url,options);
        const data=await response.json();
        return (data)
    }catch(err){
        //console.log(err);
        console.log("ftybn");
    }

}

console.log(getVerses());

export async function getNewTestament(){
    const url = 'https://ajith-holy-bible.p.rapidapi.com/GetBooks';
    const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': 'a0b62b3047mshb27b79ca5178d3fp15c1b7jsn167172228031',
		'X-RapidAPI-Host': 'ajith-holy-bible.p.rapidapi.com'
	}
};

    try{
        const response=await fetch(url,options);
        const data= await response.json();
        return(data.The_New_Testament)
    }catch(error){
        console.log(error);
    }
}


export async function getRandomVerse(){
    const url = 'https://bible-search.p.rapidapi.com/random-verse';
    const options = {
        method: 'GET',
        headers: {
            'X-RapidAPI-Key': 'a0b62b3047mshb27b79ca5178d3fp15c1b7jsn167172228031',
            'X-RapidAPI-Host': 'bible-search.p.rapidapi.com'
        }
    };

    try{
        const response= await fetch(url,options);
        const data=await response.json();
        return data
    }catch(err){
        console.log(err);
    }
}

console.log(getRandomVerse());