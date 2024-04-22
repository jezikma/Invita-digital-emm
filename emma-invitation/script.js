// hide and show navbar
let lastScrollTop = 0;
wrapperNavbar = document.querySelector('.wrapper-navbar');
window.addEventListener('scroll', function () {
    let scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    if (scrollTop > lastScrollTop) {
        wrapperNavbar.style.top = '-60px';
    } else {
        wrapperNavbar.style.top = '0';
    };
    lastScrollTop = scrollTop;
});

// hide and show button back-to-top
let lastScrollUp = 0;
backToTop = document.querySelector('.back-to-top');
window.addEventListener('scroll', function () {
    let scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    if (scrollTop > lastScrollUp) {
        backToTop.style.bottom = '15px';
    } else {
        backToTop.style.bottom = '-15%';
    };
    lastScrollUp = scrollTop;
});

// set count down time remaining as real time
const target = new Date('May 1 2024 17:00:00').getTime();

const countDown = setInterval(function () {
    const now = new Date().getTime();
    const gap = target - now;

    let day = Math.floor(gap / (1000 * 60 * 60 * 24));
    let hour = Math.floor(gap % (1000 * 60 * 60 * 24) / (1000 * 60 * 60));
    let minute = Math.floor(gap % (1000 * 60 * 60) / (1000 * 60));
    let second = Math.floor(gap % (1000 * 60) / 1000);

    day = day < 10 ? '0' + day : day;
    hour = hour < 10 ? '0' + hour : hour;
    minute = minute < 10 ? '0' + minute : minute;
    second = second < 10 ? '0' + second : second;

    document.querySelector('.days p').innerHTML = `${day} <br> Dias`;
    document.querySelector('.hours p').innerHTML = `${hour} <br> Horas`;
    document.querySelector('.minutes p').innerHTML = `${minute} <br> Minutos`;
    document.querySelector('.seconds p').innerHTML = `${second} <br> Segundos`;

    if (gap <= 0) {
        clearInterval(countDown);

        document.querySelector('.day-remaining').innerHTML = `Hitung Mundur Selesai <br> Terimakasih Atas Kehadiran Anda`;

        document.querySelector('.days p').innerHTML = `00 <br> Dias`;
        document.querySelector('.hours p').innerHTML = `00 <br> Horas`;
        document.querySelector('.minutes p').innerHTML = `00 <br> Minutos`;
        document.querySelector('.seconds p').innerHTML = `00 <br> Segundos`;
    };
}, 1000);

// get map location when user click the button
const getLocation = document.querySelectorAll('.get-location');
for (let i = 0; i < getLocation.length; i++) {
    const getLoc = getLocation[i]
    getLoc.addEventListener('click', () => {
        window.location.href = 'https://maps.app.goo.gl/c8oaVQaWCPFMCrZj7';
    });
};

// get save date when user click the button
const saveDate = document.querySelectorAll('.save-date');
for (let i = 0; i < saveDate.length; i++) {
    const save = saveDate[i]
    save.addEventListener('click', () => {
        window.location.href = 'https://calendar.google.com/calendar/u/0/r/eventedit/MzBmMTUwa3E4N2xlMnVtYWcwcW1pMThsNzIgZGVkaWluZHJhd2FuODEyQG0?hl=id&pli=1';
    });
};

// create copy clipboard when user click button
const copyBtnBca = document.querySelector('.copy-btn-bca');
const btnTextBca = `<i class="fa-solid fa-clone"></i>Salin Rekening`;
const copiedTextBca = `<i class="fa-solid fa-clone"></i>Berhasil di Salin`;

const spaceTextBca = setInterval(function () {
    copyBtnBca.addEventListener('click', function () {
        const noBca = document.querySelector('.no-bca').innerHTML;
        navigator.clipboard.writeText(noBca);

        copyBtnBca.innerHTML = copiedTextBca;
    });

    if (btnTextBca != copiedTextBca) {
        clearInterval();
        copyBtnBca.innerHTML = btnTextBca;
    };

}, 2000);

// create copy clipboard when user click button
const copyBtnBni = document.querySelector('.copy-btn-bni');
const btnTextBni = `<i class="fa-solid fa-clone"></i>Salin Rekening`;
const copiedTextBni = `<i class="fa-solid fa-clone"></i>Berhasil di Salin`;

const spaceTextBni = setInterval(function () {
    copyBtnBni.addEventListener('click', function () {
        const noBni = document.querySelector('.no-bni').innerHTML;
        navigator.clipboard.writeText(noBni);

        copyBtnBni.innerHTML = copiedTextBni;
    });

    if (btnTextBni != copiedTextBni) {
        clearInterval();
        copyBtnBni.innerHTML = btnTextBni;
    };

}, 2000);

// create copy clipboard when user click button
const copyBtnAddress = document.querySelector('.copy-btn-address');
const btnTextAddress = `<i class="fa-solid fa-clone"></i>Salin Alamat`;
const copiedTextAddress = `<i class="fa-solid fa-clone"></i>Berhasil di Salin`;

const spaceTextAddress = setInterval(function () {
    copyBtnAddress.addEventListener('click', function () {
        const address = document.querySelector('.address').innerHTML;
        navigator.clipboard.writeText(address);

        copyBtnAddress.innerHTML = copiedTextAddress;
    });

    if (btnTextAddress != copiedTextAddress) {
        clearInterval();
        copyBtnAddress.innerHTML = btnTextAddress;
    };

}, 2000);

// // create elements load animation every scroll window
// window.addEventListener('scroll', show);

// function show() {
//     let elements = document.querySelectorAll('.element');

//     for (let i = 0; i < elements.length; i++) {
//         let heightWindow = window.innerHeight;
//         let gapAboveElement = elements[i].getBoundingClientRect().top;
//         let sizeScroll = 150;

//         if (gapAboveElement < heightWindow - sizeScroll) {
//             elements[i].classList.add('show-section');
//         } else {
//             elements[i].classList.remove('show-section');
//         };
//     };
// };

const commentArray = localStorage.getItem('comments') ? JSON.parse(localStorage.getItem('comments')) : [];

const checkArray = localStorage.getItem('checks') ? JSON.parse(localStorage.getItem('checks')) : [];

const xmarkArray = localStorage.getItem('xmarks') ? JSON.parse(localStorage.getItem('xmarks')) : [];

const doubtArray = localStorage.getItem('questions') ? JSON.parse(localStorage.getItem('questions')) : [];


const commentTotal = document.querySelector('.comment-total');
const guestName = document.querySelector('.guest-name');
const charName = document.querySelector('char-name');
const commentInput = document.querySelector('.comment-input');
const selectOption = document.querySelector('.select-option');
const hadirOption = document.querySelector('.hadir-option');
const tidakHadirOption = document.querySelector('.tidak-hadir-option');
const raguOption = document.querySelector('.ragu-option');
const hadir = document.querySelector('.hadir');
const tidakHadir = document.querySelector('.tidak-hadir');
const masihRagu = document.querySelector('.masih-ragu');
const iconCheck = '<i class="fa-solid fa-circle-check"></i>'
const wrapperComment = document.querySelector('.wrapper-comment');
const pagination = document.querySelector('.pagination');
const btnSendComment = document.querySelector('.btn-send-comment');

window.onload = function () {
    displayTotalComment();
    displayComment();
};

btnSendComment.addEventListener('click', () => {
    if (commentInput.value == '') {
        alert('Anda harus menulis sesuatu sebelum menekan tombol kirim !!');
    } else {
        createcomment(commentInput);
    };
});

function createcomment(commentInput) {
    commentArray.push(commentInput.value);
    localStorage.setItem('comments', JSON.stringify(commentArray));
    location.reload();
};

function displayComment() {
    let comment = '';

    if (commentArray == 0) {
        comment +=
            `
        <div class="comment-notif">
            <i class="fa-solid fa-comments"></i>
            <h5>Belum ada komentar apapun disini !!</h5>
        </div>
        `

        wrapperComment.innerHTML = comment;

        pagination.style.display = 'none';

    } else {
        for (let i = 0; i < commentArray.length; i++) {
            comment +=
                `
            <li class="comments">
                <div class="comment-avatar">
                    <h4 class="char-name">${guestName.innerHTML[0]}</h4>
                </div>
                <div class="comment-content">
                    <div class="comment-name">
                        <h4>${guestName.innerHTML}<i class="fa-solid fa-circle-check"></i></h4>
                    </div>
                    <div class="comment-text">
                        <p>${commentArray[i]}</p>
                    </div>
                    <div class="comment-time">
                        <p><i class="fa-regular fa-clock" style="font-size: 0.7rem"></i>2jam lalu</p>
                        <button class="reply-btn" type="submit">balas</button>
                        <button class="delete-btn" type="submit">hapus</button>
                    </div>
                </div>
            </li>
            <hr style="color: var(--blue-color);">
            `
        };
        wrapperComment.innerHTML = comment;

        commentInput.value = '';

        pagination.style.display = 'flex';
    };
    activateDeleteBtn();
    activateReplyBtn();
};

function activateDeleteBtn() {
    let deletedBtn = document.querySelectorAll('.delete-btn');
    deletedBtn.forEach((db, i) => {
        db.addEventListener('click', () => {
            deleteComment(i);
        });
    });
};

function deleteComment(i) {
    commentArray.splice(i, 1);
    localStorage.setItem('comments', JSON.stringify(commentArray));
    location.reload();
};

function displayTotalComment() {
    let total = '';
    total = commentArray.length;
    commentTotal.innerHTML = `${total} Komentar`;
};

hadirOption.addEventListener('click', () => {
    createTotalHadir();
});

function createTotalHadir() {
    checkArray.push(hadirOption);
    localStorage.setItem('checks', JSON.stringify(checkArray));
};

function displayTotalHadir() {
    let totalHadir = 0;
    totalHadir = checkArray.length;
    hadir.innerHTML = `${totalHadir} <br> Ingin Hadir`;
};
displayTotalHadir();

tidakHadirOption.addEventListener('click', () => {
    createTotalTidakHadir();
});

function createTotalTidakHadir() {
    xmarkArray.push(tidakHadirOption);
    localStorage.setItem('xmarks', JSON.stringify(xmarkArray));
};

function displayTotalTidakHadir() {
    let totalTidakHadir = 0;
    totalTidakHadir = xmarkArray.length;
    tidakHadir.innerHTML = `${totalTidakHadir} <br> Tidak Hadir`;
};
displayTotalTidakHadir();

raguOption.addEventListener('click', () => {
    createTotalRagu();
});

function createTotalRagu() {
    doubtArray.push(raguOption);
    localStorage.setItem('questions', JSON.stringify(doubtArray));
};

function displayTotalRagu() {
    let totalRagu = 0;
    totalRagu = doubtArray.length;
    masihRagu.innerHTML = `${totalRagu} <br> Masih Ragu`;
};
displayTotalRagu();