
function calculateYear() {
    var input = document.getElementById("inputDate").value;
    var d = new Date(input);
    var year = d.getFullYear();

    if (year > 2025 || year < 1900)
        document.getElementById("printHere").innerHTML = "Invalid Date";
    else {
        if (year == 2025 || year == 2013 || year == 2001 || year == 1989 || year == 1977 || year == 1965|| year == 1953)
            document.getElementById("printHere").innerHTML = "You are the year of the Snake";
        if (year == 2024 || year == 2012 || year == 2000 || year == 1988 || year == 1976 || year == 1964|| year == 1952)
            document.getElementById("printHere").innerHTML = "You are the year of the Dragon";
        if (year == 2023 || year == 2011 || year == 1999 || year == 1987 || year == 1975 || year == 1963|| year == 1951)
            document.getElementById("printHere").innerHTML = "You are the year of the Rabbit";
        if (year == 2022 || year == 2010 || year == 1998 || year == 1986 || year == 1974 || year == 1962|| year == 1950)
            document.getElementById("printHere").innerHTML = "You are the year of the Tiger";
        if (year == 2021 || year == 2009 || year == 1997 || year == 1985 || year == 1973 || year == 1961|| year == 1949)
            document.getElementById("printHere").innerHTML = "You are the year of the Ox";
        if (year == 2020 || year == 2008 || year == 1996 || year == 1984 || year == 1972 || year == 1960|| year == 1948)
            document.getElementById("printHere").innerHTML = "You are the year of the Rat";
        if(year == 2019 || year == 2007 || year == 1995 || year == 1983 || year == 1971 || year == 1959|| year == 1947)
            document.getElementById("printHere").innerHTML = "You are the year of the Pig";
        if(year == 2018 || year == 2006 || year == 1994 || year == 1982 || year == 1970 || year == 1958|| year == 1946)
            document.getElementById("printHere").innerHTML = "You are the year of the Dog";
        if(year == 2017 || year == 2005 || year == 1993 || year == 1981 || year == 1969 || year == 1957|| year == 1945)
            document.getElementById("printHere").innerHTML = "You are the year of the Rooster";
        if(year == 2016 || year == 2004 || year == 1992 || year == 1980 || year == 1968 || year == 1956|| year == 1944)
            document.getElementById("printHere").innerHTML = "You are the year of the Monkey";
        if(year == 2015 || year == 2003 || year == 1991 || year == 1979 || year == 1967 || year == 1955|| year == 1943)
            document.getElementById("printHere").innerHTML = "You are the year of the Sheep";
        if(year == 2014 || year == 2002 || year == 1990 || year == 1978 || year == 1966 || year == 1954|| year == 1942)
            document.getElementById("printHere").innerHTML = "You are the year of the Horse";
    }
}

const openModalButtons = document.querySelectorAll('[data-modal-target]')
const closeModalButtons = document.querySelectorAll('[data-close-button]')
const overlay = document.getElementById('overlay')

openModalButtons.forEach(button => {
    button.addEventListener('click', () => {
        const modal = document.querySelector(button.dataset.modalTarget)
        openModal(modal)
    })
})

overlay.addEventListener('click', () => {
    const modals = document.querySelectorAll('.modal.active')
    modals.forEach(modal => {
        closeModal(modal)
    })
})

closeModalButtons.forEach(button => {
    button.addEventListener('click', () => {
        const modal = button.closest('.modal')
        closeModal(modal)
    })
})

function openModal(modal) {
    if (modal == null) return
    modal.classList.add('active')
    overlay.classList.add('active')
}

function closeModal(modal) {
    if (modal == null) return
    modal.classList.remove('active')
    overlay.classList.remove('active')
}