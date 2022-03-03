let form = document.getElementById("searchForm");


let darkLight = () =>{
    let body = document.body;
    body.classList.toggle('darkLight');
    let theme = document.querySelector('#theme');

    if(theme.innerHTML === "LIGHT"){
        return theme.innerHTML = "DARK";
    }else{
        return theme.innerHTML = "LIGHT";
    }
    
}



form.addEventListener('submit', function(e){
    e.preventDefault()

    let search = document.getElementById("search").value;

    let originalName = search.split(' ').join('');



    fetch("https://api.github.com/users/"+originalName)
    .then((results) => results.json())
    .then((data) => {
        console.log(data)

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
            if( data.blog == null){
                return "Not Available";
            }else{
                return data.blog;
            }
        };
        document.querySelector('#website').innerHTML = `<img src="./assets/icon-website.svg" alt=""> <a href="${website()}">${website()}</a>`;
        

        console.log(data.bio)
    })

})