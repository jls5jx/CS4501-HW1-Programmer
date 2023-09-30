const clickableText = document.getElementById('clickable-text');
clickableText.addEventListener('click', function checkAll() {
    const checkboxes = document.querySelectorAll('input[type="checkbox"]');
    checkboxes.forEach((checkbox) => {
    checkbox.checked = true;
    unEnroll.style.visibility = 'visible';
    unEnroll.style.margin = 'auto';
    unEnroll.style.padding = 10;
    });
} );

const unEnroll = document.getElementById('unenroll');

unEnroll.style.visibility = 'hidden'; 
unEnroll.style.margin = 0;
unEnroll.style.padding = 0;

const myCheckbox1 = document.getElementById('item1')
myCheckbox1.addEventListener('change', function () {
    if (myCheckbox1.checked) {
        unEnroll.style.visibility = 'visible';
        unEnroll.style.margin = 'auto';
        unEnroll.style.padding = 10;
    } else {
        unEnroll.style.visibility = 'hidden'; 
        unEnroll.style.margin = 0;
        unEnroll.style.padding = 0;
    }
});

const myCheckbox2 = document.getElementById('item2')
myCheckbox2.addEventListener('change', function () {
    if (myCheckbox2.checked) {
        unEnroll.style.visibility = 'visible';
        unEnroll.style.margin = 'auto';
        unEnroll.style.padding = 10;
    } else {
        unEnroll.style.visibility = 'hidden'; 
        unEnroll.style.margin = 0;
        unEnroll.style.padding = 0;
    }
});

const myCheckbox3 = document.getElementById('item3')
myCheckbox3.addEventListener('change', function () {
    if (myCheckbox3.checked) {
        unEnroll.style.visibility = 'visible';
        unEnroll.style.margin = 'auto';
        unEnroll.style.padding = 10;
    } else {
        unEnroll.style.visibility = 'hidden'; 
        unEnroll.style.margin = 0;
        unEnroll.style.padding = 0;
    }
});

const myCheckbox4 = document.getElementById('item4')
myCheckbox4.addEventListener('change', function () {
    if (myCheckbox4.checked) {
        unEnroll.style.visibility = 'visible';
        unEnroll.style.margin = 'auto';
        unEnroll.style.padding = 10;
    } else {
        unEnroll.style.visibility = 'hidden'; 
        unEnroll.style.margin = 0;
        unEnroll.style.padding = 0;
    }
});


unEnroll.addEventListener('click', function () {
  alert("Unenrolled")
});

const info = document.getElementById('info');
info.addEventListener('click', function () {
  alert("To unenroll in a class(es), select all or select multiple classes. Then hit the unenroll button that appears below.")
});

const backButton = document.getElementById('back');

backButton.addEventListener('click', function () {
    window.location.href = 'index.html'; 
});
