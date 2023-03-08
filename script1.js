url = 'https://api.unsplash.com/search/photos?client_id=VoZLyfqRLp4QUmaZ69yCAskhsVyaVgD15tc09wMXAdA&query=nature';
async function data(){
    f = fetch(url);
    d  = await f;
    new1 = d.json();
    d1 = await new1
    console.log(d1);
}



