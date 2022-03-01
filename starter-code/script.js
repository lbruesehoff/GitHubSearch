let form = document.getElementById("searchForm");

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

        let date = data.created_at; 
        const monthNames = ["Jan", "Feb", "Mar", "Apr", "May", "Jun",
            "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"
        ];
        let timestamp = new Date(date).getTime();
        let Day = new Date(timestamp).getDate();
        let Month = new Date(timestamp).getMonth() + 1;
        let Year = new Date(timestamp).getFullYear();
        let dateFormate = `${Day} ${monthNames[Month]} ${Year}`;
        document.querySelector('#joined').innerHTML = `Joined ${dateFormate}`;

        document.querySelector('#repo').innerHTML = `${data.public_repos}`;
        document.querySelector('#followers').innerHTML = `${data.followers}`;
        document.querySelector('#following').innerHTML = `${data.following}`;

        document.querySelector('#location').innerHTML = `<img src="./assets/icon-location.svg" alt=""> ${data.location}`;
        document.querySelector('#twitter').innerHTML = `<img src="./assets/icon-twitter.svg" alt=""> ${data.twitter_username}`;
        document.querySelector('#website').innerHTML = `<img src="./assets/icon-website.svg" alt=""> ${data.blog}`;
        document.querySelector('#company').innerHTML = `<img src="./assets/icon-company.svg" alt=""> ${data.company}`;
    })

})