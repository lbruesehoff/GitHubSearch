let form = document.getElementById("searchForm");


let darkLight = () =>{
    let body = document.body;
    
    let title = document.querySelector("#devFinder");
    let card = document.querySelector("#card");
    let username = document.querySelector("#username");
    let bio = document.querySelector('#bio');
    let mobileBio = document.querySelector('#mobileBio');
    let stats = document.querySelector('#stats');
    let input = document.querySelector("#search");
    let join = document.querySelector("#joined");
    let repo = document.querySelector("#repo");
    let following = document.querySelector("#following");
    let followers = document.querySelector("#followers");
    let statsTitles = document.querySelector("#statsTitles");
    let followersTitle = document.querySelector("#followersTitle");
    let followingTitle = document.querySelector("#followingTitle");
    let location = document.querySelector('#location');
    let twitter = document.querySelector('#twitter');
    let website = document.querySelector('#website');
    let company = document.querySelector('#company');
    body.classList.toggle('darkLight');
    
    input.classList.toggle('inputTheme');
    input.classList.toggle('searchTheme')
    username.classList.toggle('white');
    bio.classList.toggle('white');
    mobileBio.classList.toggle('white');
    join.classList.toggle('white');
    stats.classList.toggle('statsTheme');
    title.classList.toggle('white');
    statsTitles.classList.toggle('white');
    followersTitle.classList.toggle('white');
    followingTitle.classList.toggle('white');
    repo.classList.toggle('white');
    following.classList.toggle('white');
    followers.classList.toggle('white');
    card.classList.toggle('cardTheme');
    location.classList.toggle('white');
    twitter.classList.toggle('white');
    website.classList.toggle('white');
    company.classList.toggle('white');

    let svgTheme = document.querySelector('#svgTheme');
    let theme = document.querySelector('#theme');

    if(theme.innerHTML === "LIGHT"){
        let dark = theme.innerHTML = "DARK";
        let svgDark = svgTheme.src = "./assets/icon-moon.svg"
        let darkFont = theme.classList.toggle('grey');
        return (dark, svgDark, darkFont);
    }else{
        let light = theme.innerHTML = "LIGHT";
        let svgLight = svgTheme.src = "./assets/icon-sun.svg";
        let fontColor = theme.classList.toggle('white');
        return (light, svgLight, fontColor);
    }
};

// Auto Fill lbruesehoff when user enters app
fetch("https://api.github.com/users/lbruesehoff")
.then((results) => results.json())
.then((e) => {

    document.querySelector('.avatar').innerHTML = ` <img src="${e.avatar_url}" />`;
    document.querySelector('#username').innerHTML = `${e.name}`;
    document.querySelector('#atName').innerHTML = `@${e.login}`;

    let bioFill = () =>{
        if(e.bio == null){
            return `This profile has no bio`;
        }else{
            return e.bio;
        };
    };

    document.querySelector('#bio').innerHTML = bioFill();
    document.querySelector('#mobileBio').innerHTML = bioFill();

    let dateFill = e.created_at; 
        const monthNamesFill = ["Jan", "Feb", "Mar", "Apr", "May", "Jun",
            "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
        let timestampFill = new Date(dateFill).getTime();
        let Days = new Date(timestampFill).getDate();
        let Months = new Date(timestampFill).getMonth() + 1;
        let Years = new Date(timestampFill).getFullYear();
        let dateFormateFill = `${Days} ${monthNamesFill[Months]} ${Years}`;
        document.querySelector('#joined').innerHTML = `Joined ${dateFormateFill}`;

        document.querySelector('#repo').innerHTML = `${e.public_repos}`;
        document.querySelector('#followers').innerHTML = `${e.followers}`;
        document.querySelector('#following').innerHTML = `${e.following}`;


        let location = () => {
            if( e.location == null){
                return "Not Available";
            }else{
                return e.location;
            }
        };
        document.querySelector('#location').innerHTML = `<img src="./assets/icon-location.svg" alt=""> ${location()}`;
        

        let twitter = () => {
            if( e.twitter == null){
                return "Not Available";
            }else{
                return e.twitter_username;
            }
        };
        document.querySelector('#twitter').innerHTML = `<img src="./assets/icon-twitter.svg" alt=""> ${twitter()}`;

     let company = () => {
            if( e.company == null){
                return "Not Available";
            }else{
                return e.company;
            }
        };

        document.querySelector('#company').innerHTML = `<img src="./assets/icon-company.svg" alt=""> ${company()}`;

        let website = () => {
            if( e.blog == ""){
                return "Not Available";
            }else{
                return e.blog;
            }
        };
        document.querySelector('#website').innerHTML = `<img src="./assets/icon-website.svg" alt=""> <a href="${website()}">${website()}</a>`;
        
})

form.addEventListener('submit', function(e){
    e.preventDefault()

    let search = document.getElementById("search").value;

    let originalName = search.split(' ').join('');



    fetch("https://api.github.com/users/"+originalName)
    .then((results) => results.json())
    .then((data) => {

        if(data.message){
           return alert("Invalid Username");
        }

        document.querySelector('.avatar').innerHTML = ` <img src="${data.avatar_url}" />`;
        document.querySelector('#username').innerHTML = `${data.name}`;
        document.querySelector('#atName').innerHTML = `@${data.login}`;

        let bio = () =>{
            if(data.bio == null){
                return `This profile has no bio`;
            }else{
                return data.bio;
            };
        };

        document.querySelector('#bio').innerHTML = bio();
        document.querySelector('#mobileBio').innerHTML = bio();

        let date = data.created_at; 
        const monthNames = ["Jan", "Feb", "Mar", "Apr", "May", "Jun",
            "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
        let timestamp = new Date(date).getTime();
        let Day = new Date(timestamp).getDate();
        let Month = new Date(timestamp).getMonth() + 1;
        let Year = new Date(timestamp).getFullYear();
        let dateFormate = `${Day} ${monthNames[Month]} ${Year}`;
        document.querySelector('#joined').innerHTML = `Joined ${dateFormate}`;

        document.querySelector('#repo').innerHTML = `${data.public_repos}`;
        document.querySelector('#followers').innerHTML = `${data.followers}`;
        document.querySelector('#following').innerHTML = `${data.following}`;

        let location = () => {
            if( data.location == null){
                return "Not Available";
            }else{
                return data.location;
            }
        };
        document.querySelector('#location').innerHTML = `<img src="./assets/icon-location.svg" alt=""> ${location()}`;
        

        let twitter = () => {
            if( data.twitter == null){
                return "Not Available";
            }else{
                return data.twitter_username;
            }
        };
        document.querySelector('#twitter').innerHTML = `<img src="./assets/icon-twitter.svg" alt=""> ${twitter()}`;

     let company = () => {
            if( data.company == null){
                return "Not Available";
            }else{
                return data.company;
            }
        };

        document.querySelector('#company').innerHTML = `<img src="./assets/icon-company.svg" alt=""> ${company()}`;

        let website = () => {
            if( data.blog == ""){
                return "Not Available";
            }else{
                return data.blog;
            }
        };
        document.querySelector('#website').innerHTML = `<img src="./assets/icon-website.svg" alt=""> <a href="${website()}">${website()}</a>`;
        

        console.log(data.message)
    })

});

console.log("")