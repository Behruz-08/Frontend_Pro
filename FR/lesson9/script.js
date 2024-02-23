

let albumsData = [];
let currentPage = 1;
const albumsPerPage = 9;



function fetchData() {
    fetch('https://jsonplaceholder.typicode.com/photos?_limit=99')
        .then(response => response.json())
        .then(data => {
            albumsData = data;
            renderAlbums(currentPage);
        })
        .catch(error => console.error('ощибка запроса:', error));
}



function search() {
    const searchTerm = document.getElementById('searchInput').value.toLowerCase();
    const filteredAlbums = albumsData.filter(album => album.title.toLowerCase().includes(searchTerm));
    renderAlbumsFiltered(filteredAlbums);
}



function renderAlbumsFiltered(filteredAlbums) {
    const albumsContainer = document.getElementById('albums');
    albumsContainer.innerHTML = '';
    filteredAlbums.forEach(album => {
        renderAlbum(albumsContainer, album);
    });
}



function renderAlbums(page) {
    const albumsContainer = document.getElementById('albums');
    albumsContainer.innerHTML = '';
    const startIndex = (page - 1) * albumsPerPage;
    const endIndex = startIndex + albumsPerPage;
    const albumsToShow = albumsData.slice(startIndex, endIndex);
    albumsToShow.forEach(album => {
        renderAlbum(albumsContainer, album);
    });
    renderPagination();
}



function renderPagination() {
    const totalPages = Math.ceil(albumsData.length / albumsPerPage);
    const paginationContainer = document.getElementById('pagination');
    paginationContainer.innerHTML = '';
    const maxPagesToShow = 10;
    const startPage = Math.max(1, currentPage - Math.floor(maxPagesToShow / 2));
    const endPage = Math.min(totalPages, startPage + maxPagesToShow - 1);
    for (let i = startPage; i <= endPage; i++) {
        const pageLink = document.createElement('a');
        pageLink.href = '#';
        pageLink.textContent = i;
        if (i === currentPage) {
            pageLink.classList.add('active');
        }
        pageLink.onclick = function() {
            currentPage = i;
            renderAlbums(currentPage);
        };
        paginationContainer.appendChild(pageLink);
    }
}



function showForm() {
    document.getElementById('postForm').style.display = 'block';
}



function addPost() {
    const title = document.getElementById('title').value;
    const url = document.getElementById('url').value;
    if (title && url) {
        const newPost = { title: title, thumbnailUrl: url };
        albumsData.unshift(newPost); 
        currentPage = 1; 
        renderAlbums(currentPage);
        document.getElementById('postForm').style.display = 'none';
        document.getElementById('title').value = '';
        document.getElementById('url').value = '';
    } else {
        alert('Пожалуйста заполныте поле');
    }
}



function renderAlbum(container, album) {
    const albumElement = document.createElement('div');
    albumElement.classList.add('album');
    albumElement.innerHTML = `
        <h3>${album.title}</h3>
        <img src="${album.thumbnailUrl}" alt="${album.title}">
    `;
    container.appendChild(albumElement);
}



fetchData();



